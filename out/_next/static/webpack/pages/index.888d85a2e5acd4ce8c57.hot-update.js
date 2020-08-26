webpackHotUpdate_N_E("pages/index",{

/***/ "./component/PortfolioItems.js":
/*!*************************************!*\
  !*** ./component/PortfolioItems.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "F:\\Project\\Project\\Web\\NextJs\\webqu\\component\\PortfolioItems.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PortfolioItems = function PortfolioItems(_ref) {
  var data = _ref.data;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "4",
    sm: "1",
    className: "my-3 p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, data.image ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    border: "light",
    className: "m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
    variant: "top",
    src: data.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    className: "text-center py-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
    className: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, " ", data.title, " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
    className: "black2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, data.tools))) : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    border: "light",
    className: "m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ResponsiveEmbed"], {
    aspectRatio: "16by9",
    style: {
      Height: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, data.embed), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    className: "text-center py-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
    className: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, " ", data.title, " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
    className: "black2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, data.tools))));
};

_c = PortfolioItems;
/* harmony default export */ __webpack_exports__["default"] = (PortfolioItems);

var _c;

$RefreshReg$(_c, "PortfolioItems");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1BvcnRmb2xpb0l0ZW1zLmpzIl0sIm5hbWVzIjpbIlBvcnRmb2xpb0l0ZW1zIiwiZGF0YSIsImltYWdlIiwidGl0bGUiLCJ0b29scyIsIkhlaWdodCIsImVtYmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBRWYsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQVksTUFBRSxFQUFDLEdBQWY7QUFBbUIsYUFBUyxFQUFDLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUEsSUFBSSxDQUFDQyxLQUFMLEdBQ0YsTUFBQyxvREFBRDtBQUFNLFVBQU0sRUFBQyxPQUFiO0FBQXFCLGFBQVMsRUFBQyxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRCxDQUFNLEdBQU47QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsT0FBRyxFQUFFRCxJQUFJLENBQUNDLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBUyxFQUFDLGtCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxhQUFTLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFpQ0QsSUFBSSxDQUFDRSxLQUF0QyxNQURSLEVBRVEsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxhQUFTLEVBQUMsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNRixJQUFJLENBQUNHLEtBRFgsQ0FGUixDQUZKLENBREUsR0FXRixNQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFDLE9BQWI7QUFBcUIsYUFBUyxFQUFDLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLCtEQUFEO0FBQWlCLGVBQVcsRUFBQyxPQUE3QjtBQUFxQyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFDO0FBQVQsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixJQUFJLENBQUNLLEtBRFYsQ0FEQSxFQUlBLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBUyxFQUFDLGtCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxhQUFTLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFpQ0wsSUFBSSxDQUFDRSxLQUF0QyxNQURSLEVBRVEsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxhQUFTLEVBQUMsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNRixJQUFJLENBQUNHLEtBRFgsQ0FGUixDQUpBLENBWkosQ0FGZTtBQUFBLENBQXZCOztLQUFNSixjO0FBOEJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ODhkODVhMmU1YWNkNGNlOGM1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ29sLCBSZXNwb25zaXZlRW1iZWQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5jb25zdCBQb3J0Zm9saW9JdGVtcyA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxDb2wgbWQ9XCI0XCIgc209XCIxXCIgY2xhc3NOYW1lPVwibXktMyBwLTBcIj5cclxuICAgICAgICAgICAgeyBkYXRhLmltYWdlID8gXHJcbiAgICAgICAgICAgIDxDYXJkIGJvcmRlcj1cImxpZ2h0XCIgY2xhc3NOYW1lPVwibS0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17ZGF0YS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJibGFja1wiPiB7IGRhdGEudGl0bGUgfSA8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwiYmxhY2syXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGEudG9vbHMgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8Q2FyZCBib3JkZXI9XCJsaWdodFwiIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUVtYmVkIGFzcGVjdFJhdGlvPVwiMTZieTlcIiBzdHlsZT17eyBIZWlnaHQ6XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmVtYmVkfVxyXG4gICAgICAgICAgICA8L1Jlc3BvbnNpdmVFbWJlZD5cclxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwiYmxhY2tcIj4geyBkYXRhLnRpdGxlIH0gPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwiYmxhY2syXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YS50b29scyB9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb0l0ZW1zOyJdLCJzb3VyY2VSb290IjoiIn0=