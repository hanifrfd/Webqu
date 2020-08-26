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
    style: {
      minWidth: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ResponsiveEmbed"], {
    aspectRatio: "16by9",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1BvcnRmb2xpb0l0ZW1zLmpzIl0sIm5hbWVzIjpbIlBvcnRmb2xpb0l0ZW1zIiwiZGF0YSIsImltYWdlIiwidGl0bGUiLCJ0b29scyIsIm1pbldpZHRoIiwiZW1iZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FFZixNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBWSxNQUFFLEVBQUMsR0FBZjtBQUFtQixhQUFTLEVBQUMsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNQSxJQUFJLENBQUNDLEtBQUwsR0FDRixNQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFDLE9BQWI7QUFBcUIsYUFBUyxFQUFDLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFELENBQU0sR0FBTjtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixPQUFHLEVBQUVELElBQUksQ0FBQ0MsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxhQUFTLEVBQUMsa0JBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGFBQVMsRUFBQyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWlDRCxJQUFJLENBQUNFLEtBQXRDLE1BRFIsRUFFUSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFXLGFBQVMsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01GLElBQUksQ0FBQ0csS0FEWCxDQUZSLENBRkosQ0FERSxHQVdGLE1BQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsT0FBYjtBQUFxQixhQUFTLEVBQUMsS0FBL0I7QUFBcUMsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBQztBQUFYLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLCtEQUFEO0FBQWlCLGVBQVcsRUFBQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tKLElBQUksQ0FBQ0ssS0FEVixDQURBLEVBSUEsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxhQUFTLEVBQUMsa0JBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGFBQVMsRUFBQyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWlDTCxJQUFJLENBQUNFLEtBQXRDLE1BRFIsRUFFUSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFXLGFBQVMsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01GLElBQUksQ0FBQ0csS0FEWCxDQUZSLENBSkEsQ0FaSixDQUZlO0FBQUEsQ0FBdkI7O0tBQU1KLGM7QUE4QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzY2IyNGUxYzRkNDFmMzFmZDlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDb2wsIFJlc3BvbnNpdmVFbWJlZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IFBvcnRmb2xpb0l0ZW1zID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPENvbCBtZD1cIjRcIiBzbT1cIjFcIiBjbGFzc05hbWU9XCJteS0zIHAtMFwiPlxyXG4gICAgICAgICAgICB7IGRhdGEuaW1hZ2UgPyBcclxuICAgICAgICAgICAgPENhcmQgYm9yZGVyPVwibGlnaHRcIiBjbGFzc05hbWU9XCJtLTBcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtkYXRhLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cImJsYWNrXCI+IHsgZGF0YS50aXRsZSB9IDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJibGFjazJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YS50b29scyB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxDYXJkIGJvcmRlcj1cImxpZ2h0XCIgY2xhc3NOYW1lPVwibS0wXCIgc3R5bGU9e3sgbWluV2lkdGg6XCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlRW1iZWQgYXNwZWN0UmF0aW89XCIxNmJ5OVwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuZW1iZWR9XHJcbiAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUVtYmVkPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJibGFja1wiPiB7IGRhdGEudGl0bGUgfSA8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJibGFjazJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXRhLnRvb2xzIH1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICBcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvSXRlbXM7Il0sInNvdXJjZVJvb3QiOiIifQ==