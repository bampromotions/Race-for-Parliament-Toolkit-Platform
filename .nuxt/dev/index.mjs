import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { isMainThread, parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestProtocol, getRequestHost as getRequestHost$1, getRequestURL, readRawBody, getRequestHeader, isError, setResponseHeaders, setResponseStatus, send, setResponseHeader, appendResponseHeader, getResponseHeader, getRequestHeaders, getResponseStatus, getHeader, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, getRouterParam, writeEarlyHints, getQuery as getQuery$1, getRequestWebStream, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, readBody, getRequestIP, toWebRequest } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file:///C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file:///C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { getFirestore, FieldValue, FieldPath } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/.pnpm/firebase-admin@13.10.0_@fir_3a4b2c103a4421ced396da0ef185ee96/node_modules/firebase-admin/lib/esm/firestore/index.js';
import { existsSync, readFileSync, promises } from 'node:fs';
import { getApps, cert, applicationDefault, initializeApp } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/.pnpm/firebase-admin@13.10.0_@fir_3a4b2c103a4421ced396da0ef185ee96/node_modules/firebase-admin/lib/esm/app/index.js';
import { getAuth } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/.pnpm/firebase-admin@13.10.0_@fir_3a4b2c103a4421ced396da0ef185ee96/node_modules/firebase-admin/lib/esm/auth/index.js';
import pino from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/.pnpm/pino@10.4.0/node_modules/pino/pino.js';
import { stringify, uneval } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/devalue/src/index.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL, withoutTrailingSlash, parsePath, withLeadingSlash, decodePath, parseQuery } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/ufo/dist/index.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/destr/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/unhead/dist/server.mjs';
import process$1 from 'node:process';
import { klona } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/scule/dist/index.mjs';
import { createHooks } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/unstorage/drivers/fs.mjs';
import { digest, hash as hash$1 } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/source-map/source-map.js';
import { defineDiagnostics, createConsoleReporter } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/nostics/dist/index.mjs';
import { ansiFormatter } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/nostics/dist/formatters/ansi.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/errx/dist/index.mjs';
import { isRef, toValue, isVNode } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/vue/index.mjs';
import _UgJGBQudbbQ8iJzVSV3CKgA1siSZ88YGJS8KylWo4 from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/@nuxt/cli/runtime/dev-close-sockets.mjs';
import { createRouterMatcher } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/vue-router/vue-router.node.mjs';
import { formatWithOptions } from 'node:util';
import _Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU from 'file:///C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/@nuxt/vite-builder/dist/ssr-sourcemap.mjs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/pathe/dist/index.mjs';
import pinoHttp from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/.pnpm/pino-http@11.0.0/node_modules/pino-http/logger.js';
import { getIcons } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/@iconify/utils/lib/index.js';
import { collections } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/.nuxt/nuxt-icon-server-bundle.mjs';
import { renderToString } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/unhead/dist/utils.mjs';
import { DeprecationsPlugin } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/unhead/dist/legacy.mjs';
import { PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/unhead/dist/plugins.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.output","**/.git","**/.cache","**/.data","**/.direnv","C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/vendor","**/node-compile-cache","**/test-results","**/*.sock","C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/.nuxt/analyze","**/.nuxt","**/-*.*"]}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/server","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.output","**/.git","**/.cache","**/.data","**/.direnv","**/node-compile-cache","**/test-results","**/*.sock","**/-*.*"]}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "appSecret": "d4bd809ce3945cdefeeb0a56a1c2d79ad6af31fc4557eed5a6fda051078b3b97",
  "public": {
    "firebaseApiKey": "AIzaSyBuQeKD0Emv9yJ4i9yg8p0hP7gfVd7Axyk",
    "firebaseAuthDomain": "raceforpalament-39d8d.firebaseapp.com",
    "firebaseProjectId": "raceforpalament-39d8d",
    "firebaseAppId": "1:345001195126:web:1e23a4309e7959fd02d157",
    "firebaseStorageBucket": "raceforpalament-39d8d.firebasestorage.app",
    "firebaseMessagingSenderId": "345001195126",
    "firebaseMeasurementId": "G-KZSP7LS7EX",
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "iso": "en-LS",
          "name": "English",
          "language": "",
          "domains": [],
          "defaultForDomains": []
        },
        {
          "code": "st",
          "iso": "st-LS",
          "name": "Sesotho",
          "language": "",
          "domains": [],
          "defaultForDomains": []
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10,
        "compactRoutes": false,
        "prerenderMessages": false,
        "optimizeMessageBundling": true
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "st": {
          "domain": ""
        }
      }
    }
  },
  "firebaseServiceAccountJson": "",
  "icon": {
    "serverKnownCssClasses": []
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

//#region src/runtime/utils/event.ts
const ENC_PIPE_RE = /%7C/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_ENC_SLASH_RE = /%252F/gi;
const HASH_RE = /#/g;
const QUESTION_MARK_RE = /\?/g;
function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) return encodeVueRouterPath(path);
	return encodeVueRouterPath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function encodeVueRouterPath(path) {
	return encodeURI(path).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]").replace(HASH_RE, "%23").replace(QUESTION_MARK_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F");
}
/**
* The response headers of an h3 v1 event, in the shape the renderer writes them in.
*
* Backed by the node response rather than a copy of it, so a header the app sets through
* h3 and a header the renderer sets are the same header, and both are sent.
*/
var NodeResponseHeaders = class {
	res;
	constructor(res) {
		this.res = res;
	}
	get(name) {
		const value = this.res.getHeader(name);
		if (value === void 0) return null;
		return Array.isArray(value) ? value.join(", ") : String(value);
	}
	has(name) {
		return this.res.hasHeader(name);
	}
	set(name, value) {
		this.res.setHeader(name, value);
	}
	append(name, value) {
		const existing = this.res.getHeader(name);
		if (existing === void 0) {
			this.res.setHeader(name, value);
			return;
		}
		this.res.setHeader(name, Array.isArray(existing) ? [...existing, value] : [String(existing), value]);
	}
	delete(name) {
		this.res.removeHeader(name);
	}
	getSetCookie() {
		const value = this.res.getHeader("set-cookie");
		if (value === void 0) return [];
		return Array.isArray(value) ? value.map(String) : [String(value)];
	}
	*entries() {
		const headers = this.res.getHeaders();
		for (const name of Object.keys(headers).sort()) {
			const value = headers[name];
			if (value === void 0) continue;
			if (name === "set-cookie" && Array.isArray(value)) for (const entry of value) yield [name, entry];
			else yield [name, Array.isArray(value) ? value.join(", ") : String(value)];
		}
	}
	*keys() {
		for (const [name] of this.entries()) yield name;
	}
	*values() {
		for (const [, value] of this.entries()) yield value;
	}
	forEach(callback, thisArg) {
		for (const [name, value] of this.entries()) callback.call(thisArg, value, name, this);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
};
const PAYLOAD_METHODS = /* @__PURE__ */ new Set([
	"PATCH",
	"POST",
	"PUT",
	"DELETE"
]);
const BODY_READ_METHODS = /* @__PURE__ */ new Set([
	"arrayBuffer",
	"blob",
	"bytes",
	"formData",
	"json",
	"text"
]);
/**
* The request in the web-standard shape, with every read of its body served from the bytes
* h3 v1 caches on the node request.
*
* A body read here and a `readBody(event)` elsewhere in the same request therefore resolve
* to the same bytes whichever happens first, and reading the request twice - directly, from
* a clone, or as a stream - resolves the same bytes each time rather than the second read
* finding a stream the first has drained.
*/
function toWebRequest$1(event) {
	const existing = event.web?.request;
	if (existing) return existing;
	const method = event.method;
	if (!PAYLOAD_METHODS.has(method)) return new Request(getRequestURL(event), {
		method,
		headers: event.headers
	});
	const request = new Request(getRequestURL(event), {
		method,
		headers: event.headers,
		body: toBufferedBodyStream(event),
		duplex: "half"
	});
	const read = () => readRawBody(event, false).then((body) => body ? new Uint8Array(body) : /* @__PURE__ */ new Uint8Array());
	const copy = () => read().then((body) => new Response(body, { headers: request.headers }));
	const buffered = new Proxy(request, { get(target, property) {
		if (property === "bodyUsed") return false;
		if (property === "body") return toBufferedBodyStream(event);
		if (property === "clone") return () => buffered;
		if (typeof property === "string" && BODY_READ_METHODS.has(property)) return () => copy().then((response) => response[property]());
		const value = Reflect.get(target, property, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
	return buffered;
}
function toBufferedBodyStream(event) {
	return new ReadableStream({ async pull(controller) {
		const body = await readRawBody(event, false);
		if (body) controller.enqueue(new Uint8Array(body));
		controller.close();
	} });
}
/**
* The Nuxt context a request nitro made to itself was fetched with: `node-mock-http` carries
* it on the mock request rather than in the h3 event's own context. A request that arrives
* over the network has none, whoever sent it.
*/
function getFetchedRequestContext(event) {
	return event.node.req.__unenv__?.nuxt;
}
/** The event the SSR renderer reads, which reaches the h3 v1 event itself through `~app`. */
function toRequestEvent(event) {
	const requestEvent = toWebView(event);
	const fetchedWith = getFetchedRequestContext(event);
	if (fetchedWith) event.context.nuxt = {
		...fetchedWith,
		...event.context.nuxt
	};
	return requestEvent;
}
/**
* Describe an h3 v1 event in the web-standard shape, rather than adapting it in place:
* `event.req` and `event.res` already name the node request and response, and that is the
* shape `useRequestEvent()` and the render hooks must keep seeing.
*
* Everything is resolved on access, and the response is backed by the node response rather
* than a copy of it, so a header the application sets through h3 and a header the renderer
* sets are the same header.
*/
function toWebView(event) {
	const node = event.node;
	let request;
	let url;
	const res = {
		get status() {
			return node.res.statusCode;
		},
		set status(status) {
			node.res.statusCode = status;
		},
		get statusText() {
			return node.res.statusMessage;
		},
		set statusText(statusText) {
			node.res.statusMessage = statusText;
		},
		headers: new NodeResponseHeaders(node.res)
	};
	const requestEvent = {
		context: event.context,
		res,
		get req() {
			return request ??= toWebRequest$1(event);
		},
		get url() {
			return url ??= new URL(encodeEventPath(event.path), `${getRequestProtocol(event)}://${getRequestHost$1(event)}`);
		},
		set url(value) {
			url = value;
			event._path = node.req.url = value.pathname + value.search;
		}
	};
	requestEvent["~app"] = event;
	return requestEvent;
}

//#region src/runtime/utils/error.ts
/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	if (hasReqHeader(event, "accept", "text/html")) return false;
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const appId$1 = "nuxt-app";

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

const VueResolver = /* @__PURE__ */ Object.assign(
  (_, value) => isRef(value) ? toValue(value) : value,
  // identity for plain non-reactive values, so the SSR default init entry
  // keeps its precomputed fast path (see unhead/server createHead)
  { _static: true }
);

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const legacyPlugins = [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin];

const unheadOptions = {
  disableDefaults: true,
  plugins: legacyPlugins,
};

const renderSSRHeadOptions = {"omitLineBreaks":true};

const NUXT_PRERENDER_NO_SSR_ROUTES = ["/index.html","/200.html","/404.html"];
const NUXT_NO_SCRIPTS_PATTERNS = [];
const NUXT_PAGE_PATTERNS = ["/admin/courses/:id","/st/admin/courses/:id","/admin/participants/:id","/st/admin/participants/:id","/admin/courses","/st/admin/courses","/admin/modules","/st/admin/modules","/admin/participants","/st/admin/participants","/admin/quizzes","/st/admin/quizzes","/admin/results","/st/admin/results","/auth/forgot-password","/st/auth/forgot-password","/auth/login","/st/auth/login","/auth/register","/st/auth/register","/auth/reset-password","/st/auth/reset-password","/course/:courseId/module/:moduleId/quiz","/st/course/:courseId/module/:moduleId/quiz","/course/:courseId/module/:moduleId/result","/st/course/:courseId/module/:moduleId/result","/course/:courseId/module/:moduleId","/st/course/:courseId/module/:moduleId","/course/:courseId","/st/course/:courseId","/admin","/st/admin","/course","/st/course","/dashboard","/st/dashboard","/marking","/st/marking","/profile","/st/profile","/progress","/st/progress","/","/st"];
const NUXT_PAYLOAD_INLINE = false;
const NUXT_SSR_STREAMING = false;
const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"description","content":"A bilingual civic learning platform for parliament, democracy and public participation."}],"link":[],"style":[],"script":[],"noscript":[],"title":"Race for Parliament Toolkit"};
const appRootTag = "div";
const appRootAttrs = {"id":"__nuxt","class":"isolate"};
const appTeleportTag = "div";
const appTeleportAttrs = {"id":"teleports"};
const appSpaLoaderTag = "div";
const appSpaLoaderAttrs = {"id":"__nuxt-loader"};
const appId = "nuxt-app";

//#region src/runtime/handlers/error.ts
var error_default = async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled) return;
	const isRenderingError = !!(event.context.nuxt?.["~rendering-error"] || getFetchedRequestContext(event)?.["~rendering-error"]);
	let devError;
	let errorCause;
	{
		const errorChannel = await Promise.resolve().then(function () { return errorChannel$1; });
		const isHTTPError = isError(error);
		const isExpected = !error.unhandled && isHTTPError && (error.statusCode || 500) < 500 && !(THROWN_VALUE in error);
		devError = await errorChannel.observeDevError(error, event, {
			expected: isExpected,
			publish: !isRenderingError && true,
			print: !isRenderingError && (error.unhandled ?? !isHTTPError)
		});
		errorCause = errorChannel.serializeErrorCause(error.cause);
	}
	const stacks = snapshotStacks(error) ;
	if (isJsonRequest(event)) {
		if (!devError && true) return;
		const { headers, status, statusText, body } = await defaultHandler(error, event, {
			json: true,
			silent: !!devError
		});
		stacks?.restore();
		setResponseHeaders(event, headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, status, statusText);
		return send(event, typeof body === "string" ? body : JSON.stringify(body, null, 2));
	}
	const defaultRes = await defaultHandler(error, event, {
		json: true,
		silent: !!devError
	});
	stacks?.restore();
	if ((error.status || error.statusCode || 500) === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) defaultRes.body.stack = defaultRes.body.stack.join("\n");
	const errorObject = defaultRes.body;
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	if (!error.unhandled) errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	appendVary(event, "accept, sec-fetch-mode");
	if (!isRenderingError) event.context.nuxt = {
		...event.context.nuxt,
		"~rendering-error": true
	};
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), {
		...errorObject,
		...errorCause !== void 0 && { cause: JSON.stringify(errorCause) }
	}), {
		headers: event.headers,
		redirect: "manual",
		context: { nuxt: { "~rendering-error": true } }
	}).catch(() => null);
	if (event.handled) return;
	if (!res) {
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		if (isRenderingError) setResponseHeader(event, ERROR_PAGE_HEADER, "1");
		else if (devError) {
			const body = await devError.page().catch(() => void 0);
			if (body) return send(event, body);
		}
		const { template } = await Promise.resolve().then(function () { return errorTemplate; });
		errorObject.description = errorObject.message;
		return send(event, template(errorObject));
	}
	let html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === ERROR_PAGE_HEADER) continue;
		if (header === "set-cookie" || header === "x-nitro-prerender") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (devError && typeof html === "string") try {
		html = res.headers.has(ERROR_PAGE_HEADER) ? await devError.page() : await devError.overlay(html);
	} catch {}
	return send(event, html);
};
/** The stacks of an error and its causes as raised, before Nitro rewrites them. */
function snapshotStacks(error) {
	const stacks = [];
	const seen = /* @__PURE__ */ new Set();
	for (let current = error; current instanceof Error && !seen.has(current); current = current.cause) {
		seen.add(current);
		stacks.push([current, current.stack]);
	}
	return { restore() {
		for (const [target, stack] of stacks) if (target.stack !== stack) try {
			Object.defineProperty(target, "stack", {
				value: stack,
				writable: true,
				configurable: true
			});
		} catch {}
	} };
}
/** Set on an error created from a thrown value that was not an `Error`. */
const THROWN_VALUE = Symbol.for("nuxt:dev:thrown");
/** Set when the app's own error page could not render. */
const ERROR_PAGE_HEADER = "x-nuxt-error-page";
/**
* Add `value`'s tokens to the response `vary` header, keeping any already
* present. `*` absorbs everything else, since it means the response varies on
* all headers.
*/
function appendVary(event, value) {
	const incoming = parseVary(value);
	if (!incoming.length) return;
	const existing = parseVary(getResponseHeader(event, "vary"));
	if (existing.includes("*")) return;
	if (incoming.includes("*")) {
		setResponseHeader(event, "vary", "*");
		return;
	}
	const merged = existing.slice();
	for (const token of incoming) if (!merged.includes(token)) merged.push(token);
	setResponseHeader(event, "vary", merged.join(", "));
}
function parseVary(value) {
	return (Array.isArray(value) ? value : typeof value === "string" ? value.split(",") : []).map((token) => token.trim().toLowerCase()).filter(Boolean);
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [error_default, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _wjGcSR4VD_S6fdgksyiYvbeA9B2aTV09duvc49V9K0 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

//#region src/runtime/diagnostics.ts
const ansi$1 = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors$1 = {
	red: ansi$1(31, 39),
	yellow: ansi$1(33, 39),
	cyan: ansi$1(36, 39),
	gray: ansi$1(90, 39),
	bold: ansi$1(1, 22),
	dim: ansi$1(2, 22)
};
/**
* E8xxx
* Nitro server runtime (dev server) diagnostics, sharing the range with the
* SSR renderer.
*/
const docsBase$1 = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const serverDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase: docsBase$1,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors$1) } )],
	codes: {
		NUXT_E8003: {
			why: (p) => `Failed to stringify dev server logs.${p.error ? ` Received \`${p.error}\`.` : ""}`,
			fix: "You can define your own reducer/reviver for rich types following the instructions in `https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload`.",
			docs: false
		},
		NUXT_E8005: {
			why: "Island props cannot contain a `template` key, which the Vue runtime compiler would compile and execute.",
			fix: "Rename the prop (e.g. `templateName`), or disable `vue.runtimeCompiler` if you do not need runtime template compilation.",
			docs: false
		},
		NUXT_E8012: {
			why: (p) => `\`${p.helper}\` from \`nuxt/server\` was called with an h3 event. The handler was defined with h3's \`defineEventHandler\` (auto-imported), which passes a different event.`,
			fix: "Import `defineEventHandler` from `nuxt/server` alongside the helpers. See `https://nuxt.com/docs/4.x/getting-started/upgrade#moving-to-nuxtserver`.",
			docs: false
		}
	}
});

const rootDir = "C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development";
const srcDir = "C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/app";

