/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { NetworkFirst } from "workbox-strategies";
import { NavigationRoute, registerRoute } from "workbox-routing";

declare let self: ServiceWorkerGlobalScope;

self.skipWaiting(); // We already tell the user to update, no risk here. Old site content persists until a reload :)

// Push code

self.addEventListener("push", function (event) {
  if (!event.data) {
    console.log("This push event has no data.");
    return;
  }
  if (!self.registration) {
    console.log("Service worker does not control the page");
    return;
  }
  if (!self.registration || !self.registration.pushManager) {
    console.log("Push is not supported");
    return;
  }

  const eventText = event.data.text();
  // Specify default options
  let options = {};
  let title = "";

  // Support both plain text notification and json
  if (eventText.substr(0, 1) === "{") {
    const eventData = JSON.parse(eventText);
    title = eventData.title;

    // Set specific options
    // @link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#parameters
    if (eventData.options) {
      options = Object.assign(options, eventData.options);
    }

    // Check expiration if specified
    if (eventData.expires && Date.now() > eventData.expires) {
      console.log("Push notification has expired");
      return;
    }
  } else {
    title = eventText;
  }

  // Warning: this can fail silently if notifications are disabled at system level
  // The promise itself resolve to undefined and is not helpful to see if it has been displayed properly
  const promiseChain = self.registration.showNotification(title, options);

  // With this, the browser will keep the service worker running until the promise you passed in has settled.
  event.waitUntil(promiseChain);
});

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

import { ExpirationPlugin } from "workbox-expiration";
import { BackgroundSyncPlugin } from "workbox-background-sync";

// You're not allowed to take my Background Sync from me! OR my API caching!
registerRoute(
  /^https:\/\/crowdcards-api\.glitch\.me\/api\/.*/,
  new NetworkFirst({
    cacheName: "api-cache",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
      new BackgroundSyncPlugin({
        name: "syncQueue",
        options: {
          maxRetentionTime: 24 * 60,
        },
      }),
    ],
  }),
  "GET"
);

// Cleanup old assets
cleanupOutdatedCaches();

let allowlist: undefined | RegExp[];
if (import.meta.env.DEV) allowlist = [/^\/$/];

// Make it work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL("/"), { allowlist }));

clientsClaim();
