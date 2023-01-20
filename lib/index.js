(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./stemmer.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./stemmer.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.stemmerJs);
    global.BulStem = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _stemmer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createStemmer = void 0;
  _stemmer = _interopRequireDefault(_stemmer);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  const loadContext = async type => {
    if (type === 'l') {
      return Promise.resolve().then(() => _interopRequireWildcard(require('./data/stem_rules_context_3.js')));
    } else if (type === 'm') {
      return Promise.resolve().then(() => _interopRequireWildcard(require('./data/stem_rules_context_2.js')));
    } else if (type === 's') {
      return Promise.resolve().then(() => _interopRequireWildcard(require('./data/stem_rules_context_1.js')));
    } else {
      throw 'Unknown context!';
    }
  };
  const createStemmer = async (type = 's', options = {
    stemBoundary: 1
  }) => {
    const context = await loadContext(type);
    return new _stemmer.default(context.default, options);
  };
  _exports.createStemmer = createStemmer;
});