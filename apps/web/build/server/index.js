import { x as x$1, c as c$1, w as w$1, h as h$1, e, n } from './chunks/index-198cd563.js';

let a = "", o = a;
const r = { base: a, assets: o };
function i() {
  a = r.base, o = r.assets;
}
let c = {};
function m$1(t2) {
  c = t2;
}
const h = { app_template_contains_nonce: false, csp: { mode: "auto", directives: { "object-src": ["none"], "script-src": ["self", "https://cdn.jsdelivr.net/npm/eruda", "https://jscdn.glitch.me/cdn/authflow.js", "unsafe-inline"], "base-uri": ["none"], "upgrade-insecure-requests": false, "block-all-mixed-content": false }, reportOnly: { "upgrade-insecure-requests": false, "block-all-mixed-content": false } }, csrf_check_origin: true, track_server_fetches: false, embedded: false, env_public_prefix: "PUBLIC_", hooks: null, preload_strategy: "modulepreload", root: x$1((t2, a2, o2, r2) => {
  let i2, d2, { stores: c2 } = a2, { page: l2 } = a2, { constructors: m2 } = a2, { components: p2 = [] } = a2, { form: h2 } = a2, { data_0: f2 = null } = a2, { data_1: v = null } = a2, { data_2: g = null } = a2;
  c$1("__svelte__", c2), c2.page.notify, void 0 === a2.stores && o2.stores && void 0 !== c2 && o2.stores(c2), void 0 === a2.page && o2.page && void 0 !== l2 && o2.page(l2), void 0 === a2.constructors && o2.constructors && void 0 !== m2 && o2.constructors(m2), void 0 === a2.components && o2.components && void 0 !== p2 && o2.components(p2), void 0 === a2.form && o2.form && void 0 !== h2 && o2.form(h2), void 0 === a2.data_0 && o2.data_0 && void 0 !== f2 && o2.data_0(f2), void 0 === a2.data_1 && o2.data_1 && void 0 !== v && o2.data_1(v), void 0 === a2.data_2 && o2.data_2 && void 0 !== g && o2.data_2(g);
  do {
    i2 = true, c2.page.set(l2), d2 = `


${m2[1] ? `${w$1(m2[0] || h$1, "svelte:component").$$render(t2, { data: f2, this: p2[0] }, { this: (t3) => {
      p2[0] = t3, i2 = false;
    } }, { default: () => m2[2] ? `${w$1(m2[1] || h$1, "svelte:component").$$render(t2, { data: v, this: p2[1] }, { this: (t3) => {
      p2[1] = t3, i2 = false;
    } }, { default: () => `${w$1(m2[2] || h$1, "svelte:component").$$render(t2, { data: g, form: h2, this: p2[2] }, { this: (t3) => {
      p2[2] = t3, i2 = false;
    } }, {})}` })}` : `${w$1(m2[1] || h$1, "svelte:component").$$render(t2, { data: v, form: h2, this: p2[1] }, { this: (t3) => {
      p2[1] = t3, i2 = false;
    } }, {})}` })}` : `${w$1(m2[0] || h$1, "svelte:component").$$render(t2, { data: f2, form: h2, this: p2[0] }, { this: (t3) => {
      p2[0] = t3, i2 = false;
    } }, {})}`}

`;
  } while (!i2);
  return d2;
}), service_worker: false, templates: { app: ({ head: t2, body: n2, assets: e2, nonce: s2, env: a2 }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="' + e2 + '/cclogo.svg" type="image/svg+xml" />\n    <link rel="alternate icon" href="' + e2 + '/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />\n    <link rel="apple-touch-icon" href="/cclogo.png" />\n    <link rel="mask-icon" href="/cclogo.svg" color="#FFFFFF" />\n    <meta name="msapplication-TileColor" content="#FFFFFF" />\n    <meta name="theme-color" content="#ffffff" />\n    <script src="https://jscdn.glitch.me/cdn/authflow.js" crossorigin="anonymous" defer><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/eruda">eruda.init()<\/script>\n    <meta name="description" content="CrowdCards is a trading card game where everyone can make a card." />\n    ' + t2 + '\n  </head>\n  <body class="border-8 border-transparent bg-[#222]">\n    <div>' + n2 + "</div>\n  </body>\n</html>\n", error: ({ status: t2, message: n2 }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + n2 + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + t2 + '</span>\n			<div class="message">\n				<h1>' + n2 + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n" }, version_hash: "qb9u0i" };
function f$1() {
  return {};
}

/** @type {Record<string, string>} */
const escaped = {
	'<': '\\u003C',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};

class DevalueError extends Error {
	/**
	 * @param {string} message
	 * @param {string[]} keys
	 */
	constructor(message, keys) {
		super(message);
		this.name = 'DevalueError';
		this.path = keys.join('');
	}
}

/** @param {any} thing */
function is_primitive(thing) {
	return Object(thing) !== thing;
}

const object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
	Object.prototype
)
	.sort()
	.join('\0');

/** @param {any} thing */
function is_plain_object(thing) {
	const proto = Object.getPrototypeOf(thing);

	return (
		proto === Object.prototype ||
		proto === null ||
		Object.getOwnPropertyNames(proto).sort().join('\0') === object_proto_names
	);
}

/** @param {any} thing */
function get_type(thing) {
	return Object.prototype.toString.call(thing).slice(8, -1);
}

/** @param {string} char */
function get_escaped_char(char) {
	switch (char) {
		case '"':
			return '\\"';
		case '<':
			return '\\u003C';
		case '\\':
			return '\\\\';
		case '\n':
			return '\\n';
		case '\r':
			return '\\r';
		case '\t':
			return '\\t';
		case '\b':
			return '\\b';
		case '\f':
			return '\\f';
		case '\u2028':
			return '\\u2028';
		case '\u2029':
			return '\\u2029';
		default:
			return char < ' '
				? `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`
				: '';
	}
}

/** @param {string} str */
function stringify_string(str) {
	let result = '';
	let last_pos = 0;
	const len = str.length;

	for (let i = 0; i < len; i += 1) {
		const char = str[i];
		const replacement = get_escaped_char(char);
		if (replacement) {
			result += str.slice(last_pos, i) + replacement;
			last_pos = i + 1;
		}
	}

	return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
const unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
const reserved =
	/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;

/**
 * Turn a value into the JavaScript that creates an equivalent value
 * @param {any} value
 * @param {(value: any) => string | void} [replacer]
 */
function uneval(value, replacer) {
	const counts = new Map();

	/** @type {string[]} */
	const keys = [];

	const custom = new Map();

	/** @param {any} thing */
	function walk(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (!is_primitive(thing)) {
			if (counts.has(thing)) {
				counts.set(thing, counts.get(thing) + 1);
				return;
			}

			counts.set(thing, 1);

			if (replacer) {
				const str = replacer(thing);

				if (typeof str === 'string') {
					custom.set(thing, str);
					return;
				}
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'BigInt':
				case 'String':
				case 'Boolean':
				case 'Date':
				case 'RegExp':
					return;

				case 'Array':
					/** @type {any[]} */ (thing).forEach((value, i) => {
						keys.push(`[${i}]`);
						walk(value);
						keys.pop();
					});
					break;

				case 'Set':
					Array.from(thing).forEach(walk);
					break;

				case 'Map':
					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive$1(key) : '...'})`
						);
						walk(value);
						keys.pop();
					}
					break;

				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (Object.getOwnPropertySymbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					for (const key in thing) {
						keys.push(`.${key}`);
						walk(thing[key]);
						keys.pop();
					}
			}
		}
	}

	walk(value);

	const names = new Map();

	Array.from(counts)
		.filter((entry) => entry[1] > 1)
		.sort((a, b) => b[1] - a[1])
		.forEach((entry, i) => {
			names.set(entry[0], get_name(i));
		});

	/**
	 * @param {any} thing
	 * @returns {string}
	 */
	function stringify(thing) {
		if (names.has(thing)) {
			return names.get(thing);
		}

		if (is_primitive(thing)) {
			return stringify_primitive$1(thing);
		}

		if (custom.has(thing)) {
			return custom.get(thing);
		}

		const type = get_type(thing);

		switch (type) {
			case 'Number':
			case 'String':
			case 'Boolean':
				return `Object(${stringify(thing.valueOf())})`;

			case 'RegExp':
				return `new RegExp(${stringify_string(thing.source)}, "${
					thing.flags
				}")`;

			case 'Date':
				return `new Date(${thing.getTime()})`;

			case 'Array':
				const members = /** @type {any[]} */ (thing).map((v, i) =>
					i in thing ? stringify(v) : ''
				);
				const tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
				return `[${members.join(',')}${tail}]`;

			case 'Set':
			case 'Map':
				return `new ${type}([${Array.from(thing).map(stringify).join(',')}])`;

			default:
				const obj = `{${Object.keys(thing)
					.map((key) => `${safe_key(key)}:${stringify(thing[key])}`)
					.join(',')}}`;
				const proto = Object.getPrototypeOf(thing);
				if (proto === null) {
					return Object.keys(thing).length > 0
						? `Object.assign(Object.create(null),${obj})`
						: `Object.create(null)`;
				}

				return obj;
		}
	}

	const str = stringify(value);

	if (names.size) {
		/** @type {string[]} */
		const params = [];

		/** @type {string[]} */
		const statements = [];

		/** @type {string[]} */
		const values = [];

		names.forEach((name, thing) => {
			params.push(name);

			if (custom.has(thing)) {
				values.push(/** @type {string} */ (custom.get(thing)));
				return;
			}

			if (is_primitive(thing)) {
				values.push(stringify_primitive$1(thing));
				return;
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					values.push(`Object(${stringify(thing.valueOf())})`);
					break;

				case 'RegExp':
					values.push(thing.toString());
					break;

				case 'Date':
					values.push(`new Date(${thing.getTime()})`);
					break;

				case 'Array':
					values.push(`Array(${thing.length})`);
					/** @type {any[]} */ (thing).forEach((v, i) => {
						statements.push(`${name}[${i}]=${stringify(v)}`);
					});
					break;

				case 'Set':
					values.push(`new Set`);
					statements.push(
						`${name}.${Array.from(thing)
							.map((v) => `add(${stringify(v)})`)
							.join('.')}`
					);
					break;

				case 'Map':
					values.push(`new Map`);
					statements.push(
						`${name}.${Array.from(thing)
							.map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`)
							.join('.')}`
					);
					break;

				default:
					values.push(
						Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}'
					);
					Object.keys(thing).forEach((key) => {
						statements.push(
							`${name}${safe_prop(key)}=${stringify(thing[key])}`
						);
					});
			}
		});

		statements.push(`return ${str}`);

		return `(function(${params.join(',')}){${statements.join(
			';'
		)}}(${values.join(',')}))`;
	} else {
		return str;
	}
}

/** @param {number} num */
function get_name(num) {
	let name = '';

	do {
		name = chars[num % chars.length] + name;
		num = ~~(num / chars.length) - 1;
	} while (num >= 0);

	return reserved.test(name) ? `${name}0` : name;
}

/** @param {string} c */
function escape_unsafe_char(c) {
	return escaped[c] || c;
}

/** @param {string} str */
function escape_unsafe_chars(str) {
	return str.replace(unsafe_chars, escape_unsafe_char);
}

/** @param {string} key */
function safe_key(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? key
		: escape_unsafe_chars(JSON.stringify(key));
}

/** @param {string} key */
function safe_prop(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? `.${key}`
		: `[${escape_unsafe_chars(JSON.stringify(key))}]`;
}

/** @param {any} thing */
function stringify_primitive$1(thing) {
	if (typeof thing === 'string') return stringify_string(thing);
	if (thing === void 0) return 'void 0';
	if (thing === 0 && 1 / thing < 0) return '-0';
	const str = String(thing);
	if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
	if (typeof thing === 'bigint') return thing + 'n';
	return str;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Turn a value into a JSON string that can be parsed with `devalue.parse`
 * @param {any} value
 * @param {Record<string, (value: any) => any>} [reducers]
 */
function stringify(value, reducers) {
	/** @type {any[]} */
	const stringified = [];

	/** @type {Map<any, number>} */
	const indexes = new Map();

	/** @type {Array<{ key: string, fn: (value: any) => any }>} */
	const custom = [];
	for (const key in reducers) {
		custom.push({ key, fn: reducers[key] });
	}

	/** @type {string[]} */
	const keys = [];

	let p = 0;

	/** @param {any} thing */
	function flatten(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (indexes.has(thing)) return indexes.get(thing);

		if (thing === undefined) return UNDEFINED;
		if (Number.isNaN(thing)) return NAN;
		if (thing === Infinity) return POSITIVE_INFINITY;
		if (thing === -Infinity) return NEGATIVE_INFINITY;
		if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;

		const index = p++;
		indexes.set(thing, index);

		for (const { key, fn } of custom) {
			const value = fn(thing);
			if (value) {
				stringified[index] = `["${key}",${flatten(value)}]`;
				return index;
			}
		}

		let str = '';

		if (is_primitive(thing)) {
			str = stringify_primitive(thing);
		} else {
			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					str = `["Object",${stringify_primitive(thing)}]`;
					break;

				case 'BigInt':
					str = `["BigInt",${thing}]`;
					break;

				case 'Date':
					str = `["Date","${thing.toISOString()}"]`;
					break;

				case 'RegExp':
					const { source, flags } = thing;
					str = flags
						? `["RegExp",${stringify_string(source)},"${flags}"]`
						: `["RegExp",${stringify_string(source)}]`;
					break;

				case 'Array':
					str = '[';

					for (let i = 0; i < thing.length; i += 1) {
						if (i > 0) str += ',';

						if (i in thing) {
							keys.push(`[${i}]`);
							str += flatten(thing[i]);
							keys.pop();
						} else {
							str += HOLE;
						}
					}

					str += ']';

					break;

				case 'Set':
					str = '["Set"';

					for (const value of thing) {
						str += `,${flatten(value)}`;
					}

					str += ']';
					break;

				case 'Map':
					str = '["Map"';

					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive(key) : '...'})`
						);
						str += `,${flatten(key)},${flatten(value)}`;
					}

					str += ']';
					break;

				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (Object.getOwnPropertySymbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					if (Object.getPrototypeOf(thing) === null) {
						str = '["null"';
						for (const key in thing) {
							keys.push(`.${key}`);
							str += `,${stringify_string(key)},${flatten(thing[key])}`;
							keys.pop();
						}
						str += ']';
					} else {
						str = '{';
						let started = false;
						for (const key in thing) {
							if (started) str += ',';
							started = true;
							keys.push(`.${key}`);
							str += `${stringify_string(key)}:${flatten(thing[key])}`;
							keys.pop();
						}
						str += '}';
					}
			}
		}

		stringified[index] = str;
		return index;
	}

	const index = flatten(value);

	// special case — value is represented as a negative index
	if (index < 0) return `${index}`;

	return `[${stringified.join(',')}]`;
}

/**
 * @param {any} thing
 * @returns {string}
 */
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === 'string') return stringify_string(thing);
	if (thing instanceof String) return stringify_string(thing.toString());
	if (thing === void 0) return UNDEFINED.toString();
	if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
	if (type === 'bigint') return `["BigInt","${thing}"]`;
	return String(thing);
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse$1;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var __toString = Object.prototype.toString;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse$1(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;

  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf('=', index);

    // no more cookie pairs
    if (eqIdx === -1) {
      break
    }

    var endIdx = str.indexOf(';', index);

    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue
    }

    var key = str.slice(index, eqIdx).trim();

    // only assign once
    if (undefined === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1);
      }

      obj[key] = tryDecode(val, dec);
    }

    index = endIdx + 1;
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires;

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority;

    switch (priority) {
      case 'low':
        str += '; Priority=Low';
        break
      case 'medium':
        str += '; Priority=Medium';
        break
      case 'high':
        str += '; Priority=High';
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */

function decode (str) {
  return str.indexOf('%') !== -1
    ? decodeURIComponent(str)
    : str
}

/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */

function encode (val) {
  return encodeURIComponent(val)
}

/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */

function isDate (val) {
  return __toString.call(val) === '[object Date]' ||
    val instanceof Date
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var setCookie = {exports: {}};

var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
};

function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}

