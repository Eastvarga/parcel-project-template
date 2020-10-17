// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\dm-sans-v5-latin-regular.eot":[["dm-sans-v5-latin-regular.81b5c59d.eot","fonts/dm-sans-v5-latin-regular.eot"],"fonts/dm-sans-v5-latin-regular.eot"],"./..\\fonts\\dm-sans-v5-latin-regular.woff2":[["dm-sans-v5-latin-regular.8d44908d.woff2","fonts/dm-sans-v5-latin-regular.woff2"],"fonts/dm-sans-v5-latin-regular.woff2"],"./..\\fonts\\dm-sans-v5-latin-regular.woff":[["dm-sans-v5-latin-regular.e5cf4a87.woff","fonts/dm-sans-v5-latin-regular.woff"],"fonts/dm-sans-v5-latin-regular.woff"],"./..\\fonts\\dm-sans-v5-latin-regular.ttf":[["dm-sans-v5-latin-regular.30b0dfbe.ttf","fonts/dm-sans-v5-latin-regular.ttf"],"fonts/dm-sans-v5-latin-regular.ttf"],"./..\\fonts\\dm-sans-v5-latin-regular.svg":[["dm-sans-v5-latin-regular.ead03e5e.svg","fonts/dm-sans-v5-latin-regular.svg"],"fonts/dm-sans-v5-latin-regular.svg"],"./..\\fonts\\dm-sans-v5-latin-500.eot":[["dm-sans-v5-latin-500.96e54c25.eot","fonts/dm-sans-v5-latin-500.eot"],"fonts/dm-sans-v5-latin-500.eot"],"./..\\fonts\\dm-sans-v5-latin-500.woff2":[["dm-sans-v5-latin-500.9524903e.woff2","fonts/dm-sans-v5-latin-500.woff2"],"fonts/dm-sans-v5-latin-500.woff2"],"./..\\fonts\\dm-sans-v5-latin-500.woff":[["dm-sans-v5-latin-500.170a9973.woff","fonts/dm-sans-v5-latin-500.woff"],"fonts/dm-sans-v5-latin-500.woff"],"./..\\fonts\\dm-sans-v5-latin-500.ttf":[["dm-sans-v5-latin-500.bed1da24.ttf","fonts/dm-sans-v5-latin-500.ttf"],"fonts/dm-sans-v5-latin-500.ttf"],"./..\\fonts\\dm-sans-v5-latin-500.svg":[["dm-sans-v5-latin-500.29a15e3c.svg","fonts/dm-sans-v5-latin-500.svg"],"fonts/dm-sans-v5-latin-500.svg"],"./..\\fonts\\dm-sans-v5-latin-700.eot":[["dm-sans-v5-latin-700.450b51d9.eot","fonts/dm-sans-v5-latin-700.eot"],"fonts/dm-sans-v5-latin-700.eot"],"./..\\fonts\\dm-sans-v5-latin-700.woff2":[["dm-sans-v5-latin-700.69b1af9a.woff2","fonts/dm-sans-v5-latin-700.woff2"],"fonts/dm-sans-v5-latin-700.woff2"],"./..\\fonts\\dm-sans-v5-latin-700.woff":[["dm-sans-v5-latin-700.ae5018c5.woff","fonts/dm-sans-v5-latin-700.woff"],"fonts/dm-sans-v5-latin-700.woff"],"./..\\fonts\\dm-sans-v5-latin-700.ttf":[["dm-sans-v5-latin-700.e007fc9a.ttf","fonts/dm-sans-v5-latin-700.ttf"],"fonts/dm-sans-v5-latin-700.ttf"],"./..\\fonts\\dm-sans-v5-latin-700.svg":[["dm-sans-v5-latin-700.9bd9af8d.svg","fonts/dm-sans-v5-latin-700.svg"],"fonts/dm-sans-v5-latin-700.svg"],"./..\\fonts\\titan-one-v8-latin-regular.eot":[["titan-one-v8-latin-regular.5ecfba8a.eot","fonts/titan-one-v8-latin-regular.eot"],"fonts/titan-one-v8-latin-regular.eot"],"./..\\fonts\\titan-one-v8-latin-regular.woff2":[["titan-one-v8-latin-regular.c7773417.woff2","fonts/titan-one-v8-latin-regular.woff2"],"fonts/titan-one-v8-latin-regular.woff2"],"./..\\fonts\\titan-one-v8-latin-regular.woff":[["titan-one-v8-latin-regular.7f3e05d4.woff","fonts/titan-one-v8-latin-regular.woff"],"fonts/titan-one-v8-latin-regular.woff"],"./..\\fonts\\titan-one-v8-latin-regular.ttf":[["titan-one-v8-latin-regular.289eb43c.ttf","fonts/titan-one-v8-latin-regular.ttf"],"fonts/titan-one-v8-latin-regular.ttf"],"./..\\fonts\\titan-one-v8-latin-regular.svg":[["titan-one-v8-latin-regular.6dce54aa.svg","fonts/titan-one-v8-latin-regular.svg"],"fonts/titan-one-v8-latin-regular.svg"],"./..\\images\\mobile\\hero-ice-cream.png":[["hero-ice-cream.a8a6a05a.png","images/mobile/hero-ice-cream.png"],"images/mobile/hero-ice-cream.png"],"./..\\images\\mobile\\hero-ice-cream@2x.png":[["hero-ice-cream@2x.67b243f5.png","images/mobile/hero-ice-cream@2x.png"],"images/mobile/hero-ice-cream@2x.png"],"./..\\images\\tablet\\hero-ice-cream.png":[["hero-ice-cream.246b5e2c.png","images/tablet/hero-ice-cream.png"],"images/tablet/hero-ice-cream.png"],"./..\\images\\tablet\\hero-ice-cream@2x.png":[["hero-ice-cream@2x.41ad37df.png","images/tablet/hero-ice-cream@2x.png"],"images/tablet/hero-ice-cream@2x.png"],"./..\\images\\desktop\\hero-ice-cream.png":[["hero-ice-cream.b15fabcc.png","images/desktop/hero-ice-cream.png"],"images/desktop/hero-ice-cream.png"],"./..\\images\\desktop\\hero-ice-cream@2x.png":[["hero-ice-cream@2x.595d2002.png","images/desktop/hero-ice-cream@2x.png"],"images/desktop/hero-ice-cream@2x.png"],"./..\\images\\tablet\\hero-arrow-right.png":[["hero-arrow-right.e54744e3.png","images/tablet/hero-arrow-right.png"],"images/tablet/hero-arrow-right.png"],"./..\\images\\tablet\\hero-arrow-right@2x.png":[["hero-arrow-right@2x.e0680fc4.png","images/tablet/hero-arrow-right@2x.png"],"images/tablet/hero-arrow-right@2x.png"],"./..\\images\\desktop\\hero-arrow-right.png":[["hero-arrow-right.640a02f3.png","images/desktop/hero-arrow-right.png"],"images/desktop/hero-arrow-right.png"],"./..\\images\\desktop\\hero-arrow-right@2x.png":[["hero-arrow-right@2x.22973a22.png","images/desktop/hero-arrow-right@2x.png"],"images/desktop/hero-arrow-right@2x.png"],"./..\\images\\desktop-milk@1x.png":[["desktop-milk@1x.4c2d1329.png","images/desktop-milk@1x.png"],"images/desktop-milk@1x.png"],"./..\\images\\desktop-milk@2x.png":[["desktop-milk@2x.eace9d99.png","images/desktop-milk@2x.png"],"images/desktop-milk@2x.png"],"./..\\images\\red-arrow@1x.png":[["red-arrow@1x.98d821d3.png","images/red-arrow@1x.png"],"images/red-arrow@1x.png"],"./..\\images\\red-arrow@2x.png":[["red-arrow@2x.030bbe4a.png","images/red-arrow@2x.png"],"images/red-arrow@2x.png"],"./..\\images\\desktop\\bcgbranch2.png":[["bcgbranch2.befbd5e2.png","images/desktop/bcgbranch2.png"],"images/desktop/bcgbranch2.png"],"./..\\images\\desktop\\bcgbranch2@2x.png":[["bcgbranch2@2x.7ad949e2.png","images/desktop/bcgbranch2@2x.png"],"images/desktop/bcgbranch2@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/slide.js":[function(require,module,exports) {
;

(function slide() {
  var buttons = document.querySelectorAll('.slide-button');
  var feedbacks = document.querySelectorAll('.feedback-text-wrapper');
  var authors = document.querySelectorAll('.feedback-author');
  var avatars = document.querySelectorAll('.feedback-avatar');

  var _loop = function _loop(i) {
    buttons[i].addEventListener('click', function (e) {
      var currentButton = document.querySelector('.is-clicked');
      var currentFeedback = document.querySelector('.current-feedback');
      var currentAuthor = document.querySelector('.current-author');
      var currentAvatar = document.querySelector('.current-avatar');
      currentFeedback.classList.remove("current-feedback");
      feedbacks[i].classList.add("current-feedback");
      currentAuthor.classList.remove("current-author");
      authors[i].classList.add("current-author");
      currentAvatar.classList.remove("current-avatar");
      avatars[i].classList.add("current-avatar");
      currentButton.classList.remove('is-clicked');
      buttons[i].classList.add('is-clicked'); // for (let j = 0; j < buttons.length; j++) {
      //    if(j !== i) {
      //         buttons[j].classList.remove('is-clicked')
      //    }
      // }
    });
  };

  for (var i = 0; i < buttons.length; i++) {
    _loop(i);
  }
})();
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

require("./js/slide");
},{"./sass/main.scss":"sass/main.scss","./js/slide":"js/slide.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58551" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map