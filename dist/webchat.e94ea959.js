// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gJZTd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6b0f982ae94ea959";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9g7sO":[function(require,module,exports) {
// Global Variables
let chatbotToggler, closeBtn, chatbox, chatInput, sendChatBtn;
let userMessage = null;
let chatbotAvatarImage;
let inputInitHeight;
let chatbotGreeting;
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to calculate a dynamic delay based on the length of the response
function getRandomDelayBasedOnLength(responseLength, minPerChar = 150, minDelay = 3000, maxDelay = 10000) {
    let calculatedDelay = responseLength * minPerChar;
    return Math.min(Math.max(calculatedDelay, minDelay), maxDelay);
}
// Function to retrieve and set the encryptedDataPayload
function setEncryptedDataPayload() {
    // Find the script tag with the 'data-payload' attribute
    const scriptTag = document.querySelector("script[data-payload]");
    if (scriptTag) {
        const encryptedDataPayload = scriptTag.getAttribute("data-payload");
        console.log("Encrypted Data Payload from script tag:", encryptedDataPayload);
        const encryptedDataInput = document.getElementById("encryptedDataPayload");
        if (encryptedDataInput) {
            encryptedDataInput.value = encryptedDataPayload;
            console.log("Set encryptedDataPayload value in input field:", encryptedDataInput.value);
        } else console.error("Failed to set encryptedDataPayload. Input field missing.");
    } else console.error("Failed to find script tag with 'data-payload' attribute.");
}
// Function to retrieve and set the encryptedDataId
function setEncryptedDataId() {
    console.log("setEncryptedDataId function called");
    // Find the script tag with the 'data-id' attribute
    const scriptTag = document.querySelector("script[data-id]");
    if (scriptTag) {
        const encryptedDataId = scriptTag.getAttribute("data-id");
        console.log("Encrypted Data ID from script tag:", encryptedDataId); //im not seeing this log 
        // Assuming you have an input or a hidden field in your HTML to store the encryptedDataId
        const encryptedDataIdInput = document.getElementById("encryptedDataId");
        if (encryptedDataIdInput) {
            encryptedDataIdInput.value = encryptedDataId;
            console.log("Set encryptedDataId value in input field:", encryptedDataIdInput.value);
        } else console.error("Failed to set encryptedDataId. Input field missing.");
    } else console.error("Failed to find script tag with 'data-id' attribute.");
     //no console log is showing in this function
}
// Function to activate the chatbot
function activateChatbot() {
    console.log("Starting chatbot activation process.");
    const encryptedDataPayload = document.getElementById("encryptedDataPayload").value;
    const encryptedDataId = document.getElementById("encryptedDataId").value; // Make sure this variable is correctly capturing the value
    const clientHostname = window.location.hostname;
    //const clientHostname = "localhost";
    // Debugging: Log the values before sending
    console.log("encryptedDataPayload:", encryptedDataPayload);
    console.log("encryptedDataId:", encryptedDataId);
    console.log("clientHostname:", clientHostname);
    // Construct the request body
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname
    });
    // Debugging: Log the request body
    console.log("Sending request body:", requestBody);
    fetch("https://next.leads-mania.com/webchat/activate-chatbot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: requestBody
    }).then((response)=>response.json()).then((data)=>{
        console.log("Chatbot activated:", data);
        if (data.success) {
            localStorage.setItem("isActivated", "true");
            console.log("Updated activation status in localStorage after successful activation.");
        }
    }).catch((error)=>console.error("Error activating chatbot:", error));
}
// Function to initialize chatbot (fetch configuration, check activation)
async function initializeChatbot() {
    await fetchAndUpdateChatConfig(); // Fetch and update chat configuration
    setEncryptedDataId(); // Set encrypted data ID
    checkActivationStatus(); // Check activation status
}
// Function to get or create a new user session ID
function getSessionId() {
    let sessionId = sessionStorage.getItem("sessionId");
    if (!sessionId) {
        sessionId = uuid.v4(); // Generate a new UUID
        sessionStorage.setItem("sessionId", sessionId);
    }
    return sessionId;
}
// Function to create a thread
function createThread() {
    const encryptedDataPayload = document.getElementById("encryptedDataPayload").value;
    const encryptedDataId = document.getElementById("encryptedDataId").value;
    const clientHostname = window.location.hostname;
    //const clientHostname = "localhost";
    const userId = getSessionId(); // Get the current session ID or generate a new one
    // Construct the request body
    const requestBody = JSON.stringify({
        userId,
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname
    });
    // Debugging: Log the request body
    console.log("Sending request createThread:", requestBody);
    fetch("https://next.leads-mania.com/webchat/create-thread", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: requestBody
    }).then((response)=>response.json()).then((data)=>{
        if (data.success && data.data && data.data.threadID) // Store the thread ID in sessionStorage
        sessionStorage.setItem("threadId", data.data.threadID);
        console.log("Thread created:", data);
    }).catch((error)=>console.error("Error creating thread:", error));
}
// Function to create a message
async function createMessage(encryptedDataPayload, encryptedDataId, clientHostname, threadId, lastUtterance) {
    console.log("createMessage - Sending request with:", {
        encryptedDataPayload,
        encryptedDataId,
        clientHostname,
        threadId,
        lastUtterance
    });
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId,
        lastUtterance
    });
    console.log("Sending request body for createMessage:", requestBody);
    const response = await fetch("https://next.leads-mania.com/webchat/create-message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: requestBody
    });
    const data = await response.json();
    console.log("createMessage - Response received:", data);
    if (!response.ok) throw new Error(data.message || "Failed to create message");
    return data;
}
// Function to create a run
async function createRun(encryptedDataPayload, encryptedDataId, clientHostname, threadId) {
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId
    });
    console.log("Sending request body for createRun:", requestBody);
    try {
        const response = await fetch("https://next.leads-mania.com/webchat/create-run", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: requestBody
        });
        const data = await response.json();
        if (response.ok && data.success) {
            console.log("Run created:", data);
            const runId = data.data.runID; // Accessing the runID correctly
            sessionStorage.setItem("runId", runId);
            return runId;
        } else {
            console.error("Failed to create run:", data.message);
            return null;
        }
    } catch (error) {
        console.error("Error creating run:", error);
        return null;
    }
}
// Function to poll the status of a run
async function pollRunStatus(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId) {
    console.log("pollRunStatus - Sending request with:", {
        encryptedDataPayload,
        encryptedDataId,
        clientHostname,
        threadId,
        runId
    });
    // Construct the request body
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId: threadId,
        runId: runId
    });
    console.log("Sending request body for pollRunStatus:", requestBody);
    try {
        const response = await fetch("https://next.leads-mania.com/webchat/poll-status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: requestBody
        });
        const data = await response.json();
        console.log("pollRunStatus - Response received:", data);
        if (!response.ok) throw new Error(data.message || "Failed to poll run status.");
        // Check if data contains status and return it
        if (data.success && data.data && data.data.status) {
            console.log("Run status:", data.data.status);
            return data.data.status; // Return the status of the run
        } else {
            console.error("Failed to poll run status:", data.message);
            return null;
        }
    } catch (error) {
        console.error("Error polling run status:", error);
        return null; // Return null in case of an error
    }
}
// Function to return the response from the assistant
async function getAssistantResponse(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId) {
    console.log("getAssistantResponse called with:", {
        encryptedDataPayload,
        encryptedDataId,
        clientHostname,
        threadId,
        runId
    });
    // Construct the request body
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId: threadId,
        runId: runId
    });
    console.log("Sending request body for getAssistantResponse:", requestBody);
    try {
        const response = await fetch("https://next.leads-mania.com/webchat/get-assistant-response", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: requestBody
        });
        const data = await response.json();
        console.log("getAssistantResponse - Response data:", data);
        if (!response.ok) throw new Error(data.message || "Failed to get assistant response.");
        // Correctly extract the assistant's reply
        const assistantReply = data.data.assistantReply;
        console.log("getAssistantResponse - Assistant reply:", assistantReply);
        return assistantReply; // Return the assistant's response
    } catch (error) {
        console.error("Error getting assistant response:", error);
        return null; // Return null in case of an error
    }
}
// Function to fetch and update chat configuration
async function fetchAndUpdateChatConfig() {
    const encryptedDataPayload = document.getElementById("encryptedDataPayload").value;
    const sessionStorageKey = `chatConfig-${encryptedDataPayload}`;
    if (!sessionStorage.getItem(sessionStorageKey)) {
        console.log("Fetching chat configuration from server.");
        const response = await fetch("https://next.leads-mania.com/webchat/get-chat-config", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dataPayload: encryptedDataPayload
            })
        });
        const chatConfig = await response.json();
        if (response.ok) {
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(chatConfig));
            updateChatUI(chatConfig);
        } else console.error("Failed to fetch chat configuration:", chatConfig.message);
    } else {
        console.log("Using stored chat configuration from sessionStorage.");
        const chatConfig = JSON.parse(sessionStorage.getItem(sessionStorageKey));
        updateChatUI(chatConfig);
    }
}
// Function to open the lightbox modal
function openLightboxModal(src) {
    // console.log("Opening lightbox modal with image:", src);
    const modal = document.querySelector(".x1z2Chat-lightbox-modal");
    const modalImg = modal.querySelector(".x1z2Chat-lightbox-content");
    modalImg.src = src;
    modal.style.display = "block";
    // Close modal when clicking on the close button or anywhere outside the image
    modal.addEventListener("click", function(event) {
        if (event.target === modal || event.target.className === "x1z2Chat-close-lightbox") {
            console.log("Closing lightbox modal.");
            modal.style.display = "none";
        }
    });
}
// Function to handle chatbot toggle
function toggleChatbot() {
    document.body.classList.toggle("x1z2Chat-show-chatbot");
    // Create a thread only if no thread exists and the chatbot is being opened
    if (!sessionStorage.getItem("threadId") && document.body.classList.contains("x1z2Chat-show-chatbot")) createThread();
    // Send the initial greeting if it hasn't been sent yet
    if (!document.querySelector(".x1z2Chat-chatbox .incoming") && chatbotGreeting) setTimeout(()=>{
        addMessageToChat(chatbotGreeting, "incoming", false, chatbotAvatarImage);
    }, 1000);
}
function convertMarkdownToHtml(markdownText) {
    // Convert bold text
    const boldPattern = /\*\*(.*?)\*\*/g;
    let htmlText = markdownText.replace(boldPattern, "<strong>$1</strong>");
    // Convert image links (Markdown syntax)
    const imagePattern = /!\[(.*?)\]\((https?:\/\/\S+(?:jpg|jpeg|png|gif|bmp))\)/gi;
    htmlText = htmlText.replace(imagePattern, '<a href="$2" class="x1z2Chat-image-link" target="_blank"><img src="$2" alt="$1" class="thumbnail"></a>');
    // Convert regular links (Markdown syntax)
    const linkPattern = /\[(.*?)\]\((https?:\/\/\S+)\)/gi;
    htmlText = htmlText.replace(linkPattern, '<a href="$2" target="_blank">$1</a>');
    return htmlText;
}
// Function to show typing indicator in chat
function showTypingIndicator() {
    // console.log("Showing typing indicator...");
    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("x1z2Chat-typing");
    // Create three span elements for the dots
    for(let i = 0; i < 3; i++){
        const dot = document.createElement("span");
        typingIndicator.appendChild(dot);
    }
    chatbox.appendChild(typingIndicator);
    chatbox.scrollTo(0, chatbox.scrollHeight);
}
// Function to remove the typing indicator
function removeTypingIndicator() {
    // console.log("Removing typing indicator...");
    const typingIndicator = document.querySelector(".x1z2Chat-typing");
    if (typingIndicator) typingIndicator.remove();
}
// Function to add messages to chat
const addMessageToChat = (message, className, isHtml = false, isTypingIndicator = false, avatarImageUrl = chatbotAvatarImage)=>{
    const chatLi = document.createElement("li");
    chatLi.classList.add("x1z2Chat-chat", className);
    const chatBubble = document.createElement("p");
    // chatBubble.classList.add("x1z2Chat-chat-bubble");
    let convertedMessage = isHtml ? message : convertMarkdownToHtml(message);
    chatBubble.innerHTML = convertedMessage;
    if (className === "incoming") {
        // For incoming messages, include the avatar image
        const avatarImg = document.createElement("img");
        avatarImg.src = avatarImageUrl;
        avatarImg.classList.add("x1z2Chat-assistant-avatar");
        chatLi.appendChild(avatarImg);
    }
    chatLi.appendChild(chatBubble);
    chatbox.appendChild(chatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
};
// Function to update UI with chat configuration data
function updateChatUI(chatConfig) {
    chatbotGreeting = chatConfig.greeting_message;
    console.log("Updating chat UI with configuration:", chatConfig);
    // Update the primary color
    if (chatConfig.colorTheme) document.documentElement.style.setProperty("--primary-color", chatConfig.colorTheme);
    document.querySelector(".x1z2Chat-chatbot-logo").src = chatConfig.company_image;
    document.querySelector(".x1z2Chat-chatbot-heading-text").textContent = chatConfig.heading_text;
    document.querySelector(".x1z2Chat-online-status").textContent = chatConfig.subheading_text;
    chatbotAvatarImage = chatConfig.avatar_image;
    document.querySelector(".x1z2Chat-popup-assistant-avatar").src = chatConfig.popup_image;
    document.querySelector(".x1z2Chat-popup-message").textContent = chatConfig.popup_message;
    // Store activation status
    localStorage.setItem("isActivated", chatConfig.is_activated);
    console.log("Stored activation status:", chatConfig.is_activated);
}
// Function to check activation status
function checkActivationStatus() {
    const isActivated = localStorage.getItem("isActivated");
    console.log("Checking activation status:", isActivated);
    // Convert the retrieved value to a boolean for accurate comparison
    const isActivatedBool = isActivated === "true";
    if (!isActivatedBool) {
        console.log("Activating chatbot as it is not yet activated.");
        // Activation has not been done or is not marked as activated
        activateChatbot();
    } else console.log("Chatbot is already activated.");
}
// Process the user message by creating a run, polling the status, and getting the response
async function processUserMessage(message) {
    console.log("processUserMessage - Received message:", message);
    try {
        // Retrieve encrypted data and hostname from the DOM elements
        const encryptedDataPayload = document.getElementById("encryptedDataPayload").value;
        const encryptedDataId = document.getElementById("encryptedDataId").value;
        const clientHostname = document.location.hostname; // Dynamically get the hostname
        // const clientHostname = "localhost"; // Dynamically get the hostname
        const threadId = sessionStorage.getItem("threadId"); // Assuming threadId is stored in sessionStorage
        // Step 1: Create a message
        console.log("processUserMessage - Creating message with:", message);
        await createMessage(encryptedDataPayload, encryptedDataId, clientHostname, threadId, message); // Adjust parameters as per the latest function signature
        // Step 2: Create a run
        console.log("processUserMessage - Creating run.");
        const runId = await createRun(encryptedDataPayload, encryptedDataId, clientHostname, threadId); // Adjust parameters as per the latest function signature
        console.log("processUserMessage - Run created with ID:", runId);
        // Step 3: Poll for the status of the run
        let runStatus;
        do {
            runStatus = await pollRunStatus(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId); // Adjust parameters as per the latest function signature
            console.log("Polling run status:", runStatus);
            await new Promise((resolve)=>setTimeout(resolve, 2000)); // Wait for 2 seconds before polling again
        }while (runStatus !== "completed");
        // Step 4: Get the assistant's response
        console.log("processUserMessage - Getting assistant's response.");
        const assistantResponse = await getAssistantResponse(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId); // Adjust parameters as per the latest function signature
        // Display the assistant's response
        if (assistantResponse) {
            addMessageToChat(assistantResponse, "incoming");
            removeTypingIndicator(); // Remove typing indicator as soon as the response is displayed
            console.log("processUserMessage - Assistant response:", assistantResponse);
        }
    } catch (error) {
        console.error("Error processing user message:", error);
    }
}
// Handle chat function
const handleChat = async (message)=>{
    if (!message) {
        console.log("handleChat - No message entered. Exiting.");
        return;
    }
    // Add the user message to the chat as an outgoing message
    addMessageToChat(message, "outgoing");
    console.log("handleChat - Message added to chat:", message);
    // Clear the chat input field
    chatInput.value = "";
    console.log("handleChat - Chat input cleared");
    // Generate a random initial delay for showing the typing indicator
    const initialTypingDelay = getRandomDelay(4000, 5000);
    setTimeout(async ()=>{
        // Show typing indicator after the initialTypingDelay
        showTypingIndicator();
        console.log("handleChat - Showing typing indicator.");
        // Retrieve necessary data
        const encryptedDataPayload = document.getElementById("encryptedDataPayload").value;
        const threadId = sessionStorage.getItem("threadId");
        console.log("handleChat - encryptedDataPayload and threadId:", encryptedDataPayload, threadId);
        try {
            // Process the user message
            console.log("handleChat - Calling processUserMessage with:", message);
            await processUserMessage(message, encryptedDataPayload, threadId);
        } catch (error) {
            console.error("Error processing user message:", error);
        }
    // The typing indicator will be removed inside processUserMessage after receiving the assistant's response
    }, initialTypingDelay);
};
function setupEventListeners() {
    chatbotToggler.addEventListener("click", toggleChatbot);
    sendChatBtn.addEventListener("click", ()=>{
        handleChat(chatInput.value.trim());
    });
    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevent the default action (i.e., inserting a newline)
            handleChat(chatInput.value.trim()); // Call the handleChat function with the trimmed message
        }
    });
    // Event listener for thumbnails
    chatbox.addEventListener("click", function(event) {
        if (event.target.classList.contains("x1z2Chat-image-link") || event.target.classList.contains("thumbnail")) {
            event.preventDefault();
            let imgSrc = event.target.href || event.target.src;
            openLightboxModal(imgSrc);
        }
    });
// Add event listeners to other queried DOM elements as needed
}
console.log("Script loaded");
function onDomContentLoaded() {
    console.log("DOMContentLoaded event triggered or DOM already loaded");
    // Get references to the chat popup, close button, and chatbot toggler
    var chatPopup = document.getElementById("chat-popup");
    var closeButton = document.querySelector(".x1z2Chat-close-popup");
    var chatbotToggler = document.querySelector(".x1z2Chat-chatbot-toggler");
    console.log("chatPopup:", chatPopup);
    console.log("closeButton:", closeButton);
    console.log("chatbotToggler:", chatbotToggler);
    // Variable to track if the user has scrolled past a certain point
    var hasScrolled = false;
    // Add scroll event listener
    window.addEventListener("scroll", function() {
        console.log("Scroll event triggered, pageYOffset:", window.pageYOffset);
        if (window.pageYOffset > 300 && !hasScrolled) {
            console.log("User scrolled more than 300px, showing popup");
            hasScrolled = true;
            setTimeout(function() {
                if (!sessionStorage.getItem("popupClosed")) {
                    console.log("Showing popup");
                    chatPopup.style.opacity = 1;
                    chatPopup.style.visibility = "visible";
                } else console.log("Popup previously closed, not showing");
            }, 4000);
        }
    });
    // Add click event listener to the close button
    if (closeButton) {
        console.log("Adding click listener to closeButton");
        closeButton.addEventListener("click", closePopup);
    } else console.log("closeButton not found");
    // Add click event listener to the chatbot toggler
    if (chatbotToggler) {
        console.log("Adding click listener to chatbotToggler");
        chatbotToggler.addEventListener("click", closePopup);
    } else console.log("chatbotToggler not found");
    // Add click event listener to the chat popup
    if (chatPopup) chatPopup.addEventListener("click", function() {
        console.log("Chat popup clicked, toggling chatbot");
        toggleChatbot();
        // Optionally, close the popup when the chatbot is opened
        closePopup();
    });
    else console.log("chatPopup not found");
    // Function to close the popup
    function closePopup() {
        console.log("Closing popup");
        chatPopup.style.opacity = 0;
        chatPopup.style.visibility = "hidden";
        sessionStorage.setItem("popupClosed", "true");
    }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", onDomContentLoaded);
else onDomContentLoaded();

},{}]},["gJZTd"], null, "parcelRequire1352")

//# sourceMappingURL=webchat.e94ea959.js.map