function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);

  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  try {
    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" +
        value +
        "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }

  var cookie = {
    name: name,
    value: value,
  };

  parts.forEach(function (part) {
    var sides = part.split("=");
    var key = sides.shift().trimLeft().toLowerCase();
    var value = sides.join("=");
    if (key === "expires") {
      cookie.expires = new Date(value);
    } else if (key === "max-age") {
      cookie.maxAge = parseInt(value, 10);
    } else if (key === "secure") {
      cookie.secure = true;
    } else if (key === "httponly") {
      cookie.httpOnly = true;
    } else if (key === "samesite") {
      cookie.sameSite = value;
    } else {
      cookie[key] = value;
    }
  });

  return cookie;
}

function parseNameValuePair(nameValuePairStr) {
  // Parses name-value-pair according to rfc6265bis draft

  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
  } else {
    value = nameValuePairStr;
  }

  return { name: name, value: value };
}

function parse(input, options) {
  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }

  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      // for fetch responses - they combine headers of the same type in the headers array,
      // but getSetCookie returns an uncombined array
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      // fast-path for node.js (which automatically normalizes header names to lower-case
      input = input.headers["set-cookie"];
    } else {
      // slow-path for other environments - see #25
      var sch =
        input.headers[
          Object.keys(input.headers).find(function (key) {
            return key.toLowerCase() === "set-cookie";
          })
        ];
      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
      if (!sch && input.headers.cookie && !options.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  if (!Array.isArray(input)) {
    input = [input];
  }

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!options.map) {
    return input.filter(isNonEmptyString).map(function (str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
      var cookie = parseString(str, options);
      cookies[cookie.name] = cookie;
      return cookies;
    }, cookies);
  }
}

/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.

  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.

  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }

  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;

  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }

  function notSpecialChar() {
    ch = cookiesString.charAt(pos);

    return ch !== "=" && ch !== ";" && ch !== ",";
  }

  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;

    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        // ',' is a cookie separator if we have later first '=', not ';' or ','
        lastComma = pos;
        pos += 1;

        skipWhitespace();
        nextStart = pos;

        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }

        // currently special character
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          // we found cookies separator
          cookiesSeparatorFound = true;
          // pos is inside the next cookie, so back up and return it.
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          // in param ',' or param separator ';',
          // we continue from that comma
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }

    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }

  return cookiesStrings;
}

setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;

function p(e2, t2) {
  const n2 = [];
  let r2;
  e2.split(",").forEach((e3, t3) => {
    const r3 = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(e3);
    if (r3) {
      const [, e4, s3, o2 = "1"] = r3;
      n2.push({ type: e4, subtype: s3, q: +o2, i: t3 });
    }
  }), n2.sort((e3, t3) => e3.q !== t3.q ? t3.q - e3.q : "*" === e3.subtype != ("*" === t3.subtype) ? "*" === e3.subtype ? 1 : -1 : "*" === e3.type != ("*" === t3.type) ? "*" === e3.type ? 1 : -1 : e3.i - t3.i);
  let s2 = 1 / 0;
  for (const e3 of t2) {
    const [t3, o2] = e3.split("/"), a2 = n2.findIndex((e4) => !(e4.type !== t3 && "*" !== e4.type || e4.subtype !== o2 && "*" !== e4.subtype));
    -1 !== a2 && a2 < s2 && (r2 = e3, s2 = a2);
  }
  return r2;
}
function f(e2) {
  return function(e3, ...t2) {
    const n2 = e3.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
    return t2.includes(n2.toLowerCase());
  }(e2, "application/x-www-form-urlencoded", "multipart/form-data", "text/plain");
}
class m {
  constructor(e2, t2) {
    this.status = e2, this.body = "string" == typeof t2 ? { message: t2 } : t2 || { message: `Error: ${e2}` };
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class g {
  constructor(e2, t2) {
    this.status = e2, this.location = t2;
  }
}
class y {
  constructor(e2, t2) {
    this.status = e2, this.data = t2;
  }
}
function w(e2, t2, n2) {
  const r2 = {}, s2 = e2.slice(1);
  let o2 = 0;
  for (let e3 = 0; e3 < t2.length; e3 += 1) {
    const a2 = t2[e3], i2 = s2[e3 - o2];
    if (a2.chained && a2.rest && o2)
      r2[a2.name] = s2.slice(e3 - o2, e3 + 1).filter((e4) => e4).join("/"), o2 = 0;
    else if (void 0 !== i2)
      if (a2.matcher && !n2[a2.matcher](i2)) {
        if (!a2.optional || !a2.chained)
          return;
        o2++;
      } else {
        r2[a2.name] = i2;
        const n3 = t2[e3 + 1], c2 = s2[e3 + 1];
        n3 && !n3.rest && n3.optional && c2 && (o2 = 0);
      }
    else
      a2.rest && (r2[a2.name] = "");
  }
  if (!o2)
    return r2;
}
function _(e2, t2) {
  if (isNaN(e2) || e2 < 400 || e2 > 599)
    throw new Error(`HTTP error status codes must be between 400 and 599 — ${e2} is invalid`);
  return new m(e2, t2);
}
function v(e2, t2) {
  const n2 = JSON.stringify(e2), r2 = new Headers(t2?.headers);
  return r2.has("content-length") || r2.set("content-length", $.encode(n2).byteLength.toString()), r2.has("content-type") || r2.set("content-type", "application/json"), new Response(n2, { ...t2, headers: r2 });
}
const $ = new TextEncoder();
function b(e2, t2) {
  const n2 = new Headers(t2?.headers);
  return n2.has("content-length") || n2.set("content-length", $.encode(e2).byteLength.toString()), new Response(e2, { ...t2, headers: n2 });
}
function k(e2) {
  const t2 = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"].filter((t3) => t3 in e2);
  return ("GET" in e2 || "HEAD" in e2) && t2.push("HEAD"), t2;
}
function E(e2, t2, n2) {
  return b(e2.templates.error({ status: t2, message: n2 }), { headers: { "content-type": "text/html; charset=utf-8" }, status: t2 });
}
async function j(e2, t2, n2) {
  var r2;
  const s2 = (n2 = n2 instanceof m ? n2 : (r2 = n2) instanceof Error || r2 && r2.name && r2.message ? r2 : new Error(JSON.stringify(r2))) instanceof m ? n2.status : 500, o2 = await S(e2, t2, n2), a2 = p(e2.request.headers.get("accept") || "text/html", ["application/json", "text/html"]);
  return e2.isDataRequest || "application/json" === a2 ? v(o2, { status: s2 }) : E(t2, s2, o2.message);
}
async function S(e2, t2, n2) {
  return n2 instanceof m ? n2.body : await t2.hooks.handleError({ error: n2, event: e2 }) ?? { message: null != e2.route.id ? "Internal Error" : "Not Found" };
}
function x(e2, t2) {
  return new Response(void 0, { status: e2, headers: { location: t2 } });
}
function R(e2, t2) {
  return t2.path ? `Data returned from \`load\` while rendering ${e2.route.id} is not serializable: ${t2.message} (data${t2.path})` : "" === t2.path ? `Data returned from \`load\` while rendering ${e2.route.id} is not a plain object` : t2.message;
}
function O(e2) {
  const t2 = [];
  return e2.uses && e2.uses.dependencies.size > 0 && t2.push(`"dependencies":${JSON.stringify(Array.from(e2.uses.dependencies))}`), e2.uses && e2.uses.params.size > 0 && t2.push(`"params":${JSON.stringify(Array.from(e2.uses.params))}`), e2.uses?.parent && t2.push('"parent":1'), e2.uses?.route && t2.push('"route":1'), e2.uses?.url && t2.push('"url":1'), `"uses":{${t2.join(",")}}`;
}
async function q(e2, t2, n2) {
  const r2 = e2.request.method;
  let s2 = t2[r2];
  if (s2 || "HEAD" !== r2 || (s2 = t2.GET), !s2)
    return function(e3, t3) {
      return b(`${t3} method not allowed`, { status: 405, headers: { allow: k(e3).join(", ") } });
    }(t2, r2);
  const o2 = t2.prerender ?? n2.prerender_default;
  if (o2 && (t2.POST || t2.PATCH || t2.PUT || t2.DELETE))
    throw new Error("Cannot prerender endpoints that have mutative methods");
  if (n2.prerendering && !o2) {
    if (n2.depth > 0)
      throw new Error(`${e2.route.id} is not prerenderable`);
    return new Response(void 0, { status: 204 });
  }
  try {
    let t3 = await s2(e2);
    if (!(t3 instanceof Response))
      throw new Error(`Invalid response from route ${e2.url.pathname}: handler should return a Response object`);
    return n2.prerendering && (t3 = new Response(t3.body, { status: t3.status, statusText: t3.statusText, headers: new Headers(t3.headers) }), t3.headers.set("x-sveltekit-prerender", String(o2))), t3;
  } catch (e3) {
    if (e3 instanceof g)
      return new Response(void 0, { status: e3.status, headers: { location: e3.location } });
    throw e3;
  }
}
function T(e2) {
  return e2.filter((e3) => null != e3);
}
function P(e2, t2) {
  return "/" === e2 || "ignore" === t2 ? e2 : "never" === t2 ? e2.endsWith("/") ? e2.slice(0, -1) : e2 : "always" !== t2 || e2.endsWith("/") ? e2 : e2 + "/";
}
function C(e2) {
  for (const t2 in e2)
    e2[t2] = decodeURIComponent(e2[t2]);
  return e2;
}
const A = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function U(e2, t2) {
  const n2 = new URL(e2);
  for (const r2 of A)
    Object.defineProperty(n2, r2, { get: () => (t2(), e2[r2]), enumerable: true, configurable: true });
  return n2[Symbol.for("nodejs.util.inspect.custom")] = (t3, n3, r2) => r2(e2, n3), function(e3) {
    Object.defineProperty(e3, "hash", { get() {
      throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead");
    } });
  }(n2), n2;
}
function N(e2) {
  for (const t2 of ["search", "searchParams"])
    Object.defineProperty(e2, t2, { get() {
      throw new Error(`Cannot access url.${t2} on a page with prerendering enabled`);
    } });
}
const H = "/__data.json";
function I(e2) {
  return e2.slice(0, -H.length);
}
function L(e2) {
  return "application/json" === p(e2.request.headers.get("accept") ?? "*/*", ["application/json", "text/html"]) && "POST" === e2.request.method;
}
function z(e2) {
  return e2 instanceof y ? new Error('Cannot "throw fail()". Use "return fail()"') : e2;
}
function W(e2) {
  return D({ type: "redirect", status: e2.status, location: e2.location });
}
function D(e2, t2) {
  return v(e2, t2);
}
function J(e2) {
  if (e2.default && Object.keys(e2).length > 1)
    throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions");
}
async function G(e2, t2) {
  const n2 = new URL(e2.request.url);
  let r2 = "default";
  for (const e3 of n2.searchParams)
    if (e3[0].startsWith("/")) {
      if (r2 = e3[0].slice(1), "default" === r2)
        throw new Error('Cannot use reserved action name "default"');
      break;
    }
  const s2 = t2[r2];
  if (!s2)
    throw new Error(`No action with name '${r2}' found`);
  if (!f(e2.request))
    throw new Error(`Actions expect form-encoded data (received ${e2.request.headers.get("content-type")})`);
  return s2(e2);
}
function F(e2, t2) {
  return M(e2, stringify, t2);
}
function M(e2, t2, n2) {
  try {
    return t2(e2);
  } catch (e3) {
    const t3 = e3;
    if ("path" in t3) {
      let e4 = `Data returned from action inside ${n2} is not serializable: ${t3.message}`;
      throw "" !== t3.path && (e4 += ` (data.${t3.path})`), new Error(e4);
    }
    throw t3;
  }
}
async function B(e2) {
  for (const t2 in e2)
    if ("function" == typeof e2[t2]?.then)
      return Object.fromEntries(await Promise.all(Object.entries(e2).map(async ([e3, t3]) => [e3, await t3])));
  return e2;
}
const V = "x-sveltekit-invalidated";
async function K({ event: e2, state: t2, node: n2, parent: r2, track_server_fetches: s2 }) {
  if (!n2?.server)
    return null;
  const o2 = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false }, a2 = U(e2.url, () => {
    o2.url = true;
  });
  t2.prerendering && N(a2);
  const i2 = await n2.server.load?.call(null, { ...e2, fetch: (t3, n3) => {
    const r3 = new URL(t3 instanceof Request ? t3.url : t3, e2.url);
    return s2 && o2.dependencies.add(r3.href), e2.fetch(t3, n3);
  }, depends: (...t3) => {
    for (const n3 of t3) {
      const { href: t4 } = new URL(n3, e2.url);
      o2.dependencies.add(t4);
    }
  }, params: new Proxy(e2.params, { get: (e3, t3) => (o2.params.add(t3), e3[t3]) }), parent: async () => (o2.parent = true, r2()), route: new Proxy(e2.route, { get: (e3, t3) => (o2.route = true, e3[t3]) }), url: a2 });
  return { type: "data", data: i2 ? await B(i2) : null, uses: o2, slash: n2.server.trailingSlash };
}
async function Q({ event: e2, fetched: t2, node: n2, parent: r2, server_data_promise: s2, state: o2, resolve_opts: a2, csr: i2 }) {
  const c2 = await s2;
  if (!n2?.universal?.load)
    return c2?.data ?? null;
  const u2 = await n2.universal.load.call(null, { url: e2.url, params: e2.params, data: c2?.data ?? null, route: e2.route, fetch: X(e2, o2, t2, i2, a2), setHeaders: e2.setHeaders, depends: () => {
  }, parent: r2 });
  return u2 ? await B(u2) : null;
}
function X(e2, t2, n2, r2, s2) {
  return async (o2, a2) => {
    const i2 = o2 instanceof Request && o2.body ? o2.clone().body : null;
    let c2 = await e2.fetch(o2, a2);
    const u2 = new URL(o2 instanceof Request ? o2.url : o2, e2.url), l2 = u2.origin === e2.url.origin;
    let d2;
    if (l2)
      t2.prerendering && (d2 = { response: c2, body: null }, t2.prerendering.dependencies.set(u2.pathname, d2));
    else {
      if ("no-cors" === (o2 instanceof Request ? o2.mode : a2?.mode ?? "cors"))
        c2 = new Response("", { status: c2.status, statusText: c2.statusText, headers: c2.headers });
      else {
        const t3 = c2.headers.get("access-control-allow-origin");
        if (!t3 || t3 !== e2.url.origin && "*" !== t3)
          throw new Error(`CORS error: ${t3 ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`);
      }
    }
    const h2 = new Proxy(c2, { get(t3, r3, s3) {
      async function c3() {
        const r4 = await t3.text();
        if (!r4 || "string" == typeof r4) {
          const s4 = Number(t3.status);
          if (isNaN(s4))
            throw new Error(`response.status is not a number. value: "${t3.status}" type: ${typeof t3.status}`);
          n2.push({ url: l2 ? u2.href.slice(e2.url.origin.length) : u2.href, method: e2.request.method, request_body: o2 instanceof Request && i2 ? await Y(i2) : a2?.body, request_headers: a2?.headers, response_body: r4, response: t3 });
        }
        return d2 && (d2.body = r4), r4;
      }
      return "arrayBuffer" === r3 ? async () => {
        const e3 = await t3.arrayBuffer();
        return d2 && (d2.body = new Uint8Array(e3)), e3;
      } : "text" === r3 ? c3 : "json" === r3 ? async () => JSON.parse(await c3()) : Reflect.get(t3, r3, t3);
    } });
    if (r2) {
      const t3 = c2.headers.get;
      c2.headers.get = (n3) => {
        const r3 = n3.toLowerCase(), o3 = t3.call(c2.headers, r3);
        if (o3 && !r3.startsWith("x-sveltekit-")) {
          if (!s2.filterSerializedResponseHeaders(r3, o3))
            throw new Error(`Failed to get response header "${r3}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${e2.route.id})`);
        }
        return o3;
      };
    }
    return h2;
  };
}
async function Y(e2) {
  let t2 = "";
  const n2 = e2.getReader(), r2 = new TextDecoder();
  for (; ; ) {
    const { done: e3, value: s2 } = await n2.read();
    if (e3)
      break;
    t2 += r2.decode(s2);
  }
  return t2;
}
const Z = [];
function ee(e2, t2 = e) {
  let n2;
  const r2 = /* @__PURE__ */ new Set();
  function s2(t3) {
    if (n(e2, t3) && (e2 = t3, n2)) {
      const t4 = !Z.length;
      for (const t5 of r2)
        t5[1](), Z.push(t5, e2);
      if (t4) {
        for (let e3 = 0; e3 < Z.length; e3 += 2)
          Z[e3][0](Z[e3 + 1]);
        Z.length = 0;
      }
    }
  }
  return { set: s2, update: function(t3) {
    s2(t3(e2));
  }, subscribe: function(o2, a2 = e) {
    const i2 = [o2, a2];
    return r2.add(i2), 1 === r2.size && (n2 = t2(s2) || e), o2(e2), () => {
      r2.delete(i2), 0 === r2.size && n2 && (n2(), n2 = null);
    };
  } };
}
function te(...e2) {
  let t2 = 5381;
  for (const n2 of e2)
    if ("string" == typeof n2) {
      let e3 = n2.length;
      for (; e3; )
        t2 = 33 * t2 ^ n2.charCodeAt(--e3);
    } else {
      if (!ArrayBuffer.isView(n2))
        throw new TypeError("value must be a string or TypedArray");
      {
        const e3 = new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength);
        let r2 = e3.length;
        for (; r2; )
          t2 = 33 * t2 ^ e3[--r2];
      }
    }
  return (t2 >>> 0).toString(36);
}
const ne = { "&": "&amp;", '"': "&quot;" }, re = new RegExp(`[${Object.keys(ne).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`, "g");
function se(e2) {
  return `"${e2.replace(re, (e3) => 2 === e3.length ? e3 : ne[e3] ?? `&#${e3.charCodeAt(0)};`)}"`;
}
const oe = { "<": "\\u003C", "\u2028": "\\u2028", "\u2029": "\\u2029" }, ae = new RegExp(`[${Object.keys(oe).join("")}]`, "g");
const ie = JSON.stringify, ce = new TextEncoder();
function ue(e2) {
  de[0] || function() {
    function e3(e4) {
      return 4294967296 * (e4 - Math.floor(e4));
    }
    let t3 = 2;
    for (let n3 = 0; n3 < 64; t3++) {
      let r3 = true;
      for (let e4 = 2; e4 * e4 <= t3; e4++)
        if (t3 % e4 == 0) {
          r3 = false;
          break;
        }
      r3 && (n3 < 8 && (le[n3] = e3(t3 ** 0.5)), de[n3] = e3(t3 ** (1 / 3)), n3++);
    }
  }();
  const t2 = le.slice(0), n2 = function(e3) {
    const t3 = ce.encode(e3), n3 = 8 * t3.length, r3 = 512 * Math.ceil((n3 + 65) / 512), s2 = new Uint8Array(r3 / 8);
    s2.set(t3), s2[t3.length] = 128, he(s2);
    const o2 = new Uint32Array(s2.buffer);
    return o2[o2.length - 2] = Math.floor(n3 / 4294967296), o2[o2.length - 1] = n3, o2;
  }(e2);
  for (let e3 = 0; e3 < n2.length; e3 += 16) {
    const r3 = n2.subarray(e3, e3 + 16);
    let s2, o2, a2, i2 = t2[0], c2 = t2[1], u2 = t2[2], l2 = t2[3], d2 = t2[4], h2 = t2[5], p2 = t2[6], f2 = t2[7];
    for (let e4 = 0; e4 < 64; e4++)
      e4 < 16 ? s2 = r3[e4] : (o2 = r3[e4 + 1 & 15], a2 = r3[e4 + 14 & 15], s2 = r3[15 & e4] = (o2 >>> 7 ^ o2 >>> 18 ^ o2 >>> 3 ^ o2 << 25 ^ o2 << 14) + (a2 >>> 17 ^ a2 >>> 19 ^ a2 >>> 10 ^ a2 << 15 ^ a2 << 13) + r3[15 & e4] + r3[e4 + 9 & 15] | 0), s2 = s2 + f2 + (d2 >>> 6 ^ d2 >>> 11 ^ d2 >>> 25 ^ d2 << 26 ^ d2 << 21 ^ d2 << 7) + (p2 ^ d2 & (h2 ^ p2)) + de[e4], f2 = p2, p2 = h2, h2 = d2, d2 = l2 + s2 | 0, l2 = u2, u2 = c2, c2 = i2, i2 = s2 + (c2 & u2 ^ l2 & (c2 ^ u2)) + (c2 >>> 2 ^ c2 >>> 13 ^ c2 >>> 22 ^ c2 << 30 ^ c2 << 19 ^ c2 << 10) | 0;
    t2[0] = t2[0] + i2 | 0, t2[1] = t2[1] + c2 | 0, t2[2] = t2[2] + u2 | 0, t2[3] = t2[3] + l2 | 0, t2[4] = t2[4] + d2 | 0, t2[5] = t2[5] + h2 | 0, t2[6] = t2[6] + p2 | 0, t2[7] = t2[7] + f2 | 0;
  }
  const r2 = new Uint8Array(t2.buffer);
  return he(r2), fe(r2);
}
const le = new Uint32Array(8), de = new Uint32Array(64);
function he(e2) {
  for (let t2 = 0; t2 < e2.length; t2 += 4) {
    const n2 = e2[t2 + 0], r2 = e2[t2 + 1], s2 = e2[t2 + 2], o2 = e2[t2 + 3];
    e2[t2 + 0] = o2, e2[t2 + 1] = s2, e2[t2 + 2] = r2, e2[t2 + 3] = n2;
  }
}
const pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function fe(e2) {
  const t2 = e2.length;
  let n2, r2 = "";
  for (n2 = 2; n2 < t2; n2 += 3)
    r2 += pe[e2[n2 - 2] >> 2], r2 += pe[(3 & e2[n2 - 2]) << 4 | e2[n2 - 1] >> 4], r2 += pe[(15 & e2[n2 - 1]) << 2 | e2[n2] >> 6], r2 += pe[63 & e2[n2]];
  return n2 === t2 + 1 && (r2 += pe[e2[n2 - 2] >> 2], r2 += pe[(3 & e2[n2 - 2]) << 4], r2 += "=="), n2 === t2 && (r2 += pe[e2[n2 - 2] >> 2], r2 += pe[(3 & e2[n2 - 2]) << 4 | e2[n2 - 1] >> 4], r2 += pe[(15 & e2[n2 - 1]) << 2], r2 += "="), r2;
}
const me = new Uint8Array(16);
const ge = /* @__PURE__ */ new Set(["self", "unsafe-eval", "unsafe-hashes", "unsafe-inline", "none", "strict-dynamic", "report-sample", "wasm-unsafe-eval", "script"]), ye = /^(nonce|sha\d\d\d)-/;
class we {
  #e;
  #t;
  #n;
  #r;
  #s;
  #o;
  #a;
  constructor(e2, t2, n2) {
    this.#e = e2, this.#r = t2;
    const r2 = this.#r;
    this.#s = [], this.#o = [];
    const s2 = r2["script-src"] || r2["default-src"], o2 = r2["style-src"] || r2["default-src"];
    this.#t = !!s2 && s2.filter((e3) => "unsafe-inline" !== e3).length > 0, this.#n = !!o2 && o2.filter((e3) => "unsafe-inline" !== e3).length > 0, this.script_needs_nonce = this.#t && !this.#e, this.style_needs_nonce = this.#n && !this.#e, this.#a = n2;
  }
  add_script(e2) {
    this.#t && (this.#e ? this.#s.push(`sha256-${ue(e2)}`) : 0 === this.#s.length && this.#s.push(`nonce-${this.#a}`));
  }
  add_style(e2) {
    this.#n && (this.#e ? this.#o.push(`sha256-${ue(e2)}`) : 0 === this.#o.length && this.#o.push(`nonce-${this.#a}`));
  }
  get_header(e2 = false) {
    const t2 = [], n2 = { ...this.#r };
    this.#o.length > 0 && (n2["style-src"] = [...n2["style-src"] || n2["default-src"] || [], ...this.#o]), this.#s.length > 0 && (n2["script-src"] = [...n2["script-src"] || n2["default-src"] || [], ...this.#s]);
    for (const r2 in n2) {
      if (e2 && ("frame-ancestors" === r2 || "report-uri" === r2 || "sandbox" === r2))
        continue;
      const s2 = n2[r2];
      if (!s2)
        continue;
      const o2 = [r2];
      Array.isArray(s2) && s2.forEach((e3) => {
        ge.has(e3) || ye.test(e3) ? o2.push(`'${e3}'`) : o2.push(e3);
      }), t2.push(o2.join(" "));
    }
    return t2.join("; ");
  }
}
class _e extends we {
  get_meta() {
    const e2 = this.get_header(true);
    if (e2)
      return `<meta http-equiv="content-security-policy" content=${se(e2)}>`;
  }
}
class ve extends we {
  constructor(e2, t2, n2) {
    if (super(e2, t2, n2), Object.values(t2).filter((e3) => !!e3).length > 0) {
      const e3 = t2["report-to"]?.length ?? false, n3 = t2["report-uri"]?.length ?? false;
      if (!e3 && !n3)
        throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both");
    }
  }
}
class $e {
  nonce = function() {
    return crypto.getRandomValues(me), fe(me);
  }();
  csp_provider;
  report_only_provider;
  constructor({ mode: e2, directives: t2, reportOnly: n2 }, { prerender: r2 }) {
    const s2 = "hash" === e2 || "auto" === e2 && r2;
    this.csp_provider = new _e(s2, t2, this.nonce), this.report_only_provider = new ve(s2, n2, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(e2) {
    this.csp_provider.add_script(e2), this.report_only_provider.add_script(e2);
  }
  add_style(e2) {
    this.csp_provider.add_style(e2), this.report_only_provider.add_style(e2);
  }
}
function be() {
  let e2, t2;
  return { promise: new Promise((n2, r2) => {
    e2 = n2, t2 = r2;
  }), fulfil: e2, reject: t2 };
}
function ke() {
  const e2 = [be()];
  return { iterator: { [Symbol.asyncIterator]: () => ({ next: async () => {
    const t2 = await e2[0].promise;
    return t2.done || e2.shift(), t2;
  } }) }, push: (t2) => {
    e2[e2.length - 1].fulfil({ value: t2, done: false }), e2.push(be());
  }, done: () => {
    e2[e2.length - 1].fulfil({ done: true });
  } };
}
const Ee = "/_svelte_kit_assets", je = { ...(Se = false, { subscribe: ee(Se, xe).subscribe }), check: () => false };
var Se, xe;
const Re = new TextEncoder();
async function Oe({ branch: s2, fetched: o2, options: a2, manifest: c2, state: u2, page_config: l2, status: d2, error: h2 = null, event: p2, resolve_opts: f2, action_result: m2 }) {
  if (u2.prerendering) {
    if ("nonce" === a2.csp.mode)
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    if (a2.app_template_contains_nonce)
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
  }
  const { client: g2 } = c2._, y2 = new Set(g2.imports), w2 = new Set(g2.stylesheets), _2 = new Set(g2.fonts), v2 = /* @__PURE__ */ new Set(), $2 = /* @__PURE__ */ new Map();
  let k2;
  const E2 = "success" === m2?.type || "failure" === m2?.type ? m2.data ?? null : null;
  let j2 = a, x2 = o, q2 = ie(a);
  if (!u2.prerendering?.fallback) {
    j2 = p2.url.pathname.slice(a.length).split("/").slice(2).map(() => "..").join("/") || ".", q2 = `new URL(${ie(j2)}, location).pathname.slice(0, -1)`, (!o || "/" === o[0] && o !== Ee) && (x2 = j2);
  }
  if (l2.ssr) {
    const e2 = { stores: { page: ee(null), navigating: ee(null), updated: je }, constructors: await Promise.all(s2.map(({ node: e3 }) => e3.component())), form: E2 };
    let t2 = {};
    for (let n2 = 0; n2 < s2.length; n2 += 1)
      t2 = { ...t2, ...s2[n2].data }, e2[`data_${n2}`] = t2;
    e2.page = { error: h2, params: p2.params, route: p2.route, status: d2, url: p2.url, data: t2, form: E2 };
    try {
      k2 = a2.root.render(e2);
    } finally {
      i();
    }
    for (const { node: e3 } of s2) {
      for (const t3 of e3.imports)
        y2.add(t3);
      for (const t3 of e3.stylesheets)
        w2.add(t3);
      for (const t3 of e3.fonts)
        _2.add(t3);
      e3.inline_styles && Object.entries(await e3.inline_styles()).forEach(([e4, t3]) => $2.set(e4, t3));
    }
  } else
    k2 = { head: "", html: "", css: { code: "", map: null } };
  let T2 = "", P2 = k2.html;
  const C2 = new $e(a2.csp, { prerender: !!u2.prerendering }), A2 = (t2) => t2.startsWith("/") ? a + t2 : `${x2}/${t2}`;
  if ($2.size > 0) {
    const e2 = Array.from($2.values()).join("\n"), t2 = [];
    C2.style_needs_nonce && t2.push(` nonce="${C2.nonce}"`), C2.add_style(e2), T2 += `
	<style${t2.join("")}>${e2}</style>`;
  }
  for (const e2 of w2) {
    const t2 = A2(e2), n2 = ['rel="stylesheet"'];
    if ($2.has(e2))
      n2.push("disabled", 'media="(max-width: 0)"');
    else if (f2.preload({ type: "css", path: t2 })) {
      const e3 = ['rel="preload"', 'as="style"'];
      v2.add(`<${encodeURI(t2)}>; ${e3.join(";")}; nopush`);
    }
    T2 += `
		<link href="${t2}" ${n2.join(" ")}>`;
  }
  for (const e2 of _2) {
    const t2 = A2(e2);
    if (f2.preload({ type: "font", path: t2 })) {
      T2 += `
		<link ${['rel="preload"', 'as="font"', `type="font/${e2.slice(e2.lastIndexOf(".") + 1)}"`, `href="${t2}"`, "crossorigin"].join(" ")}>`;
    }
  }
  const U2 = `__sveltekit_${a2.version_hash}`, { data: N2, chunks: H2 } = function(e2, t2, n2, r2) {
    let s3 = 1, o3 = 0;
    const { iterator: a3, push: c3, done: u3 } = ke();
    function l3(n3) {
      if ("function" == typeof n3?.then) {
        const a4 = s3++;
        return o3 += 1, n3.then((e3) => ({ data: e3 })).catch(async (n4) => ({ error: await S(e2, t2, n4) })).then(async ({ data: n4, error: s4 }) => {
          let d3;
          o3 -= 1;
          try {
            d3 = uneval({ id: a4, data: n4, error: s4 }, l3);
          } catch (r3) {
            s4 = await S(e2, t2, new Error(`Failed to serialize promise while rendering ${e2.route.id}`)), n4 = void 0, d3 = uneval({ id: a4, data: n4, error: s4 }, l3);
          }
          c3(`<script>${r2}.resolve(${d3})<\/script>
`), 0 === o3 && u3();
        }), `${r2}.defer(${a4})`;
      }
    }
    try {
      return { data: `[${n2.map((e3) => e3 ? `{"type":"data","data":${uneval(e3.data, l3)},${O(e3)}${e3.slash ? `,"slash":${JSON.stringify(e3.slash)}` : ""}}` : "null").join(",")}]`, chunks: o3 > 0 ? a3 : null };
    } catch (t3) {
      throw new Error(R(e2, t3));
    }
  }(p2, a2, s2.map((e2) => e2.server_data), U2);
  if (l2.ssr && l2.csr && (P2 += `
			${o2.map((e2) => function(e3, t2, n2 = false) {
    const r2 = {};
    let s3 = null, o3 = null, a3 = false;
    for (const [n3, i3] of e3.response.headers)
      t2(n3, i3) && (r2[n3] = i3), "cache-control" === n3 && (s3 = i3), "age" === n3 && (o3 = i3), "vary" === n3 && (a3 = true);
    const i2 = { status: e3.response.status, statusText: e3.response.statusText, headers: r2, body: e3.response_body }, c3 = JSON.stringify(i2).replace(ae, (e4) => oe[e4]), u3 = ['type="application/json"', "data-sveltekit-fetched", `data-url=${se(e3.url)}`];
    if (e3.request_headers || e3.request_body) {
      const t3 = [];
      e3.request_headers && t3.push([...new Headers(e3.request_headers)].join(",")), e3.request_body && t3.push(e3.request_body), u3.push(`data-hash="${te(...t3)}"`);
    }
    if (!n2 && "GET" === e3.method && s3 && !a3) {
      const e4 = /s-maxage=(\d+)/g.exec(s3) ?? /max-age=(\d+)/g.exec(s3);
      if (e4) {
        const t3 = +e4[1] - +(o3 ?? "0");
        u3.push(`data-ttl="${t3}"`);
      }
    }
    return `<script ${u3.join(" ")}>${c3}<\/script>`;
  }(e2, f2.filterSerializedResponseHeaders, !!u2.prerendering)).join("\n			")}`), l2.csr) {
    const e2 = Array.from(y2, (e3) => A2(e3)).filter((e3) => f2.preload({ type: "js", path: e3 }));
    for (const t2 of e2)
      v2.add(`<${encodeURI(t2)}>; rel="modulepreload"; nopush`), "modulepreload" !== a2.preload_strategy ? T2 += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${t2}">` : u2.prerendering && (T2 += `
		<link rel="modulepreload" href="${t2}">`);
    const n2 = [], o3 = [o && `assets: ${ie(o)}`, `base: ${q2}`, `env: ${ie(c)}`].filter(Boolean);
    H2 && (n2.push("const deferred = new Map();"), o3.push("defer: (id) => new Promise((fulfil, reject) => {\n							deferred.set(id, { fulfil, reject });\n						})"), o3.push("resolve: ({ id, data, error }) => {\n							const { fulfil, reject } = deferred.get(id);\n							deferred.delete(id);\n\n							if (error) reject(error);\n							else fulfil(data);\n						}")), n2.push(`${U2} = {
						${o3.join(",\n						")}
					};`);
    const c3 = ["app", "element"];
    if (n2.push("const element = document.currentScript.parentElement;"), l2.ssr) {
      const e3 = { form: "null", error: "null" };
      n2.push(`const data = ${N2};`), E2 && (e3.form = function(e4, t3) {
        return M(e4, uneval, t3);
      }(E2, p2.route.id)), h2 && (e3.error = uneval(h2));
      const t2 = [`node_ids: [${s2.map(({ node: e4 }) => e4.index).join(", ")}]`, "data", `form: ${e3.form}`, `error: ${e3.error}`];
      200 !== d2 && t2.push(`status: ${d2}`), a2.embedded && t2.push(`params: ${uneval(p2.params)}`, `route: ${ie(p2.route)}`), c3.push(`{
							${t2.join(",\n							")}
						}`);
    }
    if (n2.push(`Promise.all([
						import(${ie(A2(g2.start))}),
						import(${ie(A2(g2.app))})
					]).then(([kit, app]) => {
						kit.start(${c3.join(", ")});
					});`), a2.service_worker) {
      const e3 = "";
      n2.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${A2("service-worker.js")}'${e3});
						});
					}`);
    }
    const m3 = `
				{
					${n2.join("\n\n					")}
				}
			`;
    C2.add_script(m3), P2 += `
			<script${C2.script_needs_nonce ? ` nonce="${C2.nonce}"` : ""}>${m3}<\/script>
		`;
  }
  const I2 = new Headers({ "x-sveltekit-page": "true", "content-type": "text/html" });
  if (u2.prerendering) {
    const e2 = [], t2 = C2.csp_provider.get_meta();
    t2 && e2.push(t2), u2.prerendering.cache && e2.push(`<meta http-equiv="cache-control" content="${u2.prerendering.cache}">`), e2.length > 0 && (T2 = e2.join("\n") + T2);
  } else {
    const e2 = C2.csp_provider.get_header();
    e2 && I2.set("content-security-policy", e2);
    const t2 = C2.report_only_provider.get_header();
    t2 && I2.set("content-security-policy-report-only", t2), v2.size && I2.set("link", Array.from(v2).join(", "));
  }
  T2 += k2.head;
  const L2 = a2.templates.app({ head: T2, body: P2, assets: x2, nonce: C2.nonce, env: c }), z2 = await f2.transformPageChunk({ html: L2, done: true }) || "";
  return H2 || I2.set("etag", `"${te(z2)}"`), H2 ? new Response(new ReadableStream({ async start(e2) {
    e2.enqueue(Re.encode(z2 + "\n"));
    for await (const t2 of H2)
      e2.enqueue(Re.encode(t2));
    e2.close();
  }, type: "bytes" }), { headers: { "content-type": "text/html" } }) : b(z2, { status: d2, headers: I2 });
}
function qe(e2, t2) {
  return e2.reduce((e3, n2) => n2?.universal?.[t2] ?? n2?.server?.[t2] ?? e3, void 0);
}
async function Te({ event: e2, options: t2, manifest: n2, state: r2, status: s2, error: o2, resolve_opts: a2 }) {
  const i2 = [];
  try {
    const c2 = [], u2 = await n2._.nodes[0](), l2 = qe([u2], "ssr") ?? true, d2 = qe([u2], "csr") ?? true;
    if (l2) {
      r2.error = true;
      const s3 = K({ event: e2, state: r2, node: u2, parent: async () => ({}), track_server_fetches: t2.track_server_fetches }), o3 = await s3, l3 = await Q({ event: e2, fetched: i2, node: u2, parent: async () => ({}), resolve_opts: a2, server_data_promise: s3, state: r2, csr: d2 });
      c2.push({ node: u2, server_data: o3, data: l3 }, { node: await n2._.nodes[1](), data: null, server_data: null });
    }
    return await Oe({ options: t2, manifest: n2, state: r2, page_config: { ssr: l2, csr: qe([u2], "csr") ?? true }, status: s2, error: await S(e2, t2, o2), branch: c2, fetched: i2, event: e2, resolve_opts: a2 });
  } catch (n3) {
    return n3 instanceof g ? x(n3.status, n3.location) : E(t2, n3 instanceof m ? n3.status : 500, (await S(e2, t2, n3)).message);
  }
}
const Pe = new TextEncoder();
function Ce(e2, t2 = 200) {
  return b("string" == typeof e2 ? e2 : JSON.stringify(e2), { status: t2, headers: { "content-type": "application/json", "cache-control": "private, no-store" } });
}
function Ae(e2) {
  return Ce({ type: "redirect", location: e2.location });
}
function Ue(e2, t2, n2) {
  let r2 = 1, s2 = 0;
  const { iterator: o2, push: a2, done: c2 } = ke(), u2 = { Promise: (n3) => {
    if ("function" == typeof n3?.then) {
      const o3 = r2++;
      s2 += 1;
      let l2 = "data";
      return n3.catch(async (n4) => (l2 = "error", S(e2, t2, n4))).then(async (n4) => {
        let r3;
        try {
          r3 = stringify(n4, u2);
        } catch (n5) {
          const s3 = await S(e2, t2, new Error(`Failed to serialize promise while rendering ${e2.route.id}`));
          l2 = "error", r3 = stringify(s3, u2);
        }
        s2 -= 1, a2(`{"type":"chunk","id":${o3},"${l2}":${r3}}
`), 0 === s2 && c2();
      }), o3;
    }
  } };
  try {
    return { data: `{"type":"data","nodes":[${n2.map((e3) => e3 ? "error" === e3.type || "skip" === e3.type ? JSON.stringify(e3) : `{"type":"data","data":${stringify(e3.data, u2)},${O(e3)}${e3.slash ? `,"slash":${JSON.stringify(e3.slash)}` : ""}}` : "null").join(",")}]}
`, chunks: s2 > 0 ? o2 : null };
  } catch (t3) {
    throw new Error(R(e2, t3));
  }
}
const Ne = 10;
async function He(e2, t2, n2, r2, s2, o2) {
  if (s2.depth > Ne)
    return b(`Not found: ${e2.url.pathname}`, { status: 404 });
  if (L(e2)) {
    const s3 = await r2._.nodes[t2.leaf]();
    return async function(e3, t3, n3) {
      const r3 = n3?.actions;
      if (!r3) {
        const n4 = _(405, "POST method not allowed. No actions exist for this page");
        return D({ type: "error", error: await S(e3, t3, n4) }, { status: n4.status, headers: { allow: "GET" } });
      }
      J(r3);
      try {
        const t4 = await G(e3, r3);
        return D(t4 instanceof y ? { type: "failure", status: t4.status, data: F(t4.data, e3.route.id) } : { type: "success", status: t4 ? 200 : 204, data: F(t4, e3.route.id) });
      } catch (n4) {
        const r4 = n4;
        return r4 instanceof g ? W(r4) : D({ type: "error", error: await S(e3, t3, z(r4)) }, { status: r4 instanceof m ? r4.status : 500 });
      }
    }(e2, n2, s3?.server);
  }
  try {
    const a2 = await Promise.all([...t2.layouts.map((e3) => null == e3 ? e3 : r2._.nodes[e3]()), r2._.nodes[t2.leaf]()]), i2 = a2.at(-1);
    let c2, u2 = 200;
    if (function(e3) {
      return "POST" === e3.request.method;
    }(e2)) {
      if (c2 = await async function(e3, t3) {
        const n3 = t3?.actions;
        if (!n3)
          return e3.setHeaders({ allow: "GET" }), { type: "error", error: _(405, "POST method not allowed. No actions exist for this page") };
        J(n3);
        try {
          const t4 = await G(e3, n3);
          return t4 instanceof y ? { type: "failure", status: t4.status, data: t4.data } : { type: "success", status: 200, data: t4 };
        } catch (e4) {
          const t4 = e4;
          return t4 instanceof g ? { type: "redirect", status: t4.status, location: t4.location } : { type: "error", error: z(t4) };
        }
      }(e2, i2.server), "redirect" === c2?.type)
        return x(c2.status, c2.location);
      if ("error" === c2?.type) {
        const e3 = c2.error;
        u2 = e3 instanceof m ? e3.status : 500;
      }
      "failure" === c2?.type && (u2 = c2.status);
    }
    const l2 = a2.some((e3) => e3?.server), d2 = e2.url.pathname.replace(/\/$/, "") + H, h2 = qe(a2, "prerender") ?? false;
    if (h2) {
      const e3 = i2.server;
      if (e3?.actions)
        throw new Error("Cannot prerender pages with actions");
    } else if (s2.prerendering)
      return new Response(void 0, { status: 204 });
    s2.prerender_default = h2;
    const p2 = [];
    if (false === qe(a2, "ssr"))
      return await Oe({ branch: [], fetched: p2, page_config: { ssr: false, csr: qe(a2, "csr") ?? true }, status: u2, error: null, event: e2, options: n2, manifest: r2, state: s2, resolve_opts: o2 });
    const f2 = [];
    let w2 = null;
    const v2 = a2.map((t3, r3) => {
      if (w2)
        throw w2;
      return Promise.resolve().then(async () => {
        try {
          if (t3 === i2 && "error" === c2?.type)
            throw c2.error;
          return await K({ event: e2, state: s2, node: t3, parent: async () => {
            const e3 = {};
            for (let t4 = 0; t4 < r3; t4 += 1) {
              const n3 = await v2[t4];
              n3 && Object.assign(e3, await n3.data);
            }
            return e3;
          }, track_server_fetches: n2.track_server_fetches });
        } catch (e3) {
          throw w2 = e3, w2;
        }
      });
    }), $2 = qe(a2, "csr") ?? true, k2 = a2.map((t3, n3) => {
      if (w2)
        throw w2;
      return Promise.resolve().then(async () => {
        try {
          return await Q({ event: e2, fetched: p2, node: t3, parent: async () => {
            const e3 = {};
            for (let t4 = 0; t4 < n3; t4 += 1)
              Object.assign(e3, await k2[t4]);
            return e3;
          }, resolve_opts: o2, server_data_promise: v2[n3], state: s2, csr: $2 });
        } catch (e3) {
          throw w2 = e3, w2;
        }
      });
    });
    for (const e3 of v2)
      e3.catch(() => {
      });
    for (const e3 of k2)
      e3.catch(() => {
      });
    for (let i3 = 0; i3 < a2.length; i3 += 1) {
      const c3 = a2[i3];
      if (c3)
        try {
          const e3 = await v2[i3], t3 = await k2[i3];
          f2.push({ node: c3, server_data: e3, data: t3 });
        } catch (a3) {
          const c4 = a3;
          if (c4 instanceof g) {
            if (s2.prerendering && l2) {
              const e3 = JSON.stringify({ type: "redirect", location: c4.location });
              s2.prerendering.dependencies.set(d2, { response: b(e3), body: e3 });
            }
            return x(c4.status, c4.location);
          }
          const u3 = c4 instanceof m ? c4.status : 500, h3 = await S(e2, n2, c4);
          for (; i3--; )
            if (t2.errors[i3]) {
              const a4 = t2.errors[i3], c5 = await r2._.nodes[a4]();
              let l3 = i3;
              for (; !f2[l3]; )
                l3 -= 1;
              return await Oe({ event: e2, options: n2, manifest: r2, state: s2, resolve_opts: o2, page_config: { ssr: true, csr: true }, status: u3, error: h3, branch: T(f2.slice(0, l3 + 1)).concat({ node: c5, data: null, server_data: null }), fetched: p2 });
            }
          return E(n2, u3, h3.message);
        }
      else
        f2.push(null);
    }
    if (s2.prerendering && l2) {
      let { data: t3, chunks: r3 } = Ue(e2, n2, f2.map((e3) => e3?.server_data));
      if (r3)
        for await (const e3 of r3)
          t3 += e3;
      s2.prerendering.dependencies.set(d2, { response: b(t3), body: t3 });
    }
    return await Oe({ event: e2, options: n2, manifest: r2, state: s2, resolve_opts: o2, page_config: { csr: qe(a2, "csr") ?? true, ssr: true }, status: u2, error: null, branch: T(f2), action_result: c2, fetched: p2 });
  } catch (t3) {
    return await Te({ event: e2, options: n2, manifest: r2, state: s2, status: 500, error: t3, resolve_opts: o2 });
  }
}
function Ie(e2, t2) {
  if (!t2)
    return true;
  const n2 = "." === t2[0] ? t2.slice(1) : t2;
  return e2 === n2 || e2.endsWith("." + n2);
}
function Le(e2, t2) {
  if (!t2)
    return true;
  const n2 = t2.endsWith("/") ? t2.slice(0, -1) : t2;
  return e2 === n2 || e2.startsWith(n2 + "/");
}
function ze(e2, t2) {
  for (const n2 of t2) {
    const { name: t3, value: r2, options: s2 } = n2;
    e2.append("set-cookie", serialize_1(t3, r2, s2));
  }
}
function We(e2, t2, n2) {
  return e2 instanceof Request ? e2 : new Request("string" == typeof e2 ? new URL(e2, n2) : e2, t2);
}
const Ge = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]); /* @__PURE__ */ new Set([...Ge, "entries"]); const Me = /* @__PURE__ */ new Set([...Ge, "actions"]); /* @__PURE__ */ new Set([...Me, "entries"]); const Ke = (({ html: e2 }) => e2), Qe = () => false, Xe = ({ type: e2 }) => "js" === e2 || "css" === e2;
async function Ye(n2, r2, s2, o2) {
  const a2 = new URL(n2.url);
  if (r2.csrf_check_origin) {
    if (f(n2) && ("POST" === n2.method || "PUT" === n2.method || "PATCH" === n2.method || "DELETE" === n2.method) && n2.headers.get("origin") !== a2.origin) {
      const e2 = _(403, `Cross-site ${n2.method} form submissions are forbidden`);
      return "application/json" === n2.headers.get("accept") ? v(e2.body, { status: e2.status }) : b(e2.body.message, { status: e2.status });
    }
  }
  let i2;
  try {
    i2 = a2.pathname.split("%25").map(decodeURI).join("%25");
  } catch {
    return b("Malformed URI", { status: 400 });
  }
  let c2 = null, u2 = {};
  if (a && !o2.prerendering?.fallback) {
    if (!i2.startsWith(a))
      return b("Not found", { status: 404 });
    i2 = i2.slice(a.length) || "/";
  }
  const y2 = function(e2) {
    return e2.endsWith(H);
  }(i2);
  let $2, k2;
  if (y2 && (i2 = I(i2) || "/", a2.pathname = I(a2.pathname) || "/", $2 = a2.searchParams.get(V)?.split("").map((e2) => "1" === e2), a2.searchParams.delete(V)), !o2.prerendering?.fallback) {
    const e2 = await s2._.matchers();
    for (const t2 of s2._.routes) {
      const n3 = t2.pattern.exec(i2);
      if (!n3)
        continue;
      const r3 = w(n3, t2.params, e2);
      if (r3) {
        c2 = t2, u2 = C(r3);
        break;
      }
    }
  }
  const E2 = {};
  let R2 = {};
  const O2 = { cookies: null, fetch: null, getClientAddress: o2.getClientAddress || (() => {
    throw new Error("svelte-adapter-deno does not specify getClientAddress. Please raise an issue");
  }), locals: {}, params: u2, platform: o2.platform, request: n2, route: { id: c2?.id ?? null }, setHeaders: (e2) => {
    for (const t2 in e2) {
      const n3 = t2.toLowerCase(), r3 = e2[t2];
      if ("set-cookie" === n3)
        throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");
      if (n3 in E2)
        throw new Error(`"${t2}" header is already set`);
      E2[n3] = r3, o2.prerendering && "cache-control" === n3 && (o2.prerendering.cache = r3);
    }
  }, url: a2, isDataRequest: y2 };
  let T2 = { transformPageChunk: Ke, filterSerializedResponseHeaders: Qe, preload: Xe };
  try {
    if (c2) {
      if (a2.pathname === a || a2.pathname === a + "/")
        k2 = "always";
      else if (c2.page) {
        const e2 = await Promise.all([...c2.page.layouts.map((e3) => null == e3 ? e3 : s2._.nodes[e3]()), s2._.nodes[c2.page.leaf]()]);
        k2 = qe(e2, "trailingSlash");
      } else if (c2.endpoint) {
        const e2 = await c2.endpoint();
        k2 = e2.trailingSlash;
      }
      if (!y2) {
        const e2 = P(a2.pathname, k2 ?? "never");
        if (e2 !== a2.pathname && !o2.prerendering?.fallback)
          return new Response(void 0, { status: 308, headers: { "x-sveltekit-normalize": "1", location: (e2.startsWith("//") ? a2.origin + e2 : e2) + ("?" === a2.search ? "" : a2.search) } });
      }
    }
    const { cookies: i3, new_cookies: u3, get_cookie_header: f2, set_internal: w2 } = function(e2, t2, n3) {
      const r3 = e2.headers.get("cookie") ?? "", s3 = parse_1(r3, { decode: (e3) => e3 }), o3 = P(t2.pathname, n3).split("/").slice(0, -1).join("/") || "/", a3 = {}, i4 = { httpOnly: true, sameSite: "lax", secure: "localhost" !== t2.hostname || "http:" !== t2.protocol }, c3 = { get(e3, n4) {
        const s4 = a3[e3];
        if (s4 && Ie(t2.hostname, s4.options.domain) && Le(t2.pathname, s4.options.path))
          return s4.value;
        const o4 = n4?.decode || decodeURIComponent;
        return parse_1(r3, { decode: o4 })[e3];
      }, getAll(e3) {
        const n4 = e3?.decode || decodeURIComponent, s4 = parse_1(r3, { decode: n4 });
        for (const e4 of Object.values(a3))
          Ie(t2.hostname, e4.options.domain) && Le(t2.pathname, e4.options.path) && (s4[e4.name] = e4.value);
        return Object.entries(s4).map(([e4, t3]) => ({ name: e4, value: t3 }));
      }, set(e3, t3, n4 = {}) {
        u4(e3, t3, { ...i4, ...n4 });
      }, delete(e3, t3 = {}) {
        c3.set(e3, "", { ...t3, maxAge: 0 });
      }, serialize: (e3, t3, n4) => serialize_1(e3, t3, { ...i4, ...n4 }) };
      function u4(e3, t3, n4) {
        const r4 = n4.path ?? o3;
        a3[e3] = { name: e3, value: t3, options: { ...n4, path: r4 } };
      }
      return { cookies: c3, new_cookies: a3, get_cookie_header: function(e3, t3) {
        const n4 = { ...s3 };
        for (const t4 in a3) {
          const r4 = a3[t4];
          if (!Ie(e3.hostname, r4.options.domain))
            continue;
          if (!Le(e3.pathname, r4.options.path))
            continue;
          const s4 = r4.options.encode || encodeURIComponent;
          n4[r4.name] = s4(r4.value);
        }
        if (t3) {
          const e4 = parse_1(t3, { decode: (e5) => e5 });
          for (const t4 in e4)
            n4[t4] = e4[t4];
        }
        return Object.entries(n4).map(([e4, t4]) => `${e4}=${t4}`).join("; ");
      }, set_internal: u4 };
    }(n2, a2, k2 ?? "never");
    R2 = u3, O2.cookies = i3, O2.fetch = function({ event: n3, options: r3, manifest: s3, state: o3, get_cookie_header: a3, set_internal: i4 }) {
      return async (c3, u4) => {
        const l2 = We(c3, u4, n3.url);
        let d2 = (c3 instanceof Request ? c3.mode : u4?.mode) ?? "cors", p2 = (c3 instanceof Request ? c3.credentials : u4?.credentials) ?? "same-origin";
        return await r3.hooks.handleFetch({ event: n3, request: l2, fetch: async (c4, u5) => {
          const f3 = We(c4, u5, n3.url), m2 = new URL(f3.url);
          if (f3.headers.has("origin") || f3.headers.set("origin", n3.url.origin), c4 !== l2 && (d2 = (c4 instanceof Request ? c4.mode : u5?.mode) ?? "cors", p2 = (c4 instanceof Request ? c4.credentials : u5?.credentials) ?? "same-origin"), "GET" !== f3.method && "HEAD" !== f3.method || ("no-cors" !== d2 || m2.origin === n3.url.origin) && m2.origin !== n3.url.origin || f3.headers.delete("origin"), m2.origin !== n3.url.origin) {
            if (`.${m2.hostname}`.endsWith(`.${n3.url.hostname}`) && "omit" !== p2) {
              const e2 = a3(m2, f3.headers.get("cookie"));
              e2 && f3.headers.set("cookie", e2);
            }
            return fetch(f3);
          }
          const g2 = o || a, y3 = decodeURIComponent(m2.pathname), w3 = (y3.startsWith(g2) ? y3.slice(g2.length) : y3).slice(1), _3 = `${w3}/index.html`, v2 = s3.assets.has(w3), $3 = s3.assets.has(_3);
          if (v2 || $3) {
            const e2 = v2 ? w3 : _3;
            if (o3.read) {
              const t2 = v2 ? s3.mimeTypes[w3.slice(w3.lastIndexOf("."))] : "text/html";
              return new Response(o3.read(e2), { headers: t2 ? { "content-type": t2 } : {} });
            }
            return await fetch(f3);
          }
          if ("omit" !== p2) {
            const e2 = a3(m2, f3.headers.get("cookie"));
            e2 && f3.headers.set("cookie", e2);
            const t2 = n3.request.headers.get("authorization");
            t2 && !f3.headers.has("authorization") && f3.headers.set("authorization", t2);
          }
          f3.headers.has("accept") || f3.headers.set("accept", "*/*"), f3.headers.has("accept-language") || f3.headers.set("accept-language", n3.request.headers.get("accept-language"));
          const b2 = await Ye(f3, r3, s3, { ...o3, depth: o3.depth + 1 }), k3 = b2.headers.get("set-cookie");
          if (k3)
            for (const e2 of splitCookiesString_1(k3)) {
              const { name: t2, value: n4, ...r4 } = parseString_1(e2);
              i4(t2, n4, r4);
            }
          return b2;
        } });
      };
    }({ event: O2, options: r2, manifest: s2, state: o2, get_cookie_header: f2, set_internal: w2 }), o2.prerendering && !o2.prerendering.fallback && N(a2);
    const _2 = await r2.hooks.handle({ event: O2, resolve: (e2, t2) => async function(e3, t3) {
      try {
        if (t3) {
          if ("ssr" in t3)
            throw new Error("ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197");
          T2 = { transformPageChunk: t3.transformPageChunk || Ke, filterSerializedResponseHeaders: t3.filterSerializedResponseHeaders || Qe, preload: t3.preload || Xe };
        }
        if (o2.prerendering?.fallback)
          return await Oe({ event: e3, options: r2, manifest: s2, state: o2, page_config: { ssr: false, csr: true }, status: 200, error: null, branch: [], fetched: [], resolve_opts: T2 });
        if (c2) {
          let t4;
          if (y2)
            t4 = await async function(e4, t5, n3, r3, s3, o3, a3) {
              if (!t5.page)
                return new Response(void 0, { status: 404 });
              try {
                const i4 = [...t5.page.layouts, t5.page.leaf], c3 = o3 ?? i4.map(() => true);
                let u4 = false;
                const l2 = new URL(e4.url);
                l2.pathname = P(l2.pathname, a3);
                const d2 = { ...e4, url: l2 }, h2 = i4.map((e5, t6) => function(e6) {
                  let t7, n4 = false;
                  return () => n4 ? t7 : (n4 = true, t7 = e6());
                }(async () => {
                  try {
                    if (u4)
                      return { type: "skip" };
                    const o4 = null == e5 ? e5 : await r3._.nodes[e5]();
                    return K({ event: d2, state: s3, node: o4, parent: async () => {
                      const e6 = {};
                      for (let n4 = 0; n4 < t6; n4 += 1) {
                        const t7 = await h2[n4]();
                        t7 && Object.assign(e6, t7.data);
                      }
                      return e6;
                    }, track_server_fetches: n3.track_server_fetches });
                  } catch (e6) {
                    throw u4 = true, e6;
                  }
                })), p2 = h2.map(async (e5, t6) => c3[t6] ? e5() : { type: "skip" });
                let f3 = p2.length;
                const y3 = await Promise.all(p2.map((t6, r4) => t6.catch(async (t7) => {
                  if (t7 instanceof g)
                    throw t7;
                  return f3 = Math.min(f3, r4 + 1), { type: "error", error: await S(e4, n3, t7), status: t7 instanceof m ? t7.status : void 0 };
                }))), { data: w3, chunks: _3 } = Ue(e4, n3, y3);
                return _3 ? new Response(new ReadableStream({ async start(e5) {
                  e5.enqueue(Pe.encode(w3));
                  for await (const t6 of _3)
                    e5.enqueue(Pe.encode(t6));
                  e5.close();
                }, type: "bytes" }), { headers: { "content-type": "text/sveltekit-data", "cache-control": "private, no-store" } }) : Ce(w3);
              } catch (t6) {
                const r4 = t6;
                return r4 instanceof g ? Ae(r4) : Ce(await S(e4, n3, r4), 500);
              }
            }(e3, c2, r2, s2, o2, $2, k2 ?? "never");
          else if (!c2.endpoint || c2.page && !function(e4) {
            const { method: t5, headers: n3 } = e4.request;
            return "PUT" === t5 || "PATCH" === t5 || "DELETE" === t5 || "OPTIONS" === t5 || ("POST" !== t5 || "true" !== n3.get("x-sveltekit-action")) && "text/html" !== p(e4.request.headers.get("accept") ?? "*/*", ["*", "text/html"]);
          }(e3)) {
            if (!c2.page)
              throw new Error("This should never happen");
            t4 = await He(e3, c2.page, r2, s2, o2, T2);
          } else
            t4 = await q(e3, await c2.endpoint(), o2);
          return t4;
        }
        return o2.error ? b("Internal Server Error", { status: 500 }) : 0 === o2.depth ? await Te({ event: e3, options: r2, manifest: s2, state: o2, status: 404, error: new Error(`Not found: ${e3.url.pathname}`), resolve_opts: T2 }) : o2.prerendering ? b("not found", { status: 404 }) : await fetch(n2);
      } catch (t4) {
        return await j(e3, r2, t4);
      } finally {
        e3.cookies.set = () => {
          throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
        }, e3.setHeaders = () => {
          throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
        };
      }
    }(e2, t2).then((t3) => {
      for (const e3 in E2) {
        const n3 = E2[e3];
        t3.headers.set(e3, n3);
      }
      return ze(t3.headers, Object.values(R2)), o2.prerendering && null !== e2.route.id && t3.headers.set("x-sveltekit-routeid", encodeURI(e2.route.id)), t3;
    }) });
    if (200 === _2.status && _2.headers.has("etag")) {
      let e2 = n2.headers.get("if-none-match");
      e2?.startsWith('W/"') && (e2 = e2.substring(2));
      const t2 = _2.headers.get("etag");
      if (e2 === t2) {
        const e3 = new Headers({ etag: t2 });
        for (const t3 of ["cache-control", "content-location", "date", "expires", "vary", "set-cookie"]) {
          const n3 = _2.headers.get(t3);
          n3 && e3.set(t3, n3);
        }
        return new Response(void 0, { status: 304, headers: e3 });
      }
    }
    if (y2 && _2.status >= 300 && _2.status <= 308) {
      const e2 = _2.headers.get("location");
      if (e2)
        return Ae(new g(_2.status, e2));
    }
    return _2;
  } catch (e2) {
    if (e2 instanceof g) {
      const t2 = y2 ? Ae(e2) : c2?.page && L(O2) ? W(e2) : x(e2.status, e2.location);
      return ze(t2.headers, Object.values(R2)), t2;
    }
    return await j(O2, r2, e2);
  }
}
class Ze {
  #i;
  #c;
  constructor(e2) {
    this.#i = h, this.#c = e2;
  }
  async init({ env: e2 }) {
    const t2 = Object.entries(e2), n2 = this.#i.env_public_prefix;
    Object.fromEntries(t2.filter(([e3]) => !e3.startsWith(n2)));
    const r2 = Object.fromEntries(t2.filter(([e3]) => e3.startsWith(n2)));
    if (m$1(r2), !this.#i.hooks)
      try {
        const e3 = await f$1();
        this.#i.hooks = { handle: e3.handle || (({ event: e4, resolve: t3 }) => t3(e4)), handleError: e3.handleError || (({ error: e4 }) => console.error(e4)), handleFetch: e3.handleFetch || (({ request: e4, fetch: t3 }) => t3(e4)) };
      } catch (e3) {
        throw e3;
      }
  }
  async respond(e2, t2) {
    if (!(e2 instanceof Request))
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    return Ye(e2, this.#i, this.#c, { ...t2, error: false, depth: 0 });
  }
}

export { Ze as Server };
//# sourceMappingURL=index.js.map