//#region src/runtime/plugins/dev-server-logs.ts
const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : void 0,
	URL: (data) => data instanceof URL ? data.toString() : void 0,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : void 0
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
var dev_server_logs_default = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) return;
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) continue;
			if (EXCLUDE_TRACE_RE.test(entry.source)) continue;
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId$1}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			serverDiagnostics.NUXT_E8003({
				error: e instanceof Error ? e.toString() : void 0,
				cause: e
			});
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const script = "\"use strict\";(()=>{const o=window,e=document.documentElement,c=[\"dark\",\"light\"],s=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let r=s===\"system\"?f():s;const l=e.getAttribute(\"data-color-mode-forced\");l&&(r=l),i(r),o[\"__NUXT_COLOR_MODE__\"]={preference:s,value:r,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(t){const a=\"\"+t+\"\",n=\"\";e.classList?e.classList.add(a):e.className+=\" \"+a,n&&e.setAttribute(\"data-\"+n,t)}function d(t){const a=\"\"+t+\"\",n=\"\";e.classList?e.classList.remove(a):e.className=e.className.replace(new RegExp(a,\"g\"),\"\"),n&&e.removeAttribute(\"data-\"+n)}function u(t){return o.matchMedia(\"(prefers-color-scheme\"+t+\")\")}function f(){if(o.matchMedia&&u(\"\").media!==\"not all\"){for(const t of c)if(u(\":\"+t).matches)return t}return\"light\"}})();function getStorageValue(o,e){switch(o){case\"localStorage\":try{return window.localStorage.getItem(e)}catch{return null}case\"sessionStorage\":try{return window.sessionStorage.getItem(e)}catch{return null}case\"cookie\":try{return getCookie(e)}catch{return null}default:return null}}function getCookie(o){const c=(\"; \"+window.document.cookie).split(\"; \"+o+\"=\");if(c.length===2){const s=c.pop();return s?s.split(\";\").shift():null}}";

const _9AULvJaw85vUwQhXe4hyvmF1JhnEyBw53IAVpHwwKU = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

/*!
  * shared v11.4.13
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            const value = src[key];
            if (isArray(value)) {
                // replace arrays instead of merging them, without retaining source references
                const copied = [];
                copied.length = value.length;
                des[key] = copied;
                stack.push({ src: value, des: copied });
            }
            else if (isObject(value)) {
                if (!isObject(des[key]) || isArray(des[key])) {
                    des[key] = create();
                }
                stack.push({ src: value, des: des[key] });
            }
            else {
                des[key] = value;
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
function cloneDeep(value) {
  if (value == null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(cloneDeep);
  }
  const out = create(null);
  for (const key of Object.keys(value)) {
    out[key] = cloneDeep(value[key]);
  }
  return out;
}
function hasMessageFunction(value, seen = /* @__PURE__ */ new WeakSet()) {
  if (isFunction(value)) {
    return true;
  }
  if (value == null || typeof value !== "object") {
    return false;
  }
  if (seen.has(value)) {
    return false;
  }
  seen.add(value);
  return Object.values(value).some((x) => hasMessageFunction(x, seen));
}
function warnMissedMessageFunctions(locale, messages) {
  const undeliverable = [];
  if (undeliverable.includes(locale) || !hasMessageFunction(messages)) {
    return;
  }
  console.warn(
    `[nuxt-i18n] Messages for locale "${locale}" contain message functions the build did not detect - they are dropped when messages are delivered as JSON. Write message functions literally in a locale file to make them detectable.`
  );
}
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message, { cause: e });
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

const locale_en_46json_a1708954 = /* @__PURE__ */ JSON.parse("{\"brand\":{\"name\":\"Race for Parliament Toolkit\",\"tagline\":\"Learn. Participate. Lead.\"},\"navigation\":{\"home\":\"Home\",\"dashboard\":\"Dashboard\",\"course\":\"My Course\",\"progress\":\"Progress\",\"profile\":\"Profile\",\"participants\":\"Participants\",\"courses\":\"Courses\",\"modules\":\"Modules\",\"quizzes\":\"Quizzes\",\"results\":\"Results\",\"marking\":\"Marking queue\",\"admin\":\"Administration\",\"language\":\"Language\",\"signOut\":\"Sign out\",\"openMenu\":\"Open navigation menu\",\"closeMenu\":\"Close navigation menu\"},\"common\":{\"english\":\"English\",\"sesotho\":\"Sesotho\",\"loading\":\"Loading...\",\"save\":\"Save changes\",\"cancel\":\"Cancel\",\"back\":\"Back\",\"previous\":\"Previous\",\"next\":\"Next\",\"continue\":\"Continue\",\"retry\":\"Try again\",\"remove\":\"Remove\",\"notConfigured\":\"Firebase is not configured. Set the public Firebase environment variables to enable sign-in and saved progress.\",\"unexpectedError\":\"Something went wrong. Please try again.\"},\"home\":{\"eyebrow\":\"A civic learning programme\",\"title\":\"Build the knowledge to shape public life.\",\"description\":\"Explore parliament, democratic participation and advocacy through a practical bilingual learning experience.\",\"getStarted\":\"Get started\",\"signIn\":\"Sign in\",\"featuresTitle\":\"A clear path from learning to participation\",\"modules\":\"Guided course modules\",\"languages\":\"English and Sesotho\",\"progress\":\"Progress you can track\"},\"auth\":{\"welcome\":\"Welcome back\",\"createAccount\":\"Create your participant account\",\"email\":\"Email address\",\"password\":\"Password\",\"newPassword\":\"New password\",\"confirmPassword\":\"Confirm password\",\"passwordMismatch\":\"The passwords do not match.\",\"fullName\":\"Full name\",\"organisation\":\"Organisation\",\"preferredLanguage\":\"Preferred language\",\"signIn\":\"Sign in\",\"register\":\"Create account\",\"noAccount\":\"New to the programme?\",\"hasAccount\":\"Already have an account?\",\"forgotPassword\":\"Forgot password?\",\"resetPassword\":\"Send password reset email\",\"passwordResetSent\":\"If an account exists for that address, a password reset email has been sent.\",\"authError\":\"We couldn't complete that request. Check your details and try again.\"},\"dashboard\":{\"welcome\":\"Welcome back, {name}\",\"intro\":\"Continue your learning and keep track of your progress.\",\"overallProgress\":\"Course progress\",\"completedModules\":\"Modules completed\",\"currentModule\":\"Continue learning\",\"recentResult\":\"Latest quiz result\",\"noResult\":\"No quiz results yet. Complete a module quiz to see your result here.\",\"openCourse\":\"Open my course\"},\"course\":{\"title\":\"Race for Parliament Toolkit\",\"description\":\"Build practical knowledge about parliament, elections, policy and public leadership.\",\"modules\":\"Course modules\",\"completed\":\"Completed\",\"inProgress\":\"In progress\",\"available\":\"Available\",\"locked\":\"Locked\",\"courseMaterial\":\"Course Material\",\"startQuiz\":\"Start quiz\",\"submitQuiz\":\"Submit quiz\",\"question\":\"Question {current} of {total}\",\"questionCount\":\"{count} questions\",\"quizConfirm\":\"Submit your answers?\",\"result\":\"Quiz Result\",\"passed\":\"Passed\",\"notPassed\":\"Not passed\",\"passThreshold\":\"You need 70% to pass and unlock the next module.\",\"awaitingReview\":\"Your score is automatic and is waiting for an Admin to review it. Your progress is saved.\",\"markerFeedback\":\"Admin feedback\",\"retryQuiz\":\"Retry quiz\",\"nextModule\":\"Continue to next module\",\"courseComplete\":\"You have completed the course.\",\"noModules\":\"No course modules are available yet.\"},\"progress\":{\"title\":\"Your progress\",\"overall\":\"Overall course progress\",\"moduleProgress\":\"Module completion\",\"quizPerformance\":\"Quiz performance\",\"empty\":\"Your learning progress will appear here when you begin the course.\"},\"profile\":{\"title\":\"Participant profile\",\"phone\":\"Phone number\",\"saved\":\"Your profile has been updated.\",\"saveError\":\"We couldn't save your profile. Please try again.\"},\"admin\":{\"title\":\"Administration\",\"participants\":\"Participants\",\"courses\":\"Courses\",\"results\":\"Quiz results\",\"totalParticipants\":\"Total participants\",\"completed\":\"Completed\",\"inProgress\":\"In progress\",\"notStarted\":\"Not started\",\"averageScore\":\"Average score (latest 500 attempts)\",\"participantStatus\":\"Status\",\"moduleLabel\":\"Module\",\"questionEditorIntro\":\"Add bilingual multiple-choice questions to a course module.\",\"createStandaloneQuiz\":\"Create a standalone quiz\",\"standaloneQuizTitleEnglish\":\"Quiz title in English\",\"standaloneQuizTitleSesotho\":\"Quiz title in Sesotho\",\"standaloneQuizCreated\":\"The quiz was published and is now available to participants.\",\"addQuestionToQuiz\":\"Add question to this quiz\",\"createQuiz\":\"Create and publish quiz\",\"quizQuestionCount\":\"{count} questions\",\"publishedQuizzes\":\"Published quizzes\",\"noPublishedQuizzes\":\"No standalone quizzes are available yet.\",\"startQuiz\":\"Start quiz\",\"submitStandaloneQuiz\":\"Submit quiz\",\"quizScore\":\"Your score\",\"quizPassed\":\"You passed this quiz.\",\"quizNotPassed\":\"You need 70% to pass this quiz.\",\"allQuestionsRequired\":\"Answer every question before submitting.\",\"addQuestion\":\"Add question\",\"questionType\":\"Question type\",\"singleChoice\":\"Single choice\",\"multipleChoice\":\"Multiple choice\",\"trueFalse\":\"True or false\",\"promptEnglish\":\"Question in English\",\"promptSesotho\":\"Question in Sesotho\",\"answerOptions\":\"Answer options\",\"optionValue\":\"Answer value\",\"optionEnglish\":\"Option in English\",\"optionSesotho\":\"Option in Sesotho\",\"correctAnswer\":\"Correct\",\"addOption\":\"Add an option\",\"addedQuestions\":\"Added questions\",\"noAddedQuestions\":\"No added questions yet.\",\"questionAdded\":\"The question was added.\",\"addLessonMaterial\":\"Add lesson material\",\"materialTitleEnglish\":\"Lesson title in English\",\"materialTitleSesotho\":\"Lesson title in Sesotho\",\"materialBodyEnglish\":\"Lesson material in English\",\"materialBodySesotho\":\"Lesson material in Sesotho\",\"addedMaterials\":\"Added lesson material\",\"noAddedMaterials\":\"No additional lesson material has been added.\",\"materialAdded\":\"The lesson material was added.\",\"markingTitle\":\"Quiz marking\",\"markingIntro\":\"Review submitted answers and confirm or adjust the automatically calculated score.\",\"noPendingMarking\":\"There are no quiz submissions waiting to be marked.\",\"pendingReview\":\"Awaiting review\",\"automaticScore\":\"Automatic score\",\"participantAnswer\":\"Participant answer\",\"noAnswer\":\"No answer\",\"finalScore\":\"Final score\",\"markerFeedback\":\"Feedback (optional)\",\"saveMark\":\"Save mark\",\"reviewStatus\":\"Review status\",\"reviewed\":\"Marked\",\"pending\":\"Pending\",\"notAvailable\":\"Not reviewable\",\"accessDenied\":\"You do not have administrator access.\",\"empty\":\"No records to display.\"}}");

const locale_st_46json_44bb2859 = /* @__PURE__ */ JSON.parse("{\"brand\":{\"name\":\"Race for Parliament Toolkit\",\"tagline\":\"Ithute. Nka karolo. Etella pele.\"},\"navigation\":{\"home\":\"Lehae\",\"dashboard\":\"Kakaretso\",\"course\":\"Thuto ea ka\",\"progress\":\"Tsoelo-pele\",\"profile\":\"Boemo ba ka\",\"participants\":\"Barupeluoa\",\"courses\":\"Lithuto\",\"modules\":\"Likarolo\",\"quizzes\":\"Lipotso\",\"results\":\"Liphetho\",\"marking\":\"Ho tšoaea\",\"admin\":\"Tsamaiso\",\"language\":\"Puo\",\"signOut\":\"Tsoa\",\"openMenu\":\"Bula lenane la ho tsamaea\",\"closeMenu\":\"Koala lenane la ho tsamaea\"},\"common\":{\"english\":\"Senyesemane\",\"sesotho\":\"Sesotho\",\"loading\":\"E a bula...\",\"save\":\"Boloka liphetoho\",\"cancel\":\"Hlakola\",\"back\":\"Morao\",\"previous\":\"E fetileng\",\"next\":\"E latelang\",\"continue\":\"Tsoela pele\",\"retry\":\"Leka hape\",\"notConfigured\":\"Firebase ha e so lokisoe. Kenya litlhophiso tsa Firebase hore ho khonehe ho kena le ho boloka tsoelo-pele.\",\"unexpectedError\":\"Ho bile le bothata. Ka kopo leka hape.\"},\"home\":{\"eyebrow\":\"Lenaneo la thuto ea sechaba\",\"title\":\"Fumana tsebo ea ho bopa bophelo ba sechaba.\",\"description\":\"Ithute ka paramente, demokrasi le boipiletso ka tsela e sebetsang ea lipuo tse peli.\",\"getStarted\":\"Qala\",\"signIn\":\"Kena\",\"featuresTitle\":\"Tsela e hlakileng ea ho ithuta le ho nka karolo\",\"modules\":\"Likarolo tsa thuto\",\"languages\":\"Senyesemane le Sesotho\",\"progress\":\"Tsoelo-pele e bonahalang\"},\"auth\":{\"welcome\":\"Rea u amohela hape\",\"createAccount\":\"Theha ak'haonte ea hau\",\"email\":\"Aterese ea imeile\",\"password\":\"Lekunutu\",\"newPassword\":\"Lekunutu le lecha\",\"confirmPassword\":\"Netefatsa lekunutu\",\"passwordMismatch\":\"Liphasewete ha li tšoane.\",\"fullName\":\"Lebitso ka botlalo\",\"organisation\":\"Mokhatlo\",\"preferredLanguage\":\"Puo eo u e ratang\",\"signIn\":\"Kena\",\"register\":\"Theha ak'haonte\",\"noAccount\":\"Ha u e-so kene lenaneong?\",\"hasAccount\":\"U se u ntse u na le ak'haonte?\",\"forgotPassword\":\"U lebetse lekunutu?\",\"resetPassword\":\"Romela imeile ea ho fetola lekunutu\",\"passwordResetSent\":\"Haeba ak'haonte e le teng atereseng eo, imeile ea ho fetola lekunutu e rometsoe.\",\"authError\":\"Ha rea khona ho phetha kopo eo. Hlahloba lintlha tsa hau ebe u leka hape.\"},\"dashboard\":{\"welcome\":\"Rea u amohela hape, {name}\",\"intro\":\"Tsoela pele ka thuto ea hau 'me u shebe tsoelo-pele.\",\"overallProgress\":\"Tsoelo-pele ea thuto\",\"completedModules\":\"Likarolo tse phethiloeng\",\"currentModule\":\"Tsoela pele ho ithuta\",\"recentResult\":\"Sephetho sa morao-rao\",\"noResult\":\"Ha ho liphetho tsa lipotso. Qeta lipotso tsa karolo ho bona sephetho.\",\"openCourse\":\"Bula thuto ea ka\"},\"course\":{\"title\":\"Race for Parliament Toolkit\",\"description\":\"Ithute ka paramente, likhetho, maano le boetapele ba sechaba.\",\"modules\":\"Likarolo tsa thuto\",\"completed\":\"E phethiloe\",\"inProgress\":\"E ntse e tsoela pele\",\"available\":\"E fumaneha\",\"locked\":\"E notletsoe\",\"courseMaterial\":\"Litaba tsa thuto\",\"startQuiz\":\"Qala lipotso\",\"submitQuiz\":\"Romela likarabo\",\"question\":\"Potso {current} ho tse {total}\",\"questionCount\":\"Lipotso: {count}\",\"quizConfirm\":\"Romela likarabo tsa hau?\",\"result\":\"Sephetho sa lipotso\",\"passed\":\"U atlehile\",\"notPassed\":\"Ha ua atleha\",\"passThreshold\":\"U hloka 70% ho atleha le ho bula karolo e latelang.\",\"awaitingReview\":\"Lintlha tsa hau li baliloe ka boiketsetso 'me li emetse hore Mookameli a li hlahlobe. Tsoelo-pele ea hau e bolokiloe.\",\"markerFeedback\":\"Maikutlo a Mookameli\",\"retryQuiz\":\"Leka lipotso hape\",\"nextModule\":\"Tsoela pele karolong e latelang\",\"courseComplete\":\"U qetile thuto.\",\"noModules\":\"Ha ho likarolo tsa thuto tse fumanehang.\"},\"progress\":{\"title\":\"Tsoelo-pele ea hau\",\"overall\":\"Tsoelo-pele ea thuto ka kakaretso\",\"moduleProgress\":\"Ho phethoa ha likarolo\",\"quizPerformance\":\"Liphetho tsa lipotso\",\"empty\":\"Tsoelo-pele ea hau e tla hlaha mona ha u qala thuto.\"},\"profile\":{\"title\":\"Boemo ba morupeluoa\",\"phone\":\"Nomoro ea mohala\",\"saved\":\"Boemo ba hau bo ntlafalitsoe.\",\"saveError\":\"Ha rea khona ho boloka boemo ba hau. Ka kopo leka hape.\"},\"admin\":{\"title\":\"Tsamaiso\",\"participants\":\"Barupeluoa\",\"courses\":\"Lithuto\",\"results\":\"Liphetho tsa lipotso\",\"totalParticipants\":\"Barupeluoa bohle\",\"completed\":\"Ba phethileng\",\"inProgress\":\"Ba ntseng ba tsoela pele\",\"notStarted\":\"Ba e-so qale\",\"averageScore\":\"Karolelano ea lintlha (liteko tsa morao-rao tse 500)\",\"participantStatus\":\"Boemo\",\"moduleLabel\":\"Karolo\",\"questionEditorIntro\":\"Kenya lipotso tsa boikhethelo ka lipuo tse peli karolong ea thuto.\",\"createStandaloneQuiz\":\"Etsa lipotso tse ncha\",\"standaloneQuizTitleEnglish\":\"Sehlooho sa lipotso ka Senyesemane\",\"standaloneQuizTitleSesotho\":\"Sehlooho sa lipotso ka Sesotho\",\"standaloneQuizCreated\":\"Lipotso li phatlalalitsoe 'me barupeluoa ba ka li araba.\",\"addQuestionToQuiz\":\"Kenya potso lipotsong tsena\",\"createQuiz\":\"Etsa le ho phatlalatsa lipotso\",\"quizQuestionCount\":\"Lipotso tse {count}\",\"publishedQuizzes\":\"Lipotso tse phatlalalitsoeng\",\"noPublishedQuizzes\":\"Ha ho lipotso tse ncha tse fumanehang.\",\"startQuiz\":\"Qala lipotso\",\"submitStandaloneQuiz\":\"Romela lipotso\",\"quizScore\":\"Lintlha tsa hau\",\"quizPassed\":\"U atlehile lipotsong tsena.\",\"quizNotPassed\":\"U hloka 70% hore u atlehe lipotsong tsena.\",\"allQuestionsRequired\":\"Araba lipotso tsohle pele u romela.\",\"addQuestion\":\"Kenya potso\",\"questionType\":\"Mofuta oa potso\",\"singleChoice\":\"Karabo e le 'ngoe\",\"multipleChoice\":\"Likarabo tse ngata\",\"trueFalse\":\"Nnete kapa leshano\",\"promptEnglish\":\"Potso ka Senyesemane\",\"promptSesotho\":\"Potso ka Sesotho\",\"answerOptions\":\"Likhetho tsa likarabo\",\"optionValue\":\"Boleng ba karabo\",\"optionEnglish\":\"Khetho ka Senyesemane\",\"optionSesotho\":\"Khetho ka Sesotho\",\"correctAnswer\":\"Karabo e nepahetseng\",\"addOption\":\"Kenya khetho\",\"addedQuestions\":\"Lipotso tse kentsoeng\",\"noAddedQuestions\":\"Ha ho lipotso tse kentsoeng.\",\"questionAdded\":\"Potso e kentsoe.\",\"addLessonMaterial\":\"Kenya litaba tsa thuto\",\"materialTitleEnglish\":\"Sehlooho sa thuto ka Senyesemane\",\"materialTitleSesotho\":\"Sehlooho sa thuto ka Sesotho\",\"materialBodyEnglish\":\"Litaba tsa thuto ka Senyesemane\",\"materialBodySesotho\":\"Litaba tsa thuto ka Sesotho\",\"addedMaterials\":\"Litaba tsa thuto tse kentsoeng\",\"noAddedMaterials\":\"Ha ho litaba tse ling tsa thuto tse kentsoeng.\",\"materialAdded\":\"Litaba tsa thuto li kentsoe.\",\"markingTitle\":\"Ho tšoaea lipotso\",\"markingIntro\":\"Hlahloba likarabo tse rometsoeng 'me u netefatse kapa u fetole lintlha tse baliloeng.\",\"noPendingMarking\":\"Ha ho lipotso tse rometsoeng tse emetseng ho tšoauoa.\",\"pendingReview\":\"E emetse tlhahlobo\",\"automaticScore\":\"Lintlha tse baliloeng\",\"participantAnswer\":\"Karabo ea morupeluoa\",\"noAnswer\":\"Ha ho karabo\",\"finalScore\":\"Lintlha tsa ho qetela\",\"markerFeedback\":\"Maikutlo (ha ho hlokahale)\",\"saveMark\":\"Boloka lintlha\",\"reviewStatus\":\"Boemo ba tlhahlobo\",\"reviewed\":\"E tšoailoe\",\"pending\":\"E emetse\",\"notAvailable\":\"Ha e hlahlojoe\",\"accessDenied\":\"Ha u na tumello ea tsamaiso.\",\"empty\":\"Ha ho lintlha tse teng.\"}}");

// @ts-nocheck
const localeCodes =  [
  "en",
  "st"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_a1708954",
      load: () => Promise.resolve(locale_en_46json_a1708954),
      cache: true
    }
  ],
  st: [
    {
      key: "locale_st_46json_44bb2859",
      load: () => Promise.resolve(locale_st_46json_44bb2859),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "en",
    iso: "en-LS",
    name: "English",
    language: undefined,
    domains: [],
    defaultForDomains: []
  },
  {
    code: "st",
    iso: "st-LS",
    name: "Sesotho",
    language: undefined,
    domains: [],
    defaultForDomains: []
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

const staticAnswerKeys = {
  1: { m1q1: ["a"], m1q2: ["true"], m1q3: ["respect-law", "vote"] },
  2: { m2q1: ["be-registered"], m2q2: ["true"] },
  3: { m3q1: ["evidence"], m3q2: ["consultation", "petition"] },
  4: { m4q1: ["transparency"], m4q2: ["true"] }
};
function getStaticAnswers(moduleId) {
  var _a;
  return (_a = staticAnswerKeys[moduleId]) != null ? _a : {};
}

const isDevelopment = true;
const environment = "development" ;
const logger$1 = pino({
  level: "debug" ,
  redact: {
    paths: [
      "password",
      "*.password",
      "email",
      "*.email",
      "accessToken",
      "*.accessToken",
      "refreshToken",
      "*.refreshToken",
      "idToken",
      "*.idToken",
      "authorization",
      "*.authorization",
      "cookie",
      "*.cookie",
      "serviceAccount",
      "*.serviceAccount",
      "firebaseServiceAccountJson",
      "*.firebaseServiceAccountJson"
    ],
    censor: "[REDACTED]"
  }
});
function useLogger() {
  function log(level, message, details = {}) {
    logger$1[level](details, message);
  }
  return { environment, isDevelopment, log };
}

function getAdminApp(event) {
  const existing = getApps().find((app) => app.name === "race-for-parliament-server");
  if (existing) return existing;
  const config = useRuntimeConfig(event);
  const projectId = config.public.firebaseProjectId;
  if (!projectId) {
    throw createError({ statusCode: 500, statusMessage: "Firebase Admin is missing NUXT_PUBLIC_FIREBASE_PROJECT_ID." });
  }
  const serviceAccountJson = config.firebaseServiceAccountJson;
  const serviceAccountPath = resolve(process.cwd(), "raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json");
  let credential;
  if (serviceAccountJson) {
    try {
      credential = cert(JSON.parse(serviceAccountJson));
    } catch {
      throw createError({ statusCode: 500, statusMessage: "NUXT_FIREBASE_SERVICE_ACCOUNT_JSON is not valid service-account JSON." });
    }
  } else if (existsSync(serviceAccountPath)) {
    try {
      credential = cert(JSON.parse(readFileSync(serviceAccountPath, "utf8")));
    } catch {
      throw createError({ statusCode: 500, statusMessage: "The root Firebase service-account file is not valid service-account JSON." });
    }
  } else {
    credential = applicationDefault();
  }
  return initializeApp({
    credential,
    projectId
  }, "race-for-parliament-server");
}
function getFirebaseAdmin(event) {
  const app = getAdminApp(event);
  return {
    auth: getAuth(app),
    db: getFirestore(app)
  };
}
async function requireFirebaseUser(event) {
  const authorization = getHeader(event, "authorization");
  const match = authorization == null ? void 0 : authorization.match(/^Bearer\s+(.+)$/i);
  if (!match) {
    throw createError({ statusCode: 401, statusMessage: "Authentication is required." });
  }
  const adminAuth = getFirebaseAdmin(event).auth;
  try {
    return await adminAuth.verifyIdToken(match[1], true);
  } catch (error) {
    const code = typeof error === "object" && error !== null && "code" in error && typeof error.code === "string" ? error.code : void 0;
    const invalidTokenCodes = /* @__PURE__ */ new Set([
      "auth/argument-error",
      "auth/id-token-expired",
      "auth/id-token-revoked",
      "auth/invalid-id-token",
      "auth/user-disabled",
      "auth/user-not-found"
    ]);
    if (!code || !invalidTokenCodes.has(code)) {
      const { log } = useLogger();
      log("error", "Firebase ID token verification failed", {
        errorCode: code != null ? code : "unknown",
        errorName: error instanceof Error ? error.name : "UnknownError"
      });
      throw createError({
        statusCode: 503,
        statusMessage: "Firebase Admin credentials are unavailable. Configure NUXT_FIREBASE_SERVICE_ACCOUNT_JSON or Application Default Credentials."
      });
    }
    throw createError({ statusCode: 401, statusMessage: "The authentication token is invalid or expired." });
  }
}
async function requireRole(event, allowedRoles) {
  const user = await requireFirebaseUser(event);
  const profile = await getFirebaseAdmin(event).db.doc(`users/${user.uid}`).get();
  if (!profile.exists) {
    throw createError({ statusCode: 403, statusMessage: "A user profile is required to access this resource." });
  }
  const role = profile.get("role") === "admin" ? "admin" : "participant";
  if (!allowedRoles.includes(role)) {
    throw createError({ statusCode: 403, statusMessage: "You do not have permission to perform this action." });
  }
  return { ...user, role };
}
function requireAdminUser(event) {
  return requireRole(event, ["admin"]);
}

function isRecord$2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function invalidQuiz() {
  throw createError({ statusCode: 400, statusMessage: "The quiz details or questions are invalid." });
}
function requiredText(value, maxLength) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}
function validateStandaloneQuiz(value) {
  if (!isRecord$2(value) || !requiredText(value.titleEn, 120) || !requiredText(value.titleSt, 120) || !Array.isArray(value.questions) || value.questions.length < 1 || value.questions.length > 50) {
    invalidQuiz();
  }
  const questions = value.questions.map((item, index) => {
    if (!isRecord$2(item) || !["single", "multiple", "truefalse"].includes(String(item.type)) || !requiredText(item.promptEn, 500) || !requiredText(item.promptSt, 500) || !Array.isArray(item.options) || item.options.length < 2 || item.options.length > 10 || !Array.isArray(item.correctAnswers) || item.correctAnswers.length === 0) {
      invalidQuiz();
    }
    const options = [];
    const values = /* @__PURE__ */ new Set();
    for (const option of item.options) {
      if (!isRecord$2(option) || typeof option.value !== "string" || !/^[A-Za-z0-9_-]{1,60}$/.test(option.value) || !requiredText(option.labelEn, 200) || !requiredText(option.labelSt, 200) || values.has(option.value)) {
        invalidQuiz();
      }
      values.add(option.value);
      options.push({
        value: option.value,
        labelEn: option.labelEn.trim(),
        labelSt: option.labelSt.trim()
      });
    }
    const correctAnswers = item.correctAnswers.filter((answer) => typeof answer === "string");
    const type = item.type;
    if (correctAnswers.length !== item.correctAnswers.length || correctAnswers.length > options.length || new Set(correctAnswers).size !== correctAnswers.length || correctAnswers.some((answer) => !values.has(answer)) || type !== "multiple" && correctAnswers.length !== 1 || type === "truefalse" && (options.length !== 2 || !values.has("true") || !values.has("false"))) {
      invalidQuiz();
    }
    return {
      id: `q${index + 1}`,
      type,
      promptEn: item.promptEn.trim(),
      promptSt: item.promptSt.trim(),
      options,
      correctAnswers
    };
  });
  return {
    titleEn: value.titleEn.trim(),
    titleSt: value.titleSt.trim(),
    questions
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    const getRuntimeConfig = useRuntimeConfig;
    return getRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}

const normalizeDomain = (domain = "") => domain.replace(/^https?:\/\//i, "").toLowerCase();
function isLocaleOnHost(locale, host) {
  return !!locale?.domains.some((x) => normalizeDomain(x) === host);
}
function resolveLocaleReach(locales, host, locale) {
  const target = locales.find((l) => l.code === locale);
  if (!target?.domains.length || isLocaleOnHost(target, host)) {
    return "here";
  }
  return locales.some((l) => isLocaleOnHost(l, host)) ? "other-domain" : "off-host";
}
function isLocaleServedOnHost(locales, host, locale) {
  return resolveLocaleReach(locales, host, locale) !== "other-domain";
}
function matchDomainLocale(locales, host, pathLocale) {
  const matches = locales.filter((locale) => isLocaleOnHost(locale, host));
  return (
    // match by current path locale
    (matches.find((l) => l.code === pathLocale) || matches.find((l) => l.defaultForDomains.some((domain) => normalizeDomain(domain) === host)) || matches[0])?.code
  );
}
function cookieSpansDomains(locales, cookieDomain) {
  const scope = cookieDomain.replace(/^\./, "").replace(/:\d+$/, "").toLowerCase();
  return locales.every(
    (l) => l.domains.concat(l.domain || []).every((domain) => {
      const host = normalizeDomain(domain).replace(/:\d+$/, "");
      return host === scope || host.endsWith("." + scope);
    })
  );
}
function withRuntimeDomain(locale, domainLocales) {
  if (typeof locale === "string") {
    return locale;
  }
  const properties = locale;
  const domain = domainLocales[properties.code]?.domain;
  if (!domain || domain === properties.domain) {
    return locale;
  }
  return {
    ...properties,
    domain,
    domains: [domain],
    defaultForDomains: properties.defaultForDomains.length ? [domain] : []
  };
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host, locales = normalizedLocales) {
  return locales.find((l) => l.defaultForDomains.some((domain) => normalizeDomain(domain) === host))?.code;
}
function resolveDefaultLocale(host, defaultLocale, locales = normalizedLocales) {
  const resolved = getDefaultLocaleForDomain(host, locales) || defaultLocale;
  if (resolved) {
    return resolved;
  }
  return (locales.some((l) => l.domains.length) ? locales[0]?.code : "") || "";
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

const storage = prefixStorage(useStorage(), "i18n");
function deepFreeze(value) {
  if (value == null || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }
  for (const key of Object.keys(value)) {
    deepFreeze(value[key]);
  }
  return Object.freeze(value);
}
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        deepFreeze(value);
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
function appContextHint(e) {
  if (!/ is not defined|Nuxt instance unavailable/.test(e.message)) {
    return "";
  }
  return ". Locale loaders run outside the Nuxt app when the server produces messages, so Nuxt app composables (`useNuxtApp`, `useState`, `useCookie`, ...) are unavailable - call them in the locale file itself to have the build keep that locale in the app instead.";
}
const _getMergedMessages = async (locale, fallbackLocales) => {
  try {
    if (fallbackLocales.length === 0) {
      return await getMessages(locale) ?? {};
    }
    const merged = {};
    const messages = await Promise.all(fallbackLocales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    deepCopy(await getMessages(locale), merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message + appContextHint(e), { cause: e });
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(resolveDefaultLocale(getHost(event), defaultLocale));
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    },
    async loadMessages(locale) {
      const messages = await getMergedMessages(locale, this.localeConfigs?.[locale]?.fallbacks ?? []) ?? {};
      return this.vueI18nOptions?.flatJson ? cloneDeep(messages) : messages;
    }
  };
}

const separator = "___";
const createTrailingSlashFormatter = (trailingSlash) => trailingSlash ? withTrailingSlash : withoutTrailingSlash;
function prefixable(currentLocale, defaultLocale, options) {
  return (currentLocale !== defaultLocale || options.strategy === "prefix");
}
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  if (input[0] === "/") {
    return getLocaleFromRoutePath(input);
  }
  const fromName = getLocaleFromRouteName(input);
  if (fromName) {
    return fromName;
  }
  if (typeof route === "object" && route?.path) {
    return getLocaleFromRoutePath(String(route.path));
  }
  return "";
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getRequestHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
const getRefererHost = (event) => {
  const referer = getRequestHeader(event, "referer");
  try {
    return referer && new URL(referer).host || void 0;
  } catch {
    return void 0;
  }
};
const getDomainLocales = (domainLocales) => normalizedLocales.map((l) => withRuntimeDomain(l, domainLocales));
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  let host;
  let locales;
  const getHost = () => host ??= getRequestHost(event);
  const getLocales = () => locales ??= getDomainLocales(runtimeI18n.domainLocales);
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => matchDomainLocale(getLocales(), getHost(), getLocaleFromRoutePath(path)),
    route: (path) => getRouteLocale(event, path),
    /** Passes the locale through when the current host serves it, `undefined` otherwise */
    onHost: (locale) => !locale || isLocaleServedOnHost(getLocales(), getHost(), locale) ? locale : void 0,
    /** Whether the visitor arrived from one of the configured domains */
    fromOwnDomain: () => {
      const referer = getRefererHost(event);
      return !!referer && getLocales().some((l) => isLocaleOnHost(l, referer));
    },
    /** Whether a cookie scoped to the configured `cookieDomain` is readable on every domain */
    cookieSpans: () => !!config.cookieDomain && cookieSpansDomains(getLocales(), config.cookieDomain)
  };
};
function createLocaleDetector(config) {
  const { detection} = config;
  const isSupported = config.isSupportedLocale ?? isSupportedLocale;
  function skipDetect(path, pathLocale) {
    if (detection.redirectOn === "root" && path !== "/") {
      return true;
    }
    if (detection.redirectOn === "no prefix" && !detection.alwaysRedirect && isSupported(pathLocale)) {
      return true;
    }
    return false;
  }
  return function detectLocale(detectors, route, initial) {
    const path = isString(route) ? parsePath(route).pathname : route.path;
    const pass = (locale) => locale;
    const onHost = pass;
    function* detect() {
      const detecting = initial && detection.enabled && !skipDetect(path, detectors.route(path));
      if (detecting) {
        const cookie = onHost;
        const browser = onHost;
        yield cookie(detectors.cookie());
        yield browser(detectors.header());
        yield browser(detectors.navigator());
      }
      {
        yield detectors.route(route);
      }
      if (detecting) {
        yield onHost(detection.fallbackLocale);
      }
    }
    for (const detected of detect()) {
      if (detected && isSupported(detected)) {
        return detected;
      }
    }
    return "";
  };
}

// Generated by @nuxtjs/i18n
const localizedPaths = [
  "/admin/courses/:id()",
  "/admin/participants/:id()",
  "/admin/courses",
  "/admin/modules",
  "/admin/participants",
  "/admin/quizzes",
  "/admin/quizzes/create",
  "/admin/results",
  "/auth/forgot-password",
  "/auth/login",
  "/auth/register",
  "/auth/reset-password",
  "/course/:courseId()/module/:moduleId()/quiz",
  "/course/:courseId()/module/:moduleId()/result",
  "/course/:courseId()/module/:moduleId()",
  "/course/:courseId()",
  "/quizzes/:id()",
  "/admin",
  "/course",
  "/dashboard",
  "/marking",
  "/profile",
  "/progress",
  "/quizzes",
  "/"
];
const pathToI18nConfig = {};
const i18nPathToPath = {};
const disabledPaths = [];

const emptyRoute = { path: "/", name: "", matched: [], params: {}, meta: {} };
function createPathMatcher(resources, config) {
  const matcher = createRouterMatcher([], {});
  for (const path of [...resources.localizedPaths, ...Object.keys(resources.i18nPathToPath)]) {
    matcher.addRoute({ path, component: () => "", meta: {} });
  }
  const disabledI18nMatcher = createRouterMatcher([], {});
  for (const path of resources.disabledPaths) {
    disabledI18nMatcher.addRoute({ path, component: () => "", meta: {} });
  }
  const formatTrailingSlash = createTrailingSlashFormatter(config.trailingSlash);
  const getI18nPathToI18nPath = (path, locale) => {
    if (!path || !locale) {
      return;
    }
    const plainPath = resources.i18nPathToPath[path] ?? path;
    const i18nConfig = resources.pathToI18nConfig[plainPath];
    if (i18nConfig == null || !(locale in i18nConfig)) {
      return plainPath;
    }
    return i18nConfig[locale] || void 0;
  };
  function isExistingNuxtRoute2(path) {
    if (path === "") {
      return;
    }
    if (path.endsWith("/__nuxt_error")) {
      return;
    }
    if (disabledI18nMatcher.resolve({ path }, emptyRoute).matched.length > 0) {
      return;
    }
    const resolvedMatch = matcher.resolve({ path }, emptyRoute);
    return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
  }
  function matchLocalized2(path, locale, defaultLocale) {
    if (path === "") {
      return;
    }
    const parsed = parsePath(path);
    const resolvedMatch = matcher.resolve({ path: parsed.pathname || "/" }, emptyRoute);
    if (resolvedMatch.matched.length === 0) {
      return;
    }
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    if (!alternate) {
      return;
    }
    const match = matcher.resolve({ params: resolvedMatch.params }, { ...emptyRoute, path: alternate });
    const isPrefixable = prefixable(locale, defaultLocale, config);
    return formatTrailingSlash(withLeadingSlash(joinURL(isPrefixable ? locale : "", match.path)), true);
  }
  return { isExistingNuxtRoute: isExistingNuxtRoute2, matchLocalized: matchLocalized2 };
}
const { isExistingNuxtRoute, matchLocalized } = createPathMatcher(
  { localizedPaths, i18nPathToPath, pathToI18nConfig, disabledPaths },
  { strategy: "prefix_except_default", trailingSlash: false }
);

function createRedirectResolver(config) {
  const { detection, rootRedirect, matchLocalized} = config;
  const isSupported = config.isSupportedLocale ?? isSupportedLocale;
  const detectLocale = createLocaleDetector({ detection, isSupportedLocale: isSupported});
  return function resolveRedirectPath(fullPath, path, pathLocale, defaultLocale, detectors, relocate) {
    let locale = detectLocale(detectors, fullPath, true) || defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== fullPath) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const pathname = parsePath(fullPath).pathname;
    if (rootRedirect && pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupported(detectors.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (config.redirectStatusCode) {
      redirectCode = config.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    return { path: resolvedPath, code: redirectCode, locale };
  };
}

function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _gtDdjcQqFSva_K_6weR35jIUvFlb6q7chRmKX04KY = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const legacyBaseUrl = isFunction(runtimeI18n.baseUrl);
  if (legacyBaseUrl) {
    console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
  }
  const baseUrlGetter = (event) => {
    return "";
  };
  const resolveRedirectPath = createRedirectResolver({
    detection,
    rootRedirect,
    redirectStatusCode: runtimeI18n.redirectStatusCode,
    matchLocalized});
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const { pathname } = parsePath(event.path);
    const path = pathLocale ? pathname.slice(pathLocale.length + 1) || "/" : pathname;
    if (!url.pathname.includes("/_i18n") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(
      event.path,
      path,
      pathLocale,
      ctx.vueI18nOptions.defaultLocale,
      detector);
    if (resolved.path && (resolved.origin || resolved.path !== pathname)) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && (!resolved.origin || detection.cookieDomain) && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        // the resolved path is base-free (matched against base-free routes), re-add `app.baseURL`
        joinURL(
          resolved.origin || baseUrlGetter(),
          useRuntimeConfig(event).app.baseURL,
          resolved.path + url.search
        ),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

//#region src/runtime/server/dev-error/index.ts
/** Base path the dev server owning the channel serves it at. */
const ERROR_CHANNEL_ENV$1 = "NUXT_DEV_ERROR_CHANNEL";
/** `BroadcastChannel` name reports are forwarded on. */
const ERROR_CHANNEL_BROADCAST$1 = "nuxt:dev:error";
const CHANNEL_KEY = Symbol.for("nuxt:dev:error-channel");
let isForwarding = () => false;
/**
* Whether reports are forwarded to a dev server in front rather than served from here.
* Read when the channel is first used, not when this module loads.
*/
function setErrorChannelForwarding(forward) {
	isForwarding = forward;
}
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel$1() {
	const store = globalThis;
	store[CHANNEL_KEY] ||= isForwarding() ? Promise.resolve(createForwardingChannel()) : import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/channel/index.mjs').then(({ createChannel }) => createOwnedChannel(createChannel({ open: true })));
	return store[CHANNEL_KEY];
}
/** The `BroadcastChannel` reports travel between threads on, which must not hold the process open. */
function openBroadcast() {
	const broadcast = new BroadcastChannel(ERROR_CHANNEL_BROADCAST$1);
	broadcast.unref?.();
	return {
		broadcast,
		post: (message) => broadcast.postMessage(message)
	};
}
/** A channel of this process, which also relays reports to and from other threads. */
function createOwnedChannel(channel) {
	const { broadcast, post } = openBroadcast();
	broadcast.onmessage = (event) => {
		const message = event.data;
		switch (message?.type) {
			case "nuxt:dev:error:report": return channel.setError(message.report);
			case "nuxt:dev:error:clear": return channel.clearError(message.id);
			case "nuxt:dev:error:log": return channel.log(message.entry);
			case "nuxt:dev:error:warning": return channel.warn(message.report);
			case "nuxt:dev:error:progress": return channel.progress(message.progress);
		}
	};
	post({ type: "nuxt:dev:error:sync" });
	return {
		...channel,
		setError(report, requestId, request) {
			channel.setError(report, requestId, request);
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id) {
			channel.clearError(id);
			post({
				type: "nuxt:dev:error:clear",
				id
			});
		},
		get current() {
			return channel.current;
		},
		get clients() {
			return channel.clients;
		},
		get history() {
			return channel.history;
		}
	};
}
function createForwardingChannel() {
	const { broadcast, post } = openBroadcast();
	let current;
	return {
		handler: () => Promise.resolve(false),
		fetchHandler: () => Promise.resolve(void 0),
		setError(report, requestId, request) {
			current = report;
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id) {
			current = void 0;
			post({
				type: "nuxt:dev:error:clear",
				id
			});
		},
		warn(report) {
			post({
				type: "nuxt:dev:error:warning",
				report
			});
		},
		log(entry) {
			post({
				type: "nuxt:dev:error:log",
				entry: {
					timestamp: Date.now(),
					...entry
				}
			});
		},
		progress(progress) {
			post({
				type: "nuxt:dev:error:progress",
				progress
			});
		},
		get current() {
			return current;
		},
		history: [],
		getReport: () => void 0,
		clients: 0,
		close() {
			broadcast.close();
		}
	};
}
/** Publish a report as the current error, paired with the request it came from. */
async function publishErrorReport$1(report, request) {
	const channel = await useErrorChannel$1();
	const description = request && `${request.method} ${request.url.pathname}${request.url.search}`;
	channel.setError(report, requestIdOf(request), description);
}
/** The id a dev server in front gave the request. */
function requestIdOf(request) {
	return request?.headers.get("x-nuxt-dev-request-id") ?? void 0;
}
/** Retire the current report, dismissing overlays showing it. */
async function clearErrorReport() {
	const channel = await useErrorChannel$1();
	if (channel.current) channel.clearError();
}
/** Stream a log entry to connected error pages and overlays. */
async function publishDevLog(entry) {
	(await useErrorChannel$1()).log(entry);
}
/** Report build progress. A `percent` of 100 retires the progress bar. */
async function publishDevProgress(progress) {
	(await useErrorChannel$1()).progress(progress);
}
const THROWN_CONTEXT = Symbol.for("nuxt:dev:context");
/** The component instance and route the app recorded on `error` when it threw. */
function thrownContext(error) {
	return (typeof error === "object" && error !== null && THROWN_CONTEXT in error ? error[THROWN_CONTEXT] : void 0) ?? {};
}
/**
* Build a report for an error raised while rendering. Must run before anything rewrites
* `error.stack`, as frames are mapped by the loaders rather than read off the stack.
*/
async function createErrorReport$1(error, options) {
	const [{ createReport, fsLoader }, { nuxtPreset }] = await Promise.all([import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/index.mjs'), import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/presets/index.mjs')]);
	return withoutEchoingCauses(await createReport(error, {
		cwd: options.cwd,
		loaders: [...options.loaders ?? [], fsLoader()],
		presets: [nuxtPreset()],
		context: {
			...thrownContext(error),
			...options.context
		}
	}));
}
/** Add the error overlay to an already-rendered page. */
async function withErrorOverlay(html, report, options) {
	const [{ injectOverlay }, { nuxtTheme }] = await Promise.all([import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/index.mjs'), import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/presets/index.mjs')]);
	return injectOverlay(html, report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme,
		tag: "nuxt-error-overlay",
		startMinimized: options.startMinimized
	});
}
/** Render a standalone error page, for when the app itself cannot render one. */
async function renderErrorPage(report, options) {
	const [{ renderPage }, { nuxtTheme }] = await Promise.all([import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/index.mjs'), import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/presets/index.mjs')]);
	return renderPage(report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme
	});
}
/** Render a report for the terminal. It carries its own icon and colours. */
async function renderErrorAnsi(report, options) {
	const { renderAnsi } = await import('file://C:/Users/USER/Documents/shelileworkplace/nuxt-js-quiz-system-development/node_modules/my-bad/dist/index.mjs');
	return renderAnsi(withoutEchoingCauses(report), { cwd: options.cwd });
}
/** Print a report to the terminal, falling back to the raw error when it cannot be rendered. */
async function printErrorReport(report, options) {
	const label = options.request ? ` [${options.request.method}] ${options.request.url.href}` : "";
	const rendered = await renderErrorAnsi(report, { cwd: options.cwd }).catch(() => void 0);
	if (rendered) console.log(`[request error]${label}\n\n${rendered}`);
	else console.error(`[request error]${label}\n\n`, options.error ?? report.message);
}
/**
* Build the reporter a builder hands the renderer as `onDevError`. The report is built on the
* stack as raised, so this must run before anything rewrites it.
*/
function createDevErrorReporter(options) {
	return async function observeDevError(error, event, observe = {}) {
		const request = event && options.requestInfo(event);
		const report = observe.expected ? void 0 : await options.createReport(error, event).catch(() => void 0);
		options.mapStack?.(error);
		if (!report) return;
		if (observe.publish !== false) await publishErrorReport$1(report, request).catch(() => {});
		if (observe.print !== false && !isForwarding()) await printErrorReport(report, {
			cwd: options.cwd,
			error,
			request
		});
		const requestId = requestIdOf(request);
		return {
			report,
			overlay: (html) => withErrorOverlay(html, report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId,
				startMinimized: true
			}),
			page: () => renderErrorPage(report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId
			})
		};
	};
}
/** A line of a code frame, as a compiler embeds one in a message. */
const FRAME_LINE_RE = /^[^\S\n]*(?:\d+[^\S\n]*[|:│]|[|│][^\S\n]*\^|\^)/m;
/**
* Drop causes that only repeat the report's own message, so the failure is read once. A
* wrapper is only dropped when all it adds is the code frame the report shows as a snippet.
*/
function withoutEchoingCauses(report) {
	const causes = report.causes.filter((cause) => !echoesMessage(cause.message, report.message)).map(withoutEchoingCauses);
	return causes.length === report.causes.length ? report : {
		...report,
		causes
	};
}
function echoesMessage(candidate, message) {
	if (candidate === message) return true;
	if (!candidate.startsWith(message)) return false;
	const remainder = candidate.slice(message.length);
	return remainder.trim() === "" || FRAME_LINE_RE.test(remainder);
}
/**
* Rewrite the module ids a transform failure names, and those of its causes, with
* `resolve`. A bundler names the module it was serving, which is not always a path.
*/
function resolveErrorPaths(error, resolve, seen = /* @__PURE__ */ new Set()) {
	if (typeof error !== "object" || error === null || seen.has(error)) return;
	seen.add(error);
	const candidate = error;
	if (typeof candidate.id === "string") candidate.id = resolve(candidate.id);
	if (candidate.loc && typeof candidate.loc.file === "string") candidate.loc.file = resolve(candidate.loc.file);
	resolveErrorPaths(candidate.cause, resolve, seen);
	if (Array.isArray(candidate.errors)) for (const nested of candidate.errors) resolveErrorPaths(nested, resolve, seen);
}
/** Flatten an error's `cause` chain into something the payload can carry. */
function serializeErrorCause(cause, depth = 0, seen = /* @__PURE__ */ new WeakSet()) {
	if (depth >= 10 || cause instanceof Error && seen.has(cause)) return;
	if (cause instanceof Error) {
		seen.add(cause);
		const nestedCause = serializeErrorCause(cause.cause, depth + 1, seen);
		return {
			name: cause.name,
			message: cause.message,
			...cause.stack && { stack: cause.stack },
			...nestedCause !== void 0 && { cause: nestedCause }
		};
	}
	if (cause === null || typeof cause === "string" || typeof cause === "number" || typeof cause === "boolean") return cause;
}

const NUXT_ERROR_CHANNEL = "/__nuxt_dev__/error";

//#region src/runtime/utils/error-channel.ts
const ERROR_CHANNEL_ENV = ERROR_CHANNEL_ENV$1;
const ERROR_CHANNEL_BROADCAST = ERROR_CHANNEL_BROADCAST$1;
/** Whether reports should be forwarded to the dev server that set {@link ERROR_CHANNEL_ENV}. */
function shouldForwardReports(env = process$1.env, mainThread = isMainThread) {
	return !!env[ERROR_CHANNEL_ENV] && !mainThread;
}
/** Base path pages should subscribe to. */
function getErrorChannelPath() {
	return process$1.env[ERROR_CHANNEL_ENV] || joinURL(useRuntimeConfig().app.baseURL, NUXT_ERROR_CHANNEL);
}
setErrorChannelForwarding(() => shouldForwardReports());
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel() {
	return useErrorChannel$1();
}
/** Publish a report as the current error, paired with the request it came from. */
function publishErrorReport(report, event) {
	return publishErrorReport$1(report, event && {
		method: event.method,
		url: getRequestURL(event),
		headers: event.headers
	});
}
/**
* Build a report for an error raised while rendering. Must run on the stack as it was
* raised, since frames are mapped through the SSR bundle's sourcemaps.
*/
function createErrorReport(error, event) {
	resolveErrorPaths(error, resolveTransformPath);
	const ssrSourceMaps = useNitroApp().ssrSourceMaps;
	return createErrorReport$1(error, {
		cwd: rootDir,
		loaders: ssrSourceMaps ? [compiledPositionLoader(ssrSourceMaps)] : [],
		context: { event }
	});
}
/**
* Resolve a bundler module id such as `/app.vue`, which reads as an absolute path but is
* relative to the environment root, to a file the developer can open.
*/
function resolveTransformPath(path) {
	const query = path.indexOf("?");
	const file = query === -1 ? path : path.slice(0, query);
	if (!file.startsWith("/") || existsSync(file)) return path;
	for (const root of [srcDir, rootDir]) {
		const resolved = join(root, file);
		if (existsSync(resolved)) return query === -1 ? resolved : resolved + path.slice(query);
	}
	return path;
}
/**
* Recover the generated position of frames the runner has already mapped. A frame mapped
* to its module but not to a line in it points at generated code, so counts as a vendor frame.
*/
function compiledPositionLoader(ssrSourceMaps) {
	return {
		name: "nuxt-compiled-position",
		map(frame) {
			if (!frame.file || frame.line === void 0 || frame.compiled) return;
			const compiled = ssrSourceMaps.getCompiledPosition?.(frame.file, frame.line, frame.column);
			if (compiled) return {
				...frame,
				compiled
			};
			return ssrSourceMaps.getCode(frame.file) !== void 0 && frame.line > lineCount(frame.file) ? {
				...frame,
				type: "vendor"
			} : void 0;
		},
		readCompiled: (file) => ssrSourceMaps.getCode(file)
	};
}
function lineCount(file) {
	try {
		return readFileSync(file, "utf8").split("\n").length;
	} catch {
		return Number.POSITIVE_INFINITY;
	}
}
/** Report an error raised while serving a request. */
const observeDevError = createDevErrorReporter({
	cwd: rootDir,
	channel: getErrorChannelPath,
	createReport: (error, event) => createErrorReport(error, event),
	requestInfo: (event) => ({
		method: event.method,
		url: getRequestURL(event),
		headers: event.headers
	})
});

//#region src/runtime/plugins/dev-errors.ts
/** Opens the error channel before anything requests a page. */
var dev_errors_default = (_nitroApp) => {
	useErrorChannel().catch(() => {});
	streamLogsToChannel();
};
/** Mirror what the server logs onto the error channel. */
function streamLogsToChannel() {
	let publishing = false;
	consola$1.addReporter({ log(logObject) {
		if (publishing) return;
		publishing = true;
		try {
			publishDevLog(toLogEntry(logObject)).catch(() => {});
		} finally {
			publishing = false;
		}
	} });
}
function toLogEntry(logObject) {
	const args = logObject.args ?? [];
	const message = formatWithOptions({
		colors: false,
		depth: 2
	}, ...args);
	return {
		level: toLogLevel(logObject),
		text: logObject.tag ? `[${logObject.tag}] ${message}` : message,
		timestamp: logObject.date ? new Date(logObject.date).getTime() : void 0
	};
}
const LOG_LEVELS = {
	trace: "trace",
	debug: "debug",
	verbose: "debug",
	info: "info",
	log: "log",
	warn: "warn",
	error: "error",
	fail: "error",
	fatal: "fatal"
};
/** Fallback for consola types whose names say nothing about severity. */
const LOG_LEVELS_BY_SEVERITY = [
	"error",
	"warn",
	"log",
	"info",
	"debug",
	"trace"
];
function toLogLevel(logObject) {
	if (LOG_LEVELS[logObject.type]) return LOG_LEVELS[logObject.type];
	const severity = Math.round(logObject.level);
	return LOG_LEVELS_BY_SEVERITY[Math.max(0, Math.min(severity, LOG_LEVELS_BY_SEVERITY.length - 1))] ?? "log";
}

const plugins = [
  _wjGcSR4VD_S6fdgksyiYvbeA9B2aTV09duvc49V9K0,
dev_server_logs_default,
_UgJGBQudbbQ8iJzVSV3CKgA1siSZ88YGJS8KylWo4,
_9AULvJaw85vUwQhXe4hyvmF1JhnEyBw53IAVpHwwKU,
_gtDdjcQqFSva_K_6weR35jIUvFlb6q7chRmKX04KY,
dev_errors_default,
_Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU
];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3790a-E7J2FhBml+tpLiNtiIDqouE51z0\"",
    "mtime": "2026-10-14T10:56:08.539Z",
    "size": 227594,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"c67bb-boNjBqlPkXZld/6RPn+XSB5J3n4\"",
    "mtime": "2026-10-14T10:56:08.539Z",
    "size": 812987,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _sdI24c = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const logger = pino({
  level: "debug" ,
  serializers: {
    req: (request) => {
      var _a;
      return {
        method: request.method,
        url: (_a = request.url) == null ? void 0 : _a.split("?")[0],
        remoteAddress: request.socket.remoteAddress
      };
    },
    res: (response) => ({
      statusCode: response.statusCode
    }),
    err: (error) => ({ type: error.name, message: error.message, stack: error.stack }) 
  }
});
const httpLogger = pinoHttp({
  logger,
  customLogLevel: (_request, response, error) => {
    if (error || response.statusCode >= 500) return "error";
    if (response.statusCode >= 400) return "warn";
    return "debug" ;
  }
});
const _CjyNY4 = defineEventHandler((event) => {
  httpLogger(event.node.req, event.node.res, () => {
  });
});

const options = {"iconifyApiEndpoint":"https://api.iconify.design"};

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
function getInstallCommand(pkg) {
  const ua = process.env.npm_config_user_agent || "";
  if (ua.startsWith("pnpm")) return `pnpm add -D ${pkg}`;
  if (ua.startsWith("yarn")) return `yarn add -D ${pkg}`;
  if (ua.startsWith("bun")) return `bun add -D ${pkg}`;
  return `npm i -D ${pkg}`;
}
const _TZuEMO = defineCachedEventHandler(async (event) => {
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName && Object.hasOwn(collections, collectionName) ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint;
  const icons = String(parseQuery(parsePath(event.path).search).icons || "").split(",");
  if (!collectionName) return createError({ status: 400, message: "No collection specified" });
  if (!icons.length) return createError({ status: 400, message: "No icons specified" });
  if (!collection && true && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
    consola$1.warn([
      `[Icon] Collection \`${collectionName}\` is not found locally`,
      `We suggest to install it via \`${getInstallCommand(`@iconify-json/${collectionName}`)}\` to provide the best end-user experience.`
    ].join("\n"));
    warnOnceSet.add(collectionName);
  }
  if (collection) {
    const data = getIcons(
      collection,
      icons
    );
    consola$1.debug(`[Icon] serving ${icons.map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
    return data;
  }
  {
    const apiUrl = new URL(`./${collectionName}.json?icons=${icons.join(",")}`, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${icons.map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        return response.status === 404 ? createError({ status: 404 }) : createError({ status: 500, message: "Failed to fetch fallback icon" });
      }
      return response.json();
    } catch (e) {
      consola$1.error(e);
      return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(parseQuery(parsePath(event.path).search).icons || "").split(",");
    return `${collection}_${icons[0]}_${icons.length}_${hash$1(icons.join(","))}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await ctx.loadMessages(locale);
  {
    for (const k of Object.keys(messages)) {
      warnMissedMessageFunctions(k, messages[k]);
    }
  }
  return messages;
});
const getCacheKey = (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-");
async function shouldBypassCache(event) {
  const locale = getRouterParam(event, "locale");
  if (locale == null) {
    return false;
  }
  const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
  return !ctx.localeConfigs?.[locale]?.cacheable;
}
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: getCacheKey,
  shouldBypassCache
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: getCacheKey,
  shouldBypassCache
});
const _1NpErm = _messagesHandler ;

//#region ../nuxt/src/app/island-hash.ts
/**
* Strip Vue scoped-style attributes (`data-v-*`) from island props before hashing
* or rendering. Scoped-id markers leak in from parent components and are not part
* of the logical island input.
*
* Used before island props are serialized and sent to the island handler.
*
* @internal
*/
function filterIslandProps(props) {
	if (!props) return {};
	const out = {};
	for (const key in props) if (!key.startsWith("data-v-")) out[key] = props[key];
	return out;
}
/**
* Compute the `hashId` segment embedded in an island URL (`/__nuxt_island/<Name>_<hashId>.json`).
*
* The hash binds the response to the requested `(name, props, context, source)` tuple, so the
* server can reject requests whose URL hash does not match the supplied query/body. Use this
* from island clients if you need to ensure a hash stays in step with Nuxt's implementation.
*
* `props` may be passed either as the raw props object or as the JSON string that will be sent
* over the wire; the two produce the same hash when the round-trip is identity.
*
* @since 4.5.0
*/
function getIslandHash(input) {
	const props = typeof input.props === "string" ? parseSerializedProps(input.props) : input.props ?? {};
	return hash$1([
		input.name,
		props,
		input.context ?? {},
		input.source
	]).replace(/[-_]/g, "");
}
function parseSerializedProps(serializedProps) {
	try {
		return JSON.parse(serializedProps);
	} catch {
		return serializedProps;
	}
}

//#region src/runtime/utils/island-props.ts
/** @internal */
const MAX_ISLAND_BODY_BYTES = 65536;
/**
* Whether the bracket nesting of a JSON-ish string exceeds `maxDepth`, in a single linear
* pass. Brackets inside string values are ignored.
*
* @internal
*/
function exceedsMaxDepth(raw, maxDepth = 64) {
	let depth = 0;
	let inString = false;
	let escaped = false;
	for (let i = 0; i < raw.length; i++) {
		const ch = raw[i];
		if (inString) {
			if (escaped) escaped = false;
			else if (ch === "\\") escaped = true;
			else if (ch === "\"") inString = false;
			continue;
		}
		if (ch === "\"") inString = true;
		else if (ch === "{" || ch === "[") {
			if (++depth > maxDepth) return true;
		} else if (ch === "}" || ch === "]") {
			if (depth > 0) depth--;
		}
	}
	return false;
}
/** @internal */
function exceedsMaxBytes(raw, maxBytes = MAX_ISLAND_BODY_BYTES) {
	return Buffer.byteLength(raw, "utf8") > maxBytes;
}

//#region src/runtime/utils/response.ts
/**
* The response the renderer builds, keeping its body as the renderer produced it.
*
* A real `Response` turns every body into a `ReadableStream`, which would send a rendered
* document as a chunked stream where nitro sends the string it was given. The renderer only
* reads the fields below back, so this describes just those.
*/
var NodeRenderResponse = class {
	body;
	status;
	statusText;
	headers;
	constructor(body, init) {
		this.body = body;
		this.status = init?.status || 200;
		this.statusText = init?.statusText || "";
		this.headers = init?.headers instanceof Headers ? init.headers : new Headers(init?.headers);
	}
};

//#region src/runtime/server/renderer/cache.ts
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) res = fn().catch((err) => {
			res = null;
			throw err;
		});
		return res;
	};
}

//#region src/runtime/server/renderer/diagnostics.ts
const ansi = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors = {
	red: ansi(31, 39),
	yellow: ansi(33, 39),
	cyan: ansi(36, 39),
	gray: ansi(90, 39),
	bold: ansi(1, 22),
	dim: ansi(2, 22)
};
/**
* E8xxx
* SSR rendering diagnostics, sharing the range with the server runtime that
* hosts the renderer.
*/
const docsBase = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const rendererDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors) } )],
	codes: {
		NUXT_E8001: {
			why: (p) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${p.path}\`). These fields are silently dropped because the body is about to stream.`,
			fix: "Use the `render:html:close` hook instead.",
			docs: false
		},
		NUXT_E8002: {
			why: (p) => `SSR streaming committed the response before render completed (\`${p.path}\`). The following mutations did not reach the client and were dropped:\n  - ${p.mutations}`,
			fix: (p) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${p.path}': { streaming: false } }\` or the \`render:route\` hook.`,
			docs: false
		},
		NUXT_E8004: {
			why: "The server bundle is not available.",
			fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.",
			docs: false
		},
		NUXT_E8006: {
			why: (p) => `The payload for \`${p.path}\` is ${p.size}, which will increase the page size and slow down hydration.${p.keys ? ` Largest payload keys:\n  - ${p.keys}` : ""}`,
			fix: "Use the `pick` or `transform` options of `useAsyncData`/`useFetch` to strip out data the client does not need.",
			docs: false
		},
		NUXT_E8007: {
			why: (p) => `\`${p.path}\` relies on client-side JavaScript, but \`features.noScripts: 'production'\` will strip scripts from this route in production:\n  - ${p.reasons}`,
			fix: "Remove the client-side dependency from this route, or scope script stripping with the `noScripts` route rule instead of enabling it globally."
		},
		NUXT_E8009: {
			why: (p) => `A page error interrupted the stream for \`${p.path}\`, and ${p.what} also failed while rendering the error response.\n  ${p.cause}`,
			fix: "Fix the page error first. If it keeps happening, report the failure below - the browser will show a blank or partial page instead of the error page."
		}
	}
});

//#region src/runtime/server/renderer/build-files.ts
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => Promise.resolve().then(function () { return entry; }).then((r) => r.default || r);
const getClientManifest = () => Promise.resolve().then(function () { return manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
/** Load the build artifacts for a set of renderer options, caching each of them on the returned object. */
function createBuildFiles(options) {
	const buildAssetsURL = (...path) => options.buildAssetsURL(...path);
	const getSSRRenderer = lazyCachedFunction(async () => {
		const createSSRApp = await getServerEntry();
		if (!createSSRApp) throw rendererDiagnostics.NUXT_E8004();
		const precomputed = void 0 ;
		const renderer = createRenderer(createSSRApp, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString: renderToString$1,
			buildAssetsURL
		});
		async function renderToString$1(input, context) {
			const html = await renderToString(input, context);
			if (process.env.NUXT_VITE_NODE_OPTIONS) renderer.rendererContext.updateManifest(await getClientManifest());
			return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
		}
		return renderer;
	});
	const getSPARenderer = lazyCachedFunction(async () => {
		const precomputed = void 0 ;
		const template = renderSPATemplate();
		const renderer = createRenderer(() => () => {}, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString: () => template,
			buildAssetsURL
		});
		const result = await renderer.renderToString({});
		const renderToString = (ssrContext) => {
			const config = ssrContext.runtimeConfig;
			ssrContext.modules ||= /* @__PURE__ */ new Set();
			ssrContext.payload.serverRendered = false;
			ssrContext.config = {
				public: config.public,
				app: config.app
			};
			return Promise.resolve(result);
		};
		return {
			rendererContext: renderer.rendererContext,
			renderToString
		};
	});
	return {
		getRenderer: (ssrContext) => ssrContext.noSSR ? getSPARenderer() : getSSRRenderer(),
		getSSRRenderer,
		getServerApp: lazyCachedFunction(getServerEntry)
	};
}
function renderSPATemplate() {
	{
		`<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
		return APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG + ("");
	}
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

//#region src/runtime/server/renderer/instance.ts
/**
* Create the renderer state for a set of options.
*
* Called by `createNuxtRenderer()`; call it directly only to render against the same
* artifacts as a renderer created elsewhere (an island handler sharing the server bundle
* loaded for page renders), and pass the result to `createNuxtRenderer()`.
*/
function createRendererInstance(options) {
	return {
		options,
		...createBuildFiles(options)
	};
}

//#region src/runtime/server/renderer/runtime.ts
/** The event to pass to application code and to the render hooks. */
function appEvent(event) {
	return event["~app"] ?? event;
}
function getRequestState(event) {
	return event.context.nuxt;
}

//#region src/runtime/utils/renderer/options.ts
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
/** The capabilities a nitropack v2 host provides to the Nuxt renderer. */
const rendererOptions = {
	runtimeConfig: (event) => useRuntimeConfig(appEvent(event)),
	buildAssetsURL,
	publicAssetsURL,
	getRouteRules: (event) => getRouteRules(appEvent(event)),
	hooks: () => useNitroApp().hooks,
	createResponse: (body, init) => new NodeRenderResponse(body, init),
	createError: (init) => createError({
		statusCode: init.status,
		statusMessage: init.statusText,
		message: init.statusText,
		data: init.data
	}),
	writeEarlyHints: (event, hints) => writeEarlyHints(appEvent(event), hints.link),
	onRenderSuccess: () => {
		Promise.resolve().then(function () { return errorChannel$1; }).then(({ clearErrorReport }) => clearErrorReport()).catch(() => {});
	} ,
	prerender: void 0
};
rendererOptions.onDevError = (error, event, options) => Promise.resolve().then(function () { return errorChannel$1; }).then(({ observeDevError }) => observeDevError(error, appEvent(event), options));
/**
* The renderer the page and island handlers share, so that both render against a single
* load of the server bundle and its manifest.
*/
const rendererInstance = createRendererInstance(rendererOptions);

//#region src/runtime/server/renderer/url.ts
/**
* The fragment of a request URL, avoiding the lazy URL parse that reading `hash` triggers when
* there is none. A fragment is never sent over the wire, so it can only appear on a URL the
* server constructed itself.
*/
function urlHash(url) {
	return url.href.includes("#") ? url.hash : "";
}
const PAYLOAD_BUILD_ID_PARAM = "_b";
/** Parse a request path without treating a leading `//` as an authority. */
function parseRequestPath(path) {
	return new URL("http://localhost" + path);
}
/** The page route a `_payload.json` (or `_payload.js`) request renders, without the build id param. */
function payloadRequestToRoute(path, filename = "_payload.json") {
	const payloadURL = parseRequestPath(path);
	const url = payloadURL.pathname.slice(0, -`/${filename}`.length) || "/";
	payloadURL.searchParams.delete(PAYLOAD_BUILD_ID_PARAM);
	return url + payloadURL.search;
}
const LEADING_SLASHES_RE = /^\/+/;
const TRAILING_SLASHES_RE = /\/*$/;
/** The same-origin `_payload.json` (or `_payload.js`) URL for a page route, tagged with the build id. */
function routeToPayloadURL(baseURL, path, buildId, filename = "_payload.json") {
	const request = parseRequestPath(path);
	const base = new URL(baseURL.replace(TRAILING_SLASHES_RE, "/"), "http://localhost");
	const route = request.pathname.replace(LEADING_SLASHES_RE, "").replace(TRAILING_SLASHES_RE, "/");
	const url = new URL("./" + (route === "/" ? "" : route) + filename, base);
	url.search = request.search;
	url.searchParams.set(PAYLOAD_BUILD_ID_PARAM, buildId);
	return URL.canParse(baseURL) ? url.href : url.pathname + url.search;
}
/** `url` with its path and query replaced by those of the request path `path`, keeping its origin. */
function withRequestPath(url, path) {
	const request = parseRequestPath(path);
	const target = new URL(url);
	target.pathname = request.pathname;
	target.search = request.search;
	return target;
}

//#region src/runtime/server/renderer/app.ts
new Set(NUXT_PRERENDER_NO_SSR_ROUTES);
function createServerHead() {
	return createHead(unheadOptions);
}
function createSSRContext(options, event) {
	const url = event.url.pathname + event.url.search + urlHash(event.url);
	const ssrContext = {
		url,
		event: appEvent(event),
		runtimeConfig: options.runtimeConfig(event),
		noSSR: getRequestState(event)?.noSSR || (false),
		head: createServerHead(),
		error: false,
		nuxt: void 0,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: /* @__PURE__ */ new Set()
	};
	return ssrContext;
}
/**
* Turn the response the renderer assembled into a web-standard `Response`, carrying the
* headers queued on the event alongside the ones the response names for itself.
*/
function returnRenderResponse(options, event, response) {
	const headers = new Headers(event.res.headers);
	for (const name in response.headers) headers.set(name, response.headers[name]);
	return options.createResponse(response.body ?? null, {
		status: response.statusCode ?? event.res.status,
		statusText: response.statusMessage ?? event.res.statusText,
		headers
	});
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

//#region src/runtime/server/renderer/inline-styles.ts
async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = /* @__PURE__ */ new Set();
	const promises = [];
	for (const mod of usedModules) if (mod in styleMap && styleMap[mod]) promises.push(styleMap[mod]());
	for (const styles of await Promise.all(promises)) for (const style of styles) inlinedStyles.add(style);
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

//#region src/runtime/server/renderer/islands.ts
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	return body.match(ROOT_NODE_REGEX)?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) return;
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) response[name] = {
		...slot,
		fallback: ssrContext.teleports?.[`island-fallback=${name}`]
	};
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) return;
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		let html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		if (!html && ssrContext.teleports) for (const [key, value] of Object.entries(ssrContext.teleports)) {
			const [, , componentUid] = key.match(SSR_CLIENT_TELEPORT_MARKER) ?? [];
			if (componentUid === clientUid) {
				html = value.replaceAll("<!--teleport start anchor-->", "");
				break;
			}
		}
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) continue;
			slots[slot] = value;
		}
	}
	return slots;
}
const ISLAND_TELEPORT_ANCHOR_RE = / data-island-uid="([^"]*)" data-island-(component|slot)="([^"]*)"[^>]*>/g;
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) return html;
	const contentsByAnchor = /* @__PURE__ */ new Map();
	const uids = /* @__PURE__ */ new Set();
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) continue;
			contentsByAnchor.set(`${uid};component;${clientId}`, teleports[key]);
			uids.add(uid);
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) continue;
			contentsByAnchor.set(`${uid};slot;${slot}`, teleports[key]);
			uids.add(uid);
		}
	}
	if (!contentsByAnchor.size) return html;
	const stitch = (html) => {
		const anchorRE = new RegExp(ISLAND_TELEPORT_ANCHOR_RE);
		let out = "";
		let cursor = 0;
		let m;
		while (contentsByAnchor.size && (m = anchorRE.exec(html))) {
			if (!uids.has(m[1])) continue;
			const anchor = `${m[1]};${m[2]};${m[3]}`;
			const content = contentsByAnchor.get(anchor);
			if (content === void 0) continue;
			contentsByAnchor.delete(anchor);
			const end = m.index + m[0].length;
			out += html.slice(cursor, end) + stitch(content);
			cursor = end;
		}
		return cursor ? out + html.slice(cursor) : html;
	};
	return stitch(html);
}

//#region src/runtime/server/renderer/dev-css.ts
const QUERY_RE = /\?.*$/;
const LEADING_RELATIVE_RE = /^(?:\.\.?\/)+/;
/**
* Whether a dev stylesheet belongs to one of the modules a render actually used.
*
* The dev CSS set is the builder's whole module graph, not a per-request subset, so
* consumers that must not leak unrelated styles (islands) narrow it with the modules
* Vue registered during their own render.
*/
function isStyleOfModule(file, modules) {
	const path = file.replace(QUERY_RE, "");
	for (const mod of modules) {
		const normalized = mod.replace(LEADING_RELATIVE_RE, "");
		if (normalized && (path === normalized || path.endsWith("/" + normalized))) return true;
	}
	return false;
}

//#region src/runtime/handlers/island.ts
const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	return toResponse(event, await renderIsland(event));
});
function toResponse(event, result) {
	return "raw" in result ? returnIslandResponse(event, result.raw) : result;
}
async function renderIsland(event) {
	const nitroApp = useNitroApp();
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(rendererInstance.options, toRequestEvent(event)),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	const renderer = await rendererInstance.getSSRRenderer();
	const renderResult = await (renderer.renderToString(ssrContext)).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") return {};
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) throw createError({
			statusCode: response.statusCode,
			statusMessage: response.statusMessage
		});
		return { raw: response };
	}
	if (ssrContext.payload?.error) throw ssrContext.payload.error;
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		const modules = ssrContext.modules ?? [];
		for (const resource of Object.values(styles)) {
			if ("inline" in getQuery(resource.file)) continue;
			if (isStyleOfModule(resource.file, modules)) link.push({
				rel: "stylesheet",
				href: renderer.rendererContext.buildAssetsURL(resource.file),
				crossorigin: ""
			});
		}
		if (link.length) ssrContext.head.push({ link });
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) for (const [key, value] of Object.entries(walkResolver(entry.input, VueResolver))) {
		const currentValue = islandHead[key];
		if (Array.isArray(currentValue)) currentValue.push(...value);
		else islandHead[key] = value;
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
}
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) setResponseHeader(event, header, response.headers[header]);
	if (response.statusCode) setResponseStatus(event, response.statusCode, response.statusMessage);
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function drainBody(event) {
	const stream = getRequestWebStream(event);
	if (!stream) return;
	const reader = stream.getReader();
	try {
		for (;;) {
			const { done } = await reader.read();
			if (done) break;
		}
	} finally {
		reader.releaseLock();
	}
}
async function readGuardedIslandBody(event) {
	const contentLength = Number(getRequestHeader(event, "content-length"));
	if (contentLength > 65536) {
		if (contentLength <= 4194304) await drainBody(event);
		throw createError({
			statusCode: 413,
			statusMessage: "Island request body too large"
		});
	}
	let received = 0;
	let raw = "";
	let overflowed = false;
	const stream = getRequestWebStream(event);
	if (stream) {
		const decoder = new TextDecoder();
		const reader = stream.getReader();
		try {
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				received += value.byteLength;
				if (received > 65536) {
					overflowed = true;
					continue;
				}
				raw += decoder.decode(value, { stream: true });
			}
		} finally {
			reader.releaseLock();
		}
		raw += decoder.decode();
	}
	if (overflowed) throw createError({
		statusCode: 413,
		statusMessage: "Island request body too large"
	});
	if (!raw) return {};
	if (exceedsMaxDepth(raw)) throw createError({
		statusCode: 400,
		statusMessage: "Island request body too deeply nested"
	});
	return destr$1(raw) || {};
}
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request path"
	});
	const componentParts = url.substring(15).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island component name"
	});
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readGuardedIslandBody(event);
	const serializedProps = typeof rawContext?.props === "string" ? rawContext.props : "{}";
	if (exceedsMaxBytes(serializedProps)) throw createError({
		statusCode: 413,
		statusMessage: "Island request props too large"
	});
	if (exceedsMaxDepth(serializedProps)) throw createError({
		statusCode: 400,
		statusMessage: "Island request props too deeply nested"
	});
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) if (key !== "props") clientContext[key] = rawContext[key];
	}
	const parsed = destr$1(serializedProps);
	if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request props"
	});
	const parsedProps = filterIslandProps(parsed);
	const expectedHash = getIslandHash({
		name: componentName,
		props: parsedProps,
		context: clientContext
	});
	if (!hashId || hashId !== expectedHash) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request hash"
	});
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: parsedProps,
		slots: {},
		components: {}
	};
}

const _lazy_nA47Dh = () => Promise.resolve().then(function () { return materials_get$3; });
const _lazy_SG5KxB = () => Promise.resolve().then(function () { return materials_post$1; });
const _lazy_bL9hl5 = () => Promise.resolve().then(function () { return overview_get$1; });
const _lazy_ghsDwI = () => Promise.resolve().then(function () { return participants_get$1; });
const _lazy_xHwAFH = () => Promise.resolve().then(function () { return _id__get$5; });
const _lazy_QVbl8L = () => Promise.resolve().then(function () { return questions_get$3; });
const _lazy_w3ojYi = () => Promise.resolve().then(function () { return questions_post$1; });
const _lazy_jWP97Y = () => Promise.resolve().then(function () { return quizzes_get$3; });
const _lazy_svs6UF = () => Promise.resolve().then(function () { return quizzes_post$1; });
const _lazy_H2QSv0 = () => Promise.resolve().then(function () { return results_get$1; });
const _lazy_qyQVbN = () => Promise.resolve().then(function () { return materials_get$1; });
const _lazy_CMRrLQ = () => Promise.resolve().then(function () { return questions_get$1; });
const _lazy_IishyB = () => Promise.resolve().then(function () { return attempts_get$1; });
const _lazy_teP23v = () => Promise.resolve().then(function () { return _id__post$1; });
const _lazy_w_0_Fm = () => Promise.resolve().then(function () { return progress_get$1; });
const _lazy_oMmV2o = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_EF2XGJ = () => Promise.resolve().then(function () { return submit_post$3; });
const _lazy_GisIVP = () => Promise.resolve().then(function () { return quizzes_get$1; });
const _lazy_oDlP90 = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_DWXYfd = () => Promise.resolve().then(function () { return submit_post$1; });
const _lazy_te3_Qq = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_iXQ1WW = () => Promise.resolve().then(function () { return errorChannel; });

const handlers = [
  { route: '', handler: _sdI24c, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _CjyNY4, lazy: false, middleware: true, method: undefined },
  { route: '/api/admin/materials', handler: _lazy_nA47Dh, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/materials', handler: _lazy_SG5KxB, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/overview', handler: _lazy_bL9hl5, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/participants', handler: _lazy_ghsDwI, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/participants/:id', handler: _lazy_xHwAFH, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/questions', handler: _lazy_QVbl8L, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/questions', handler: _lazy_w3ojYi, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/quizzes', handler: _lazy_jWP97Y, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/quizzes', handler: _lazy_svs6UF, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/results', handler: _lazy_H2QSv0, lazy: true, middleware: false, method: "get" },
  { route: '/api/course/:courseId/module/:moduleId/materials', handler: _lazy_qyQVbN, lazy: true, middleware: false, method: "get" },
  { route: '/api/course/:courseId/module/:moduleId/questions', handler: _lazy_CMRrLQ, lazy: true, middleware: false, method: "get" },
  { route: '/api/marker/attempts', handler: _lazy_IishyB, lazy: true, middleware: false, method: "get" },
  { route: '/api/marker/attempts/:id', handler: _lazy_teP23v, lazy: true, middleware: false, method: "post" },
  { route: '/api/progress', handler: _lazy_w_0_Fm, lazy: true, middleware: false, method: "get" },
  { route: '/api/quiz/attempt/:id', handler: _lazy_oMmV2o, lazy: true, middleware: false, method: "get" },
  { route: '/api/quiz/submit', handler: _lazy_EF2XGJ, lazy: true, middleware: false, method: "post" },
  { route: '/api/quizzes', handler: _lazy_GisIVP, lazy: true, middleware: false, method: "get" },
  { route: '/api/quizzes/:id', handler: _lazy_oDlP90, lazy: true, middleware: false, method: "get" },
  { route: '/api/quizzes/:id/submit', handler: _lazy_DWXYfd, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_te3_Qq, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_dev__/error/**', handler: _lazy_iXQ1WW, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _TZuEMO, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _1NpErm, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_te3_Qq, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_te3_Qq, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const errorChannel$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ERROR_CHANNEL_BROADCAST: ERROR_CHANNEL_BROADCAST,
  ERROR_CHANNEL_ENV: ERROR_CHANNEL_ENV,
  clearErrorReport: clearErrorReport,
  createErrorReport: createErrorReport,
  getErrorChannelPath: getErrorChannelPath,
  observeDevError: observeDevError,
  publishDevLog: publishDevLog,
  publishDevProgress: publishDevProgress,
  publishErrorReport: publishErrorReport,
  serializeErrorCause: serializeErrorCause,
  shouldForwardReports: shouldForwardReports,
  useErrorChannel: useErrorChannel
}, Symbol.toStringTag, { value: 'Module' }));

//#region src/runtime/server/renderer/error-template.ts
const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1,minimum-scale=1\" name=\"viewport\"><style>*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:\"\"}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[56px\\]{font-size:56px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-neutral-500{--un-text-opacity:1;color:rgb(115 115 115/var(--un-text-opacity))}.text-neutral-950{--un-text-opacity:1;color:rgb(10 10 10/var(--un-text-opacity))}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-neutral-950{--un-bg-opacity:1;background-color:rgb(10 10 10/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(width>=640px){.sm\\:text-\\[72px\\]{font-size:72px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-neutral-950 dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-neutral-950 tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-medium leading-none mb-4 sm:text-[72px] tabular-nums text-[56px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-md text-neutral-500\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const errorTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const entry = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const manifest = () => viteNodeFetch.getManifest();

const manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: manifest
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};
const inlinedCSS = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles,
  inlinedCSS: inlinedCSS
}, Symbol.toStringTag, { value: 'Module' }));

const courseId = "race-for-parliament";
const courseModules = [
  {
    id: 1,
    titleEn: "Civic Participation",
    titleSt: "Ho kenya letsoho seterekeng",
    descriptionEn: "Understand the democratic process, rights and responsibilities of citizens.",
    descriptionSt: "Utloisisa tshebetso ya demokrasi, ditokelo le maikarabelo a baahi.",
    material: [
      { titleEn: "What is democratic participation?", titleSt: "Ho kenya letsoho demokrasi ke eng?", bodyEn: "Civic participation is the active involvement of citizens in decisions, elections, policy processes and community development.", bodySt: "Ho kenya letsoho seterekeng ke ho nka karolo ka mafolofolo ho dipuisano, dikgethong, dipolotiking le ntshetsopele ya setjhaba." },
      { titleEn: "Rights and responsibilities", titleSt: "Ditokelo le maikarabelo", bodyEn: "Citizens have the right to vote, speak, organise and access information, while also carrying responsibilities to respect the law and participate responsibly.", bodySt: "Baahi ba na le tokelo ya ho khetha, ho bua, ho hlophisa le ho fumana tlhahisoleseding, mme hape ba na le maikarabelo a ho hlompha molao le ho nka karolo ka boikarabelo." }
    ],
    quiz: [
      { id: "m1q1", type: "single", promptEn: "Which basic action shows active citizenship?", promptSt: "Ke ketso efe ya motheo e bontshang botho ba setjhaba?", options: [{ value: "a", labelEn: "Voting in elections", labelSt: "Ho vouta dikgethong" }, { value: "b", labelEn: "Ignoring community issues", labelSt: "Ho hlokomoloha mathata a setjhaba" }, { value: "c", labelEn: "Avoiding public discussion", labelSt: "Ho qoba dipuisano tsa setjhaba" }] },
      { id: "m1q2", type: "truefalse", promptEn: "Citizens can participate by attending public consultations.", promptSt: "Baahi ba ka nka karolo ka ho ea lipuisanong tsa setjhaba.", options: [{ value: "true", labelEn: "True", labelSt: "Nnete" }, { value: "false", labelEn: "False", labelSt: "Nnete ha e joalo" }] },
      { id: "m1q3", type: "multiple", promptEn: "Choose the responsibilities of a citizen.", promptSt: "Kgetha maikarabelo a moahi.", options: [{ value: "respect-law", labelEn: "Respect the law", labelSt: "Ho hlompha molao" }, { value: "spread-hate", labelEn: "Spread hate speech", labelSt: "Ho jala puo ya lehloeo" }, { value: "vote", labelEn: "Vote when eligible", labelSt: "Ho vouta ha a loketse" }] }
    ]
  },
  {
    id: 2,
    titleEn: "Election Awareness",
    titleSt: "Tsebo ka dikgetho",
    descriptionEn: "Learn how elections work, voter rights, and accountability in local democracy.",
    descriptionSt: "Ithute hore dikgetho di sebetsa joang, ditokelo tsa bakhethi le boikarabelo demokrasi ya lehae.",
    material: [
      { titleEn: "Voter registration", titleSt: "Ho ingodisa ho khetha", bodyEn: "Voters must be registered and remain informed about election procedures and deadlines.", bodySt: "Bakhethi ba tlameha ho ingodisa mme ba be ba tsebe mekhoa le linako tsa dikgetho." },
      { titleEn: "Why accountability matters", titleSt: "Hobaneng boikarabelo bo le bohlokoa", bodyEn: "Elected leaders are accountable to citizens through regular reporting, public oversight and elections.", bodySt: "Baetapele ba khethiloeng ba ikarabella ho baahi ka tlaleho, tekolo ya setjhaba le dikgetho." }
    ],
    quiz: [
      { id: "m2q1", type: "single", promptEn: "What is one key requirement for voting?", promptSt: "Ke eng e leng tlhokahalo e le nngwe bakeng sa ho vouta?", options: [{ value: "be-registered", labelEn: "Be registered", labelSt: "Ho ingodisa" }, { value: "skip-education", labelEn: "Skip civic education", labelSt: "Ho tlolela thuto ya setjhaba" }, { value: "ignore-law", labelEn: "Ignore the law", labelSt: "Ho hlokomoloha molao" }] },
      { id: "m2q2", type: "truefalse", promptEn: "Elected officials are expected to be accountable to the public.", promptSt: "Baetapele ba khethiloeng ba lebelletsoe ho ikarabella ho setjhaba.", options: [{ value: "true", labelEn: "True", labelSt: "Nnete" }, { value: "false", labelEn: "False", labelSt: "Nnete ha e joal" }] }
    ]
  },
  {
    id: 3,
    titleEn: "Policy and Advocacy",
    titleSt: "Leano le boipiletso",
    descriptionEn: "Explore policy issues, advocacy tools and how citizens can influence decision making.",
    descriptionSt: "Hlahloba mathata a maano, disebediswa tsa boipiletso le kamoo baahi ba ka susumetsang ho etswa diqeto.",
    material: [
      { titleEn: "Forming a policy view", titleSt: "Ho theha pono ya leano", bodyEn: "Strong policy advocacy relies on evidence, data, lived experience and respectful communication.", bodySt: "Boipiletso ba maano bo it\u0161etlehile ka bopaki, datha, boiphihlelo le puisano e hlomphehang." },
      { titleEn: "Engaging stakeholders", titleSt: "Ho kenya letsoho ho ba amehang", bodyEn: "Citizens can build coalitions, participate in consultations, and present recommendations to leaders.", bodySt: "Baahi ba ka theha linthano, ba nka karolo dipuisanong le ho nehelana ka dikgololo ho baetapele." }
    ],
    quiz: [
      { id: "m3q1", type: "single", promptEn: "Which item strengthens advocacy?", promptSt: "Ke eng e matlafatsang boipiletso?", options: [{ value: "evidence", labelEn: "Evidence and facts", labelSt: "Bopaki le dintlha" }, { value: "silence", labelEn: "Silence", labelSt: "Khutsitseng" }, { value: "rumour", labelEn: "Rumours and fear", labelSt: "Metswalle e t\u0161osang" }] },
      { id: "m3q2", type: "multiple", promptEn: "Select effective advocacy actions.", promptSt: "Kgetha diketso tse sebetsang tsa boipiletso.", options: [{ value: "consultation", labelEn: "Attend consultations", labelSt: "Ho ea lipuisanong" }, { value: "petition", labelEn: "Submit a petition", labelSt: "Ho isa petishene" }, { value: "ignore", labelEn: "Ignore the issue", labelSt: "Ho hlokomoloha bothata" }] }
    ]
  },
  {
    id: 4,
    titleEn: "Leadership and Governance",
    titleSt: "Boetapele le puso",
    descriptionEn: "Understand how good governance supports fairness, service delivery and public trust.",
    descriptionSt: "Utloisisa hore puso e ntle e tshehetsa ho lekana, ho fana ka ditshebeletso le tumelo ya setjhaba.",
    material: [
      { titleEn: "Principles of good governance", titleSt: "Melao ya puso e ntle", bodyEn: "Good governance means transparency, accountability, participation, inclusion and rule-based decision making.", bodySt: "Puso e ntle e bolela ho hlaka, boikarabelo, ho nka karolo, ho kenyeletsa batho bohle le ho etsa diqeto ho latela molao." },
      { titleEn: "Public trust and service delivery", titleSt: "Tumelo ya setjhaba le ho fana ka ditshebeletso", bodyEn: "When institutions are transparent and responsive, citizens trust them and participate more meaningfully.", bodySt: "Ha ditheo di hlakile le di arabela, baahi ba di tshepa mme ba nka karolo ka mokhoa o tebileng." }
    ],
    quiz: [
      { id: "m4q1", type: "single", promptEn: "What is a governance principle?", promptSt: "Ke molawana ofe wa puso?", options: [{ value: "transparency", labelEn: "Transparency", labelSt: "Ho hlaka" }, { value: "silence", labelEn: "Silence", labelSt: "Khutsitseng" }, { value: "exclusion", labelEn: "Exclusion", labelSt: "Ho qheleha ka thoko" }] },
      { id: "m4q2", type: "truefalse", promptEn: "Public trust grows when institutions are open and responsive.", promptSt: "Tumelo ya setjhaba e hola ha ditheo di bulehile ebile di arabela.", options: [{ value: "true", labelEn: "True", labelSt: "Nnete" }, { value: "false", labelEn: "False", labelSt: "Nnete ha e joal" }] }
    ]
  }
];

const materials_get$2 = defineEventHandler(async (event) => {
  await requireAdminUser(event);
  const { db } = getFirebaseAdmin(event);
  const snapshot = await db.collection("courseMaterials").where("courseId", "==", courseId).get();
  return {
    materials: snapshot.docs.map((document) => {
      const material = document.data();
      return {
        id: document.id,
        moduleId: material.moduleId,
        titleEn: material.titleEn,
        titleSt: material.titleSt,
        bodyEn: material.bodyEn,
        bodySt: material.bodySt
      };
    })
  };
});

const materials_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: materials_get$2
}, Symbol.toStringTag, { value: 'Module' }));

function invalidMaterial() {
  throw createError({ statusCode: 400, statusMessage: "The course material is invalid." });
}
const materials_post = defineEventHandler(async (event) => {
  const user = await requireAdminUser(event);
  const body = await readBody(event);
  if (!body || typeof body !== "object") invalidMaterial();
  const { moduleId, titleEn, titleSt, bodyEn, bodySt } = body;
  if (typeof moduleId !== "number" || !Number.isInteger(moduleId) || !courseModules.some((module) => module.id === moduleId) || typeof titleEn !== "string" || titleEn.trim().length === 0 || titleEn.length > 200 || typeof titleSt !== "string" || titleSt.trim().length === 0 || titleSt.length > 200 || typeof bodyEn !== "string" || bodyEn.trim().length === 0 || bodyEn.length > 8e3 || typeof bodySt !== "string" || bodySt.trim().length === 0 || bodySt.length > 8e3) {
    invalidMaterial();
  }
  const { db } = getFirebaseAdmin(event);
  const materialRef = db.collection("courseMaterials").doc();
  await materialRef.create({
    courseId,
    moduleId,
    titleEn: titleEn.trim(),
    titleSt: titleSt.trim(),
    bodyEn: bodyEn.trim(),
    bodySt: bodySt.trim(),
    createdBy: user.uid,
    createdAt: FieldValue.serverTimestamp()
  });
  return { id: materialRef.id };
});

const materials_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: materials_post
}, Symbol.toStringTag, { value: 'Module' }));

const overview_get = defineEventHandler(async (event) => {
  await requireAdminUser(event);
  const { db } = getFirebaseAdmin(event);
  const usersCollection = db.collection("users");
  let cursor;
  let total = 0;
  let started = 0;
  let completed = 0;
  while (true) {
    let usersQuery = usersCollection.orderBy(FieldPath.documentId()).limit(100);
    if (cursor) usersQuery = usersQuery.startAfter(cursor);
    const profiles = await usersQuery.get();
    const participants = profiles.docs.filter((profile) => profile.get("role") === "participant");
    total += participants.length;
    const progressSnapshots = await Promise.all(participants.map((profile) => db.doc(`users/${profile.id}/courseProgress/${courseId}`).get()));
    for (const progress of progressSnapshots) {
      if (!progress.exists) continue;
      started += 1;
      const passedModules = progress.get("passedModules");
      if (Array.isArray(passedModules) && passedModules.includes(4)) completed += 1;
    }
    if (profiles.size < 100) break;
    cursor = profiles.docs[profiles.docs.length - 1];
  }
  const attempts = await db.collection("quizAttempts").orderBy("createdAt", "desc").limit(500).get();
  const scores = attempts.docs.map((doc) => Number(doc.data().score)).filter(Number.isFinite);
  return {
    totalParticipants: total,
    completed,
    inProgress: Math.max(0, started - completed),
    notStarted: Math.max(0, total - started),
    averageScore: scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : null
  };
});

const overview_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: overview_get
}, Symbol.toStringTag, { value: 'Module' }));

const participants_get = defineEventHandler(async (event) => {
  var _a, _b;
  await requireAdminUser(event);
  const { db } = getFirebaseAdmin(event);
  const query = getQuery$1(event);
  const cursorId = typeof query.cursor === "string" ? query.cursor : "";
  let cursor;
  if (cursorId) {
    if (!/^[A-Za-z0-9_-]{1,128}$/.test(cursorId)) {
      throw createError({ statusCode: 400, statusMessage: "The participant page cursor is invalid." });
    }
    const cursorSnapshot = await db.doc(`users/${cursorId}`).get();
    if (!cursorSnapshot.exists) {
      throw createError({ statusCode: 400, statusMessage: "The participant page cursor is no longer available." });
    }
    cursor = cursorSnapshot;
  }
  const page = [];
  while (page.length < 51) {
    let usersQuery = db.collection("users").orderBy(FieldPath.documentId()).limit(100);
    if (cursor) usersQuery = usersQuery.startAfter(cursor);
    const snapshot = await usersQuery.get();
    if (snapshot.empty) break;
    page.push(...snapshot.docs.filter((profile) => profile.get("role") === "participant"));
    cursor = snapshot.docs[snapshot.docs.length - 1];
    if (snapshot.size < 100) break;
  }
  const hasNextPage = page.length > 50;
  const participantsPage = page.slice(0, 50);
  const participants = await Promise.all(participantsPage.map(async (profile) => {
    var _a2, _b2, _c, _d;
    const progress = await db.doc(`users/${profile.id}/courseProgress/${courseId}`).get();
    const data = progress.data();
    const passedModules = Array.isArray(data == null ? void 0 : data.passedModules) ? data.passedModules : [];
    return {
      id: profile.id,
      displayName: (_a2 = profile.get("displayName")) != null ? _a2 : "",
      email: (_b2 = profile.get("email")) != null ? _b2 : "",
      organisation: (_c = profile.get("organisation")) != null ? _c : "",
      passedModules: passedModules.length,
      scores: (_d = data == null ? void 0 : data.scores) != null ? _d : {},
      status: passedModules.includes(4) ? "completed" : data ? "inProgress" : "notStarted"
    };
  }));
  return {
    participants,
    nextCursor: hasNextPage ? (_b = (_a = participantsPage[participantsPage.length - 1]) == null ? void 0 : _a.id) != null ? _b : null : null
  };
});

const participants_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: participants_get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get$4 = defineEventHandler(async (event) => {
  await requireAdminUser(event);
  const participantId = getRouterParam(event, "id");
  if (!participantId || !/^[A-Za-z0-9_-]{1,128}$/.test(participantId)) {
    throw createError({ statusCode: 400, statusMessage: "The participant ID is invalid." });
  }
  const { db } = getFirebaseAdmin(event);
  const profileRef = db.doc(`users/${participantId}`);
  const [profile, progress, attempts] = await Promise.all([
    profileRef.get(),
    db.doc(`users/${participantId}/courseProgress/race-for-parliament`).get(),
    db.collection("quizAttempts").where("uid", "==", participantId).orderBy("createdAt", "desc").limit(100).get()
  ]);
  if (!profile.exists || profile.get("role") !== "participant") {
    throw createError({ statusCode: 404, statusMessage: "Participant not found." });
  }
  return {
    profile: profile.data(),
    progress: progress.exists ? progress.data() : null,
    attempts: attempts.docs.map((attempt) => {
      var _a, _b, _c;
      const data = attempt.data();
      const createdAt = (_b = (_a = data.createdAt) == null ? void 0 : _a.toDate) == null ? void 0 : _b.call(_a);
      return { id: attempt.id, ...data, createdAt: (_c = createdAt == null ? void 0 : createdAt.toISOString()) != null ? _c : null };
    })
  };
});

const _id__get$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get$4
}, Symbol.toStringTag, { value: 'Module' }));

const questions_get$2 = defineEventHandler(async (event) => {
  await requireRole(event, ["admin"]);
  const { db } = getFirebaseAdmin(event);
  const snapshot = await db.collection("quizQuestions").where("courseId", "==", "race-for-parliament").get();
  return {
    questions: snapshot.docs.map((document) => {
      const question = document.data();
      return {
        id: document.id,
        moduleId: question.moduleId,
        type: question.type,
        promptEn: question.promptEn,
        promptSt: question.promptSt,
        options: question.options
      };
    })
  };
});

const questions_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: questions_get$2
}, Symbol.toStringTag, { value: 'Module' }));

function isRecord$1(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function invalidQuestion() {
  throw createError({ statusCode: 400, statusMessage: "The quiz question is invalid." });
}
const questions_post = defineEventHandler(async (event) => {
  const user = await requireRole(event, ["admin"]);
  const body = await readBody(event);
  if (!isRecord$1(body)) invalidQuestion();
  const { moduleId, type, promptEn, promptSt, options, correctAnswers } = body;
  if (typeof moduleId !== "number" || !Number.isInteger(moduleId) || !courseModules.some((module) => module.id === moduleId) || !["single", "multiple", "truefalse"].includes(String(type)) || typeof promptEn !== "string" || promptEn.trim().length === 0 || promptEn.length > 500 || typeof promptSt !== "string" || promptSt.trim().length === 0 || promptSt.length > 500 || !Array.isArray(options) || options.length < 2 || options.length > 10 || !Array.isArray(correctAnswers) || correctAnswers.length === 0) {
    invalidQuestion();
  }
  const validatedOptions = [];
  const optionValues = /* @__PURE__ */ new Set();
  for (const option of options) {
    if (!isRecord$1(option) || typeof option.value !== "string" || !/^[A-Za-z0-9_-]{1,60}$/.test(option.value) || typeof option.labelEn !== "string" || option.labelEn.trim().length === 0 || option.labelEn.length > 200 || typeof option.labelSt !== "string" || option.labelSt.trim().length === 0 || option.labelSt.length > 200 || optionValues.has(option.value)) {
      invalidQuestion();
    }
    optionValues.add(option.value);
    validatedOptions.push({
      value: option.value,
      labelEn: option.labelEn.trim(),
      labelSt: option.labelSt.trim()
    });
  }
  const validType = type;
  const validAnswers = correctAnswers.filter((answer) => typeof answer === "string");
  if (validAnswers.length !== correctAnswers.length || validAnswers.length > validatedOptions.length || new Set(validAnswers).size !== validAnswers.length || validAnswers.some((answer) => !optionValues.has(answer)) || validType !== "multiple" && validAnswers.length !== 1 || validType === "truefalse" && (validatedOptions.length !== 2 || !optionValues.has("true") || !optionValues.has("false"))) {
    invalidQuestion();
  }
  const { db } = getFirebaseAdmin(event);
  const questionRef = db.collection("quizQuestions").doc();
  await questionRef.create({
    courseId: "race-for-parliament",
    moduleId,
    type: validType,
    promptEn: promptEn.trim(),
    promptSt: promptSt.trim(),
    options: validatedOptions,
    correctAnswers: validAnswers,
    createdBy: user.uid,
    createdAt: FieldValue.serverTimestamp()
  });
  return { id: questionRef.id };
});

const questions_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: questions_post
}, Symbol.toStringTag, { value: 'Module' }));

const quizzes_get$2 = defineEventHandler(async (event) => {
  await requireAdminUser(event);
  const snapshot = await getFirebaseAdmin(event).db.collection("standaloneQuizzes").get();
  return {
    quizzes: snapshot.docs.map((document) => {
      const quiz = document.data();
      return {
        id: document.id,
        titleEn: quiz.titleEn,
        titleSt: quiz.titleSt,
        questionCount: Array.isArray(quiz.questions) ? quiz.questions.length : 0,
        published: quiz.published === true
      };
    })
  };
});

const quizzes_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: quizzes_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const quizzes_post = defineEventHandler(async (event) => {
  const admin = await requireAdminUser(event);
  const quiz = validateStandaloneQuiz(await readBody(event));
  const reference = getFirebaseAdmin(event).db.collection("standaloneQuizzes").doc();
  await reference.create({
    ...quiz,
    published: true,
    createdBy: admin.uid,
    createdAt: FieldValue.serverTimestamp()
  });
  return { id: reference.id };
});

const quizzes_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: quizzes_post
}, Symbol.toStringTag, { value: 'Module' }));

const results_get = defineEventHandler(async (event) => {
  await requireAdminUser(event);
  const { db } = getFirebaseAdmin(event);
  const [courseAttempts, standaloneAttempts] = await Promise.all([
    db.collection("quizAttempts").orderBy("createdAt", "desc").limit(100).get(),
    db.collection("standaloneQuizAttempts").orderBy("createdAt", "desc").limit(100).get()
  ]);
  const attempts = [
    ...courseAttempts.docs.map((attempt) => ({ attempt, standalone: false })),
    ...standaloneAttempts.docs.map((attempt) => ({ attempt, standalone: true }))
  ];
  const results = await Promise.all(attempts.map(async ({ attempt, standalone }) => {
    var _a, _b, _c, _d, _e;
    const data = attempt.data();
    const participant = await db.doc(`users/${data.uid}`).get();
    return {
      id: attempt.id,
      ...data,
      standalone,
      reviewStatus: data.reviewStatus === "reviewed" ? "reviewed" : data.reviewStatus === "pending" ? "pending" : "unavailable",
      createdAt: (_c = (_b = (_a = data.createdAt) == null ? void 0 : _a.toDate) == null ? void 0 : _b.call(_a).toISOString()) != null ? _c : null,
      participantName: (_e = (_d = participant.get("displayName")) != null ? _d : participant.get("email")) != null ? _e : data.uid
    };
  }));
  results.sort((left, right) => {
    var _a, _b;
    return ((_a = right.createdAt) != null ? _a : "").localeCompare((_b = left.createdAt) != null ? _b : "");
  });
  return { results: results.slice(0, 100) };
});

const results_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: results_get
}, Symbol.toStringTag, { value: 'Module' }));

const materials_get = defineEventHandler(async (event) => {
  var _a;
  const user = await requireRole(event, ["participant"]);
  const requestedCourseId = getRouterParam(event, "courseId");
  const moduleId = Number(getRouterParam(event, "moduleId"));
  if (requestedCourseId !== courseId || !Number.isInteger(moduleId)) {
    throw createError({ statusCode: 404, statusMessage: "Course module not found." });
  }
  if (!courseModules.some((module) => module.id === moduleId)) {
    throw createError({ statusCode: 404, statusMessage: "Course module not found." });
  }
  const { db } = getFirebaseAdmin(event);
  if (moduleId > 1) {
    const progress = await db.doc(`users/${user.uid}/courseProgress/${courseId}`).get();
    const passedModules = (_a = progress.data()) == null ? void 0 : _a.passedModules;
    if (!Array.isArray(passedModules) || !passedModules.includes(moduleId - 1)) {
      throw createError({ statusCode: 403, statusMessage: "Complete the previous module quiz before opening this module." });
    }
  }
  const snapshot = await db.collection("courseMaterials").where("courseId", "==", courseId).where("moduleId", "==", moduleId).get();
  return {
    materials: snapshot.docs.map((document) => {
      const material = document.data();
      return {
        id: document.id,
        titleEn: material.titleEn,
        titleSt: material.titleSt,
        bodyEn: material.bodyEn,
        bodySt: material.bodySt
      };
    })
  };
});

const materials_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: materials_get
}, Symbol.toStringTag, { value: 'Module' }));

const questions_get = defineEventHandler(async (event) => {
  var _a;
  const user = await requireFirebaseUser(event);
  const requestedCourseId = getRouterParam(event, "courseId");
  const moduleId = Number(getRouterParam(event, "moduleId"));
  if (requestedCourseId !== courseId || !Number.isInteger(moduleId)) {
    throw createError({ statusCode: 404, statusMessage: "Course module not found." });
  }
  const courseModule = courseModules.find((module) => module.id === moduleId);
  if (!courseModule) throw createError({ statusCode: 404, statusMessage: "Course module not found." });
  const { db } = getFirebaseAdmin(event);
  if (moduleId > 1) {
    const progress = await db.doc(`users/${user.uid}/courseProgress/${courseId}`).get();
    const passedModules = (_a = progress.data()) == null ? void 0 : _a.passedModules;
    if (!Array.isArray(passedModules) || !passedModules.includes(moduleId - 1)) {
      throw createError({ statusCode: 403, statusMessage: "Complete the previous module quiz before opening this module." });
    }
  }
  const snapshot = await db.collection("quizQuestions").where("courseId", "==", courseId).where("moduleId", "==", moduleId).get();
  const addedQuestions = snapshot.docs.map((document) => {
    const question = document.data();
    return {
      id: document.id,
      moduleId: question.moduleId,
      type: question.type,
      promptEn: question.promptEn,
      promptSt: question.promptSt,
      options: question.options
    };
  });
  return { questions: [...courseModule.quiz, ...addedQuestions] };
});

const questions_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: questions_get
}, Symbol.toStringTag, { value: 'Module' }));

const attempts_get = defineEventHandler(async (event) => {
  await requireRole(event, ["admin"]);
  const { db } = getFirebaseAdmin(event);
  const snapshot = await db.collection("quizAttempts").where("reviewStatus", "==", "pending").orderBy("createdAt", "asc").limit(100).get();
  const moduleIds = [...new Set(snapshot.docs.map((attempt) => attempt.get("moduleId")))].filter((moduleId) => Number.isInteger(moduleId));
  const questionSnapshots = await Promise.all(moduleIds.map((moduleId) => db.collection("quizQuestions").where("courseId", "==", courseId).where("moduleId", "==", moduleId).get()));
  const questionsByModule = new Map(moduleIds.map((moduleId, index) => [
    moduleId,
    questionSnapshots[index].docs
  ]));
  const attempts = await Promise.all(snapshot.docs.map(async (attempt) => {
    var _a, _b, _c, _d, _e, _f;
    const data = attempt.data();
    const module = courseModules.find((item) => item.id === data.moduleId);
    if (!module || data.courseId !== courseId) return null;
    const participant = await db.doc(`users/${data.uid}`).get();
    const questionDetails = [
      ...module.quiz.map((question) => {
        var _a2;
        return {
          ...question,
          correctAnswers: (_a2 = getStaticAnswers(data.moduleId)[question.id]) != null ? _a2 : []
        };
      }),
      ...((_a = questionsByModule.get(data.moduleId)) != null ? _a : []).map((document) => ({
        ...document.data(),
        id: document.id
      }))
    ];
    return {
      id: attempt.id,
      ...data,
      createdAt: (_d = (_c = (_b = data.createdAt) == null ? void 0 : _b.toDate) == null ? void 0 : _c.call(_b).toISOString()) != null ? _d : null,
      participantName: (_f = (_e = participant.get("displayName")) != null ? _e : participant.get("email")) != null ? _f : data.uid,
      moduleTitleEn: module.titleEn,
      moduleTitleSt: module.titleSt,
      questions: questionDetails
    };
  }));
  return { attempts: attempts.filter((attempt) => attempt !== null) };
});

const attempts_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: attempts_get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__post = defineEventHandler(async (event) => {
  const admin = await requireRole(event, ["admin"]);
  const attemptId = getRouterParam(event, "id");
  if (!attemptId || !/^[A-Za-z0-9_-]{1,128}$/.test(attemptId)) {
    throw createError({ statusCode: 400, statusMessage: "The quiz attempt ID is invalid." });
  }
  const body = await readBody(event);
  if (!body || typeof body !== "object") {
    throw createError({ statusCode: 400, statusMessage: "The marking submission is invalid." });
  }
  if (!Number.isInteger(body == null ? void 0 : body.score) || body.score < 0 || body.score > 100) {
    throw createError({ statusCode: 400, statusMessage: "The marked score must be a whole number from 0 to 100." });
  }
  if (body.feedback !== void 0 && (typeof body.feedback !== "string" || body.feedback.length > 1e3)) {
    throw createError({ statusCode: 400, statusMessage: "Admin feedback must be 1,000 characters or fewer." });
  }
  const { db } = getFirebaseAdmin(event);
  const score = body.score;
  const passed = score >= 70;
  const attemptRef = db.doc(`quizAttempts/${attemptId}`);
  await db.runTransaction(async (transaction) => {
    var _a, _b;
    const attemptSnapshot = await transaction.get(attemptRef);
    if (!attemptSnapshot.exists) {
      throw createError({ statusCode: 404, statusMessage: "Quiz attempt not found." });
    }
    const attempt = attemptSnapshot.data();
    if (attempt.reviewStatus !== "pending") {
      throw createError({ statusCode: 409, statusMessage: "This quiz attempt is not waiting to be marked." });
    }
    if (typeof attempt.uid !== "string" || typeof attempt.moduleId !== "number" || typeof attempt.courseId !== "string") {
      throw createError({ statusCode: 500, statusMessage: "The quiz attempt data is invalid." });
    }
    const moduleAttempts = await transaction.get(
      db.collection("quizAttempts").where("uid", "==", attempt.uid).where("moduleId", "==", attempt.moduleId)
    );
    const progressRef = db.doc(`users/${attempt.uid}/courseProgress/${attempt.courseId}`);
    const progressSnapshot = await transaction.get(progressRef);
    const progress = (_a = progressSnapshot.data()) != null ? _a : {};
    const anotherPassingAttempt = moduleAttempts.docs.some((document) => document.id !== attemptId && document.get("courseId") === attempt.courseId && document.get("passed") === true);
    const modulePassed = passed || anotherPassingAttempt;
    const passedModules = Array.isArray(progress.passedModules) ? progress.passedModules.filter((value) => Number.isInteger(value)) : [];
    const nextPassedModules = modulePassed ? [.../* @__PURE__ */ new Set([...passedModules, attempt.moduleId])].sort((a, b) => a - b) : passedModules.filter((moduleId) => moduleId < attempt.moduleId);
    const progressUpdate = {
      passedModules: nextPassedModules,
      updatedAt: FieldValue.serverTimestamp()
    };
    if (progress.latestAttemptId === attemptId) {
      progressUpdate.scores = { ...(_b = progress.scores) != null ? _b : {}, [String(attempt.moduleId)]: score };
    }
    transaction.update(attemptRef, {
      score,
      passed,
      reviewStatus: "reviewed",
      reviewedBy: admin.uid,
      reviewedAt: FieldValue.serverTimestamp(),
      reviewerFeedback: typeof body.feedback === "string" ? body.feedback.trim() : ""
    });
    transaction.set(progressRef, progressUpdate, { merge: true });
  });
  return { id: attemptId, score, passed, reviewStatus: "reviewed" };
});

const _id__post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__post
}, Symbol.toStringTag, { value: 'Module' }));

const progress_get = defineEventHandler(async (event) => {
  const user = await requireFirebaseUser(event);
  const { db } = getFirebaseAdmin(event);
  try {
    const snapshot = await db.doc(`users/${user.uid}/courseProgress/race-for-parliament`).get();
    return snapshot.exists ? snapshot.data() : { passedModules: [], scores: {}, attemptsByModule: {}, latestAttemptId: null };
  } catch (error) {
    const { log } = useLogger();
    log("error", "Failed to fetch progress data", {
      errorName: error instanceof Error ? error.name : "UnknownError",
      errorMessage: error instanceof Error ? error.message : String(error)
    });
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch progress data"
    });
  }
});

const progress_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: progress_get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get$2 = defineEventHandler(async (event) => {
  const user = await requireFirebaseUser(event);
  const attemptId = getRouterParam(event, "id");
  if (!attemptId || !/^[A-Za-z0-9_-]{1,128}$/.test(attemptId)) {
    throw createError({ statusCode: 400, statusMessage: "The quiz attempt ID is invalid." });
  }
  const { db } = getFirebaseAdmin(event);
  const snapshot = await db.doc(`quizAttempts/${attemptId}`).get();
  if (!snapshot.exists) {
    throw createError({ statusCode: 404, statusMessage: "Quiz result not found." });
  }
  const result = snapshot.data();
  if (result.uid !== user.uid) {
    const profile = await db.doc(`users/${user.uid}`).get();
    if (!profile.exists || profile.get("role") !== "admin") {
      throw createError({ statusCode: 403, statusMessage: "You do not have access to this quiz result." });
    }
  }
  return { ...result, id: snapshot.id, attempts: result.attemptNumber };
});

const _id__get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get$2
}, Symbol.toStringTag, { value: 'Module' }));

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
const submit_post$2 = defineEventHandler(async (event) => {
  const user = await requireRole(event, ["participant"]);
  const body = await readBody(event);
  if (!body || typeof body !== "object") {
    throw createError({ statusCode: 400, statusMessage: "The quiz submission is invalid." });
  }
  const moduleId = body == null ? void 0 : body.moduleId;
  const expectedAnswers = typeof moduleId === "number" ? getStaticAnswers(moduleId) : void 0;
  if (body.courseId !== void 0 && body.courseId !== courseId || typeof moduleId !== "number" || !Number.isInteger(moduleId) || !expectedAnswers || !body.answers || typeof body.answers !== "object" || Array.isArray(body.answers)) {
    throw createError({ statusCode: 400, statusMessage: "The quiz submission is invalid." });
  }
  const answers = body.answers;
  const { db } = getFirebaseAdmin(event);
  const module = courseModules.find((item) => item.id === moduleId);
  const addedQuestionsSnapshot = await db.collection("quizQuestions").where("courseId", "==", courseId).where("moduleId", "==", moduleId).get();
  const allQuestionIds = /* @__PURE__ */ new Set([
    ...module.quiz.map((question) => question.id),
    ...addedQuestionsSnapshot.docs.map((question) => question.id)
  ]);
  if (Object.keys(answers).length > allQuestionIds.size || Object.keys(answers).some((questionId) => !allQuestionIds.has(questionId)) || Object.values(answers).some((answer) => !isStringArray(answer) || answer.length > 10 || answer.some((value) => value.length > 100))) {
    throw createError({ statusCode: 400, statusMessage: "The quiz answers are invalid." });
  }
  const answerKey = { ...expectedAnswers };
  const allowedOptions = new Map(module.quiz.map((question) => [
    question.id,
    new Set(question.options.map((option) => option.value))
  ]));
  for (const document of addedQuestionsSnapshot.docs) {
    const question = document.data();
    if (!isStringArray(question.correctAnswers) || question.correctAnswers.length === 0 || !Array.isArray(question.options) || !question.options.every((option) => typeof option === "object" && option !== null && "value" in option && typeof option.value === "string")) {
      throw createError({ statusCode: 500, statusMessage: "A saved quiz question is invalid." });
    }
    answerKey[document.id] = question.correctAnswers;
    allowedOptions.set(document.id, new Set(question.options.map((option) => option.value)));
  }
  if (Object.entries(answers).some(([questionId, answer]) => answer.some((value) => {
    var _a;
    return !((_a = allowedOptions.get(questionId)) == null ? void 0 : _a.has(value));
  }))) {
    throw createError({ statusCode: 400, statusMessage: "The quiz answers are invalid." });
  }
  const correctCount = Object.entries(answerKey).reduce((total, [questionId, correct]) => {
    var _a;
    const submitted = [...(_a = answers[questionId]) != null ? _a : []].sort();
    return total + (JSON.stringify(submitted) === JSON.stringify([...correct].sort()) ? 1 : 0);
  }, 0);
  const score = Math.round(correctCount / Object.keys(answerKey).length * 100);
  const passed = score >= 70;
  const progressRef = db.doc(`users/${user.uid}/courseProgress/${courseId}`);
  const attemptRef = db.collection("quizAttempts").doc();
  const attempts = await db.runTransaction(async (transaction) => {
    var _a, _b;
    const progressSnapshot = await transaction.get(progressRef);
    const progress = (_a = progressSnapshot.data()) != null ? _a : {};
    const passedModules = Array.isArray(progress.passedModules) ? progress.passedModules.filter((value) => Number.isInteger(value)) : [];
    if (moduleId > 1 && !passedModules.includes(moduleId - 1)) {
      throw createError({ statusCode: 403, statusMessage: "Complete the previous module quiz before starting this one." });
    }
    const attemptsByModule = progress.attemptsByModule && typeof progress.attemptsByModule === "object" ? progress.attemptsByModule : {};
    const attemptNumber = (Number(attemptsByModule[String(moduleId)]) || 0) + 1;
    if (passed && !passedModules.includes(moduleId)) passedModules.push(moduleId);
    transaction.create(attemptRef, {
      uid: user.uid,
      courseId: "race-for-parliament",
      moduleId,
      attemptNumber,
      answers,
      reviewStatus: "pending",
      automaticScore: score,
      score,
      passed,
      createdAt: FieldValue.serverTimestamp()
    });
    transaction.set(progressRef, {
      passedModules,
      scores: { ...(_b = progress.scores) != null ? _b : {}, [String(moduleId)]: score },
      attemptsByModule: { ...attemptsByModule, [String(moduleId)]: attemptNumber },
      latestAttemptId: attemptRef.id,
      updatedAt: FieldValue.serverTimestamp()
    }, { merge: true });
    return attemptNumber;
  });
  return { attemptId: attemptRef.id, moduleId, score, passed, attempts };
});

const submit_post$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: submit_post$2
}, Symbol.toStringTag, { value: 'Module' }));

const quizzes_get = defineEventHandler(async (event) => {
  await requireRole(event, ["participant"]);
  const snapshot = await getFirebaseAdmin(event).db.collection("standaloneQuizzes").where("published", "==", true).get();
  return {
    quizzes: snapshot.docs.map((document) => {
      const quiz = document.data();
      return {
        id: document.id,
        titleEn: quiz.titleEn,
        titleSt: quiz.titleSt,
        questionCount: Array.isArray(quiz.questions) ? quiz.questions.length : 0
      };
    })
  };
});

const quizzes_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: quizzes_get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get = defineEventHandler(async (event) => {
  await requireRole(event, ["participant"]);
  const quizId = getRouterParam(event, "id");
  if (!quizId || !/^[A-Za-z0-9_-]{1,128}$/.test(quizId)) {
    throw createError({ statusCode: 404, statusMessage: "Quiz not found." });
  }
  const snapshot = await getFirebaseAdmin(event).db.doc(`standaloneQuizzes/${quizId}`).get();
  if (!snapshot.exists || snapshot.get("published") !== true) {
    throw createError({ statusCode: 404, statusMessage: "Quiz not found." });
  }
  const quiz = snapshot.data();
  const questions = Array.isArray(quiz.questions) ? quiz.questions.map(({ correctAnswers: _correctAnswers, ...question }) => question) : [];
  return {
    id: snapshot.id,
    titleEn: quiz.titleEn,
    titleSt: quiz.titleSt,
    questions
  };
});

const _id__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get
}, Symbol.toStringTag, { value: 'Module' }));

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
const submit_post = defineEventHandler(async (event) => {
  const participant = await requireRole(event, ["participant"]);
  const quizId = getRouterParam(event, "id");
  if (!quizId || !/^[A-Za-z0-9_-]{1,128}$/.test(quizId)) {
    throw createError({ statusCode: 404, statusMessage: "Quiz not found." });
  }
  const body = await readBody(event);
  if (!isRecord(body) || !isRecord(body.answers)) {
    throw createError({ statusCode: 400, statusMessage: "Quiz answers are invalid." });
  }
  const { db } = getFirebaseAdmin(event);
  const quizSnapshot = await db.doc(`standaloneQuizzes/${quizId}`).get();
  if (!quizSnapshot.exists || quizSnapshot.get("published") !== true) {
    throw createError({ statusCode: 404, statusMessage: "Quiz not found." });
  }
  const questions = quizSnapshot.get("questions");
  if (!Array.isArray(questions) || questions.length === 0) {
    throw createError({ statusCode: 500, statusMessage: "This quiz has no valid questions." });
  }
  const questionIds = new Set(questions.map((question) => question.id));
  const submittedIds = Object.keys(body.answers);
  if (submittedIds.length !== questionIds.size || submittedIds.some((id) => !questionIds.has(id))) {
    throw createError({ statusCode: 400, statusMessage: "Answer every question before submitting." });
  }
  let correctCount = 0;
  const answers = {};
  for (const question of questions) {
    const answer = body.answers[question.id];
    if (!Array.isArray(answer) || answer.length === 0 || answer.length > question.options.length || answer.some((value) => typeof value !== "string") || new Set(answer).size !== answer.length || answer.some((value) => !question.options.some((option) => option.value === value))) {
      throw createError({ statusCode: 400, statusMessage: "Quiz answers are invalid." });
    }
    answers[question.id] = answer;
    const submitted = [...answer].sort();
    const expected = [...question.correctAnswers].sort();
    if (JSON.stringify(submitted) === JSON.stringify(expected)) correctCount += 1;
  }
  const score = Math.round(correctCount / questions.length * 100);
  const attempt = db.collection("standaloneQuizAttempts").doc();
  await attempt.create({
    quizId,
    quizTitleEn: quizSnapshot.get("titleEn"),
    quizTitleSt: quizSnapshot.get("titleSt"),
    uid: participant.uid,
    answers,
    questionCount: questions.length,
    score,
    passed: score >= 70,
    createdAt: FieldValue.serverTimestamp()
  });
  return { score, passed: score >= 70, questionCount: questions.length };
});

const submit_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: submit_post
}, Symbol.toStringTag, { value: 'Module' }));

//#region src/runtime/server/renderer/payload.ts
function renderPayloadResponse(ssrContext, event) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	warnOnLargePayload(opts.ssrContext, opts.data, contents.length);
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	payload.id = "__NUXT_DATA__";
	if (opts.src) payload["data-src"] = opts.src;
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
const PAYLOAD_SIZE_WARNING_BYTES = 102400;
const warnedPayloadURLs = /* @__PURE__ */ new Set();
function formatPayloadSize(bytes) {
	return `${(bytes / 1024).toFixed(1)} kB`;
}
function getPayloadKeySizes(data, reducers) {
	const sizes = [];
	for (const key in data) try {
		sizes.push([key, stringify(data[key], reducers).length]);
	} catch {}
	return sizes.sort((a, b) => b[1] - a[1]);
}
function warnOnLargePayload(ssrContext, data, size) {
	if (size <= PAYLOAD_SIZE_WARNING_BYTES || warnedPayloadURLs.has(ssrContext.url)) return;
	warnedPayloadURLs.add(ssrContext.url);
	const keys = getPayloadKeySizes(data?.data, ssrContext["~payloadReducers"]).slice(0, 5).map(([key, keySize]) => `\`${key}\` (${formatPayloadSize(keySize)})`).join("\n  - ");
	rendererDiagnostics.NUXT_E8006({
		path: ssrContext.url,
		size: formatPayloadSize(size),
		keys: keys || void 0
	});
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, prefetchLinks, ...initial } = ssrContext.payload;
	const payload = {
		data,
		prerenderedAt
	};
	if (prefetchLinks?.length) payload.prefetchLinks = prefetchLinks;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload
	};
}

//#region src/runtime/server/renderer/index.ts
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
/**
* Create a Nuxt SSR renderer, returning a web-standard handler for the requests a Nuxt
* app serves from its pages.
*
* Everything the renderer reads belongs to the renderer it was created for, so a bundle
* may create as many as it needs. Pass an instance from `createRendererInstance()` to
* render against the artifacts already loaded for another renderer.
*/
function createNuxtRenderer(optionsOrInstance) {
	const instance = "getRenderer" in optionsOrInstance ? optionsOrInstance : createRendererInstance(optionsOrInstance);
	return { fetch: (event) => fetch$1(instance, event) };
}
function fetch$1(instance, event) {
	const runtime = instance.options;
	if (runtime.renderIsland && event.url.pathname.startsWith("/__nuxt_island/")) return Promise.resolve(runtime.renderIsland(event));
	const isErrorRoute = event.url.pathname.startsWith("/__nuxt_error");
	if (isErrorRoute && !getRequestState(event)?.["~rendering-error"]) {
		return Promise.reject(runtime.createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error"
		}));
	}
	const ssrError = isErrorRoute ? getQuery(event.url.href) : null;
	const render = () => renderRoute(instance, event, ssrError).then((response) => returnRenderResponse(runtime, event, response));
	const rendering = render();
	return rendering;
}
async function renderRoute(instance, event, ssrError) {
	const runtime = instance.options;
	const hooks = runtime.hooks();
	const hookEvent = appEvent(event);
	runtime.prerender?.payloadCache;
	const ssrContext = createSSRContext(runtime, event);
	ssrContext.head.push(appHead);
	if (ssrError) {
		const status = ssrError.status || ssrError.statusCode;
		if (status) ssrError.status = ssrError.statusCode = Number.parseInt(status);
		if (typeof ssrError.data === "string") try {
			ssrError.data = destr(ssrError.data);
		} catch {}
		if (typeof ssrError.cause === "string") ssrError.cause = destr(ssrError.cause);
		setSSRError(ssrContext, ssrError);
	}
	const routeOptions = runtime.getRouteRules(event);
	const NO_SCRIPTS = !!routeOptions.noScripts;
	if (routeOptions.ssr === false && true) ssrContext.noSSR = true;
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && !ssrError && !!((routeOptions.isr || routeOptions.cache));
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		ssrContext.url = payloadRequestToRoute(ssrContext.url, PAYLOAD_FILENAME);
		event.url = withRequestPath(event.url, ssrContext.url);
		getPayloadCacheKey(ssrContext.url);
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? buildPayloadURL(ssrContext) : void 0;
	const renderer = await instance.getRenderer(ssrContext);
	const canStream = NUXT_SSR_STREAMING;
	const renderRouteContext = {
		canStream,
		prefersStream: false
	};
	await hooks.callHook("render:route", renderRouteContext, { event: hookEvent });
	const _rendered = await (renderer.renderToString(ssrContext)).catch(async (error) => {
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") return {};
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	if (ssrContext.payload?.error && !ssrError) throw ssrContext.payload.error;
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext, event);
		return response;
	}
	if (!ssrError && !ssrContext.error) runtime.onRenderSuccess?.(event);
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	pushNoScriptsHints(ssrContext, NO_SCRIPTS);
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) ssrContext.head.push({ link: [{
		rel: "preload",
		as: "fetch",
		crossorigin: "anonymous",
		href: payloadURL
	} ] });
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	const link = [];
	const inlinedHrefs = [];
	for (const resource of Object.values(styles)) {
		if ("inline" in getQuery(resource.file)) continue;
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) ssrContext.head.push({ link });
	const dependencyOptions = {
		exclude: ssrContext["~lazyHydratedModules"]?.size ? ssrContext["~lazyHydratedModules"] : void 0,
		scripts: !NO_SCRIPTS
	};
	const excludeHrefs = new Set(link.map((l) => l.href));
	for (const href of inlinedHrefs) excludeHrefs.add(href);
	for (const id of ssrContext["~neverHydratedModules"] ?? []) {
		const file = renderer.rendererContext.manifest?.[id]?.file;
		if (file) excludeHrefs.add(renderer.rendererContext.buildAssetsURL(file));
	}
	const hints = [];
	for (const l of getPreloadLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	for (const l of getPrefetchLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	if (hints.length) ssrContext.head.push({ link: hints });
	if (!NO_SCRIPTS) ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
		ssrContext,
		data: stripInlineOnlyPayloadFields(ssrContext.payload)
	})  : renderPayloadJsonScript({
		ssrContext,
		data: splitPayload(ssrContext).initial,
		src: payloadURL
	})  }, {
		tagPosition: "bodyClose",
		tagPriority: "high"
	});
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) });
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	await hooks.callHook("render:html", htmlContext, { event: hookEvent });
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function getPayloadCacheKey(url) {
	const { pathname, search } = new URL(url, "http://localhost");
	return (pathname === "/" ? "/" : pathname.replace(/\/$/, "")) + (search ? encodeURIComponent(search) : "") + ".json";
}
/**
* Routes served without scripts navigate with full-page loads. This emits the
* declarative navigation hints that speed those up, on both the pages served
* without scripts (a blanket rule over same-origin links) and scripted pages
* that may link to them (rules scoped to the `noScripts` route patterns):
*
* - speculation rules, so supporting browsers prefetch and prerender the
*   target ahead of the navigation;
* - when view transitions are enabled, an opt-in to same-origin cross-document
*   view transitions, animating the navigation without a client runtime (the
*   client-side `startViewTransition` plugin is not shipped).
*
* Both tags are declarative and execute no JavaScript.
*/
function pushNoScriptsHints(ssrContext, noScripts) {
	if (noScripts) pushSpeculationRulesScript(ssrContext, NUXT_PAGE_PATTERNS.length ? NUXT_PAGE_PATTERNS : ["/*"]);
	else if (NUXT_NO_SCRIPTS_PATTERNS.length) pushSpeculationRulesScript(ssrContext, NUXT_NO_SCRIPTS_PATTERNS);
	else return;
}
function pushSpeculationRulesScript(ssrContext, patterns) {
	const rules = patterns.map((href_matches) => ({
		where: { href_matches },
		eagerness: "moderate"
	}));
	ssrContext.head.push({ script: [{
		tagPosition: "head",
		type: "speculationrules",
		innerHTML: {
			prefetch: rules,
			prerender: rules
		}
	}] });
}
function buildPayloadURL(ssrContext) {
	const baseURL = ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL;
	return routeToPayloadURL(baseURL, ssrContext.url, ssrContext.runtimeConfig.app.buildId, PAYLOAD_FILENAME);
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) result.push(chunk);
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) return "";
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function stripInlineOnlyPayloadFields(payload) {
	if (!payload.prefetchLinks) return payload;
	const { prefetchLinks: _, ...rest } = payload;
	return rest;
}

const renderer = createNuxtRenderer(rendererInstance);
const handler = defineRenderHandler(async (event) => {
	const response = await renderer.fetch(toRequestEvent(event));
	for (const [name, value] of response.headers) {
		if (name === "set-cookie") continue;
		setResponseHeader(event, name, value);
	}
	return {
		body: response.body,
		statusCode: response.status,
		statusMessage: response.statusText || void 0
	};
});

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

//#region src/runtime/server/dev/peer.ts
/**
* Peer checks shared by the dev-only endpoints that disclose local state.
*
* @module nuxt/internal/dev/peer
*/
/**
* Whether the connected peer is a loopback address.
*
* This inspects the TCP peer address rather than request metadata, so a
* non-browser client cannot make itself look local by choosing its `Host`,
* `Origin`, `Referer` or `Sec-Fetch-*` headers. `x-forwarded-for` is ignored on
* purpose: only the address of the socket we are actually talking to counts.
*/
function isLoopbackAddress(address) {
	if (!address) return false;
	let normalized = address.trim().toLowerCase().replace(/^\[/, "").replace(/\]$/, "");
	const zoneIndex = normalized.indexOf("%");
	if (zoneIndex !== -1) normalized = normalized.slice(0, zoneIndex);
	if (normalized.startsWith("::ffff:")) normalized = normalized.slice(7);
	if (normalized === "::1") return true;
	return /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(normalized);
}

//#region src/runtime/handlers/error-channel.ts
/**
* Serves the live error channel: the SSE stream, report lookups and "open in editor".
*
* Trust follows the socket, since a request's origin headers are forgeable over a direct
* connection.
*/
var error_channel_default = defineEventHandler(async (event) => {
	const channel = await useErrorChannel();
	const trusted = isLoopbackAddress(getRequestIP(event));
	return await channel.fetchHandler(toWebRequest(event), { trusted }) ?? new Response("Not Found", { status: 404 });
});

const errorChannel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: error_channel_default
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
