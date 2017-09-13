'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const buildDocs = (() => {
  const _ref = _asyncToGenerator(function* (base, target, context) {
    const app = context.app;
    const rewriter = context.rewriter;

    const renderFilters = { flags: context.flags };
    const docs = yield getDocsTree(base);
    const write = adject(sander.writeFile, rewriter);

    return traverse(docs, (() => {
      const _ref2 = _asyncToGenerator(function* (doc) {
        const p = (yield doc).path.join('/');
        const t = _path2.default.resolve(target, 'doc', strip(p), 'index.html');
        const page = yield renderPage(app, `/doc/${strip(p)}`, renderFilters);
        return write(page, t);
      });

      return function (_x4) {
        return _ref2.apply(this, arguments);
      };
    })());
  });

  return function buildDocs(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

const _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

const _clientRequire = require('./client-require');

const _clientRequire2 = _interopRequireDefault(_clientRequire);

const _serverRequire = require('./server-require');

const _serverRequire2 = _interopRequireDefault(_serverRequire);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

// Const renderPage = clientRequire('render-page');
// const {getDocsTree} = serverRequire('get-docs');

exports.default = buildDocs;


function adject(subject, adjective) {
  return function () {
    return subject(arguments.length <= arguments.length - 1 + 0 ? undefined : arguments[arguments.length - 1 + 0], adjective.apply(undefined, arguments));
  };
}

function strip(p) {
  return _path2.default.join(_path2.default.dirname(p), _path2.default.basename(p, _path2.default.extname(p)));
}

function traverse(tree, predecate) {
  const results = [];

  tree.children.forEach(child => {
    predecate(child);
    if (child.children) {
      results.push(traverse(child, predecate));
    }
  });

  return results;
}
module.exports = exports.default;