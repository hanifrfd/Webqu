webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/layout/Portfolio.js":
/*!***********************************!*\
  !*** ./pages/layout/Portfolio.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _component_PortfolioItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/PortfolioItems */ "./component/PortfolioItems.js");
/* harmony import */ var _data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/portfolio-data */ "./data/portfolio-data.js");
var _this = undefined,
    _jsxFileName = "F:\\Project\\Project\\Web\\NextJs\\webqu\\pages\\layout\\Portfolio.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Portfolio = function Portfolio() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("all"),
      filter = _useState[0],
      setfilter = _useState[1];

  var setActive = function setActive(active) {
    return active === filter ? "blue" : "";
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "pt-5 px-0 py-3 mb-5",
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mx-0 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "12",
    className: "justify-content-center mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "black py-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Portfolio"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-center black2 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("h5", {
    id: "all",
    className: "menu-link font-18 font-medium px-3 " + setActive("all"),
    onClick: function onClick() {
      return setfilter("all");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "ALL"), __jsx("h5", {
    id: "apps",
    className: "menu-link font-18 font-medium px-3 " + setActive("apps"),
    onClick: function onClick() {
      return setfilter("apps");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "APPS"), __jsx("h5", {
    id: "ui",
    className: "menu-link font-18 font-medium px-3 " + setActive("ui"),
    onClick: function onClick() {
      return setfilter("ui");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "UI DESIGN"), __jsx("h5", {
    id: "video",
    className: "menu-link font-18 font-medium px-3 " + setActive("video"),
    onClick: function onClick() {
      return setfilter("video");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "VIDEO GRAPHIC"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mx-0 px-0 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, _data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"][filter].map(function (datas, key) {
    return __jsx(_component_PortfolioItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      data: datas,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    });
  }))), __jsx("style", {
    text: "text/css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "\n                .menu-link{\n                    cursor: pointer\n                }\n                .menu-link:hover{\n                    color: #92C5F3\n                }\n            "));
};

_s(Portfolio, "8zZTcYf8rWpeIh49d9DLcjDdox0=");

_c = Portfolio;
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

var _c;

$RefreshReg$(_c, "Portfolio");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGF5b3V0L1BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJQb3J0Zm9saW8iLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldGZpbHRlciIsInNldEFjdGl2ZSIsImFjdGl2ZSIsIkRhdGEiLCJtYXAiLCJkYXRhcyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDYkMsTUFEYTtBQUFBLE1BQ0xDLFNBREs7O0FBR3BCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUMxQixXQUFPQSxNQUFNLEtBQUtILE1BQVgsR0FBb0IsTUFBcEIsR0FBNkIsRUFBcEM7QUFDSCxHQUZEOztBQUdBLFNBQ0ksTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxxQkFBckI7QUFBMkMsU0FBSyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBYSxhQUFTLEVBQUMsNkJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxNQUFFLEVBQUMsS0FBUDtBQUFhLGFBQVMsRUFBRSx3Q0FBd0NFLFNBQVMsQ0FBQyxLQUFELENBQXpFO0FBQWtGLFdBQU8sRUFBRTtBQUFBLGFBQU1ELFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFFSTtBQUFJLE1BQUUsRUFBQyxNQUFQO0FBQWMsYUFBUyxFQUFFLHdDQUF3Q0MsU0FBUyxDQUFDLE1BQUQsQ0FBMUU7QUFBcUYsV0FBTyxFQUFFO0FBQUEsYUFBTUQsU0FBUyxDQUFDLE1BQUQsQ0FBZjtBQUFBLEtBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQUksTUFBRSxFQUFDLElBQVA7QUFBWSxhQUFTLEVBQUUsd0NBQXdDQyxTQUFTLENBQUMsSUFBRCxDQUF4RTtBQUFnRixXQUFPLEVBQUU7QUFBQSxhQUFNRCxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixFQUlJO0FBQUksTUFBRSxFQUFDLE9BQVA7QUFBZSxhQUFTLEVBQUUsd0NBQXdDQyxTQUFTLENBQUMsT0FBRCxDQUEzRTtBQUFzRixXQUFPLEVBQUU7QUFBQSxhQUFNRCxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixDQUZKLENBREosRUFVSSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSUcsNERBQUksQ0FBQ0osTUFBRCxDQUFKLENBQWFLLEdBQWIsQ0FBaUIsVUFBRUMsS0FBRixFQUFTQyxHQUFUO0FBQUEsV0FDYixNQUFDLGlFQUFEO0FBQWdCLFNBQUcsRUFBRUEsR0FBckI7QUFBMEIsVUFBSSxFQUFFRCxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFqQixDQUxKLENBVkosQ0FESixFQXNCSTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscU1BdEJKLENBREo7QUFrQ0gsQ0F4Q0Q7O0dBQU1SLFM7O0tBQUFBLFM7QUEwQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgxMmNkZjhjN2FiOWEyOGI0OTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb2wsIFJvdywgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgUG9ydGZvbGlvSXRlbXMgZnJvbSAnLi4vLi4vY29tcG9uZW50L1BvcnRmb2xpb0l0ZW1zJ1xyXG5cclxuaW1wb3J0IERhdGEgZnJvbSAnLi4vLi4vZGF0YS9wb3J0Zm9saW8tZGF0YSdcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICgpID0+IHsgICAgICAgIFxyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0ZmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpXHJcbiAgICBcclxuICAgIGNvbnN0IHNldEFjdGl2ZSA9IChhY3RpdmUpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhY3RpdmUgPT09IGZpbHRlciA/IFwiYmx1ZVwiIDogXCJcIiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwdC01IHB4LTAgcHktMyBtYi01XCIgZmx1aWQ+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXgtMCBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiMTJcIiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsYWNrIHB5LTUgdGV4dC1jZW50ZXJcIj5Qb3J0Zm9saW88L2gyPiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBibGFjazIgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgaWQ9XCJhbGxcIiBjbGFzc05hbWU9e1wibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gcHgtMyBcIiArIHNldEFjdGl2ZShcImFsbFwiKX0gb25DbGljaz17KCkgPT4gc2V0ZmlsdGVyKFwiYWxsXCIpIH0+QUxMPC9oNT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZD1cImFwcHNcIiBjbGFzc05hbWU9e1wibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gcHgtMyBcIiArIHNldEFjdGl2ZShcImFwcHNcIil9ICBvbkNsaWNrPXsoKSA9PiBzZXRmaWx0ZXIoXCJhcHBzXCIpfT5BUFBTPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwidWlcIiBjbGFzc05hbWU9e1wibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gcHgtMyBcIiArIHNldEFjdGl2ZShcInVpXCIpfSBvbkNsaWNrPXsoKSA9PiBzZXRmaWx0ZXIoXCJ1aVwiKX0+VUkgREVTSUdOPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwidmlkZW9cIiBjbGFzc05hbWU9e1wibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gcHgtMyBcIiArIHNldEFjdGl2ZShcInZpZGVvXCIpfSBvbkNsaWNrPXsoKSA9PiBzZXRmaWx0ZXIoXCJ2aWRlb1wiKX0+VklERU8gR1JBUEhJQzwvaDU+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJteC0wIHB4LTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFbZmlsdGVyXS5tYXAoKCBkYXRhcywga2V5ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9ydGZvbGlvSXRlbXMga2V5PXtrZXl9IGRhdGE9e2RhdGFzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1Jvdz4gICAgICAgIFxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPHN0eWxlIHRleHQ9XCJ0ZXh0L2Nzc1wiPntgXHJcbiAgICAgICAgICAgICAgICAubWVudS1saW5re1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUtbGluazpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkyQzVGM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87Il0sInNvdXJjZVJvb3QiOiIifQ==