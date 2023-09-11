"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToPage = exports.getCurrentPageId = exports.currentPathMatchesPageId = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var navigateToPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, pageId, _ref) {
    var pagesConfig, hostsConfig, _process$env$UI_AUTOM, hostName, hostPath, url, pagesConfigItem;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          pagesConfig = _ref.pagesConfig, hostsConfig = _ref.hostsConfig;
          _process$env$UI_AUTOM = process.env.UI_AUTOMATION_HOST, hostName = _process$env$UI_AUTOM === void 0 ? 'localhost' : _process$env$UI_AUTOM;
          hostPath = hostsConfig["".concat(hostName)];
          console.log('hostPath: ', hostPath);
          url = new URL(hostPath);
          console.log("url: ", url);
          console.log("pageId: ", pageId);
          pagesConfigItem = pagesConfig[pageId];
          console.log("pagesConfigItem: ", pagesConfigItem);
          url.pathname = pagesConfigItem.route;
          console.log("url.pathname: ", url.pathname);
          _context.next = 13;
          return page.goto(url.href);

        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function navigateToPage(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.navigateToPage = navigateToPage;

var pathMatchesPageId = function pathMatchesPageId(path, pageId, _ref3) {
  var pagesConfig = _ref3.pagesConfig;
  var pageRegexString = pagesConfig[pageId].regex;
  console.log("pageRegexString: ", pageRegexString);
  var pageRegex = new RegExp(pageRegexString);
  console.log("pageRegex: ", pageRegex);
  return pageRegex.test(path);
};

var currentPathMatchesPageId = function currentPathMatchesPageId(page, pageId, globalConfig) {
  var _URL = new URL(page.url()),
      currentPath = _URL.pathname;

  console.log("currentPath: ", currentPath);
  return pathMatchesPageId(currentPath, pageId, globalConfig);
};

exports.currentPathMatchesPageId = currentPathMatchesPageId;

var getCurrentPageId = function getCurrentPageId(page, globalConfig) {
  var pagesConfig = globalConfig.pagesConfig;
  console.log("pagesConfig: ", pagesConfig);
  var pageConfigPageIds = Object.keys(pagesConfig);
  console.log("pageConfigPageIds: ", pageConfigPageIds);

  var _URL2 = new URL(page.url()),
      currentPath = _URL2.pathname;

  var currentPageId = pageConfigPageIds.find(function (pageId) {
    return pathMatchesPageId(currentPath, pageId, globalConfig);
  });

  if (!currentPageId) {
    throw Error("\n            Failed to get page name from current route ".concat(currentPath, ",             possible pages: ").concat(JSON.stringify(pagesConfig)));
  }

  return currentPageId;
};

exports.getCurrentPageId = getCurrentPageId;