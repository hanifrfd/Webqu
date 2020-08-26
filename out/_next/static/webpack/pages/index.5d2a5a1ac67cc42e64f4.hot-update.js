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

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "pt-5 px-0 py-3",
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mx-0 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "12",
    className: "justify-content-center mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "black py-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Portfolio"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-center black2 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("h5", {
    id: "all",
    className: "menu-link font-18 font-medium blue px-3",
    onClick: function onClick() {
      return setfilter("all");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "ALL"), __jsx("h5", {
    id: "apps",
    className: "menu-link font-18 font-medium px-3",
    onClick: function onClick() {
      return setfilter("apps");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "APPS"), __jsx("h5", {
    id: "ui",
    className: "menu-link font-18 font-medium px-3",
    onClick: function onClick() {
      return setfilter("ui");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "UI DESIGN"), __jsx("h5", {
    id: "video",
    className: "menu-link font-18 font-medium px-3",
    onClick: function onClick() {
      return setfilter("video");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "VIDEO GRAPHIC"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mx-0 px-0 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, filter == "all" ? Object.keys(_data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"]).map(function (object, key) {
    var _this2 = this;

    var keys = key;
    var objects = object;
    _data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"][objects].map(function (datas, key) {
      __jsx(_component_PortfolioItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key,
        data: datas,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }
      });
    });
  }) : _data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"][filter].map(function (datas, key) {
    return __jsx(_component_PortfolioItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      data: datas,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    });
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGF5b3V0L1BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJQb3J0Zm9saW8iLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldGZpbHRlciIsIk9iamVjdCIsImtleXMiLCJEYXRhIiwibWFwIiwib2JqZWN0Iiwia2V5Iiwib2JqZWN0cyIsImRhdGFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNiQyxNQURhO0FBQUEsTUFDTEMsU0FESzs7QUFHcEIsU0FDSSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLGdCQUFyQjtBQUFzQyxTQUFLLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUMsSUFBUjtBQUFhLGFBQVMsRUFBQyw2QkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLE1BQUUsRUFBQyxLQUFQO0FBQWEsYUFBUyxFQUFDLHlDQUF2QjtBQUFpRSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBRUk7QUFBSSxNQUFFLEVBQUMsTUFBUDtBQUFjLGFBQVMsRUFBQyxvQ0FBeEI7QUFBNkQsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLE1BQUQsQ0FBZjtBQUFBLEtBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQUksTUFBRSxFQUFDLElBQVA7QUFBWSxhQUFTLEVBQUMsb0NBQXRCO0FBQTJELFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLEVBSUk7QUFBSSxNQUFFLEVBQUMsT0FBUDtBQUFlLGFBQVMsRUFBQyxvQ0FBekI7QUFBOEQsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLE9BQUQsQ0FBZjtBQUFBLEtBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosQ0FGSixDQURKLEVBVUksTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0lELE1BQU0sSUFBSSxLQUFWLEdBQ0FFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyw0REFBWixFQUFrQkMsR0FBbEIsQ0FBdUIsVUFBU0MsTUFBVCxFQUFpQkMsR0FBakIsRUFBc0I7QUFBQTs7QUFDekMsUUFBTUosSUFBSSxHQUFHSSxHQUFiO0FBQ0EsUUFBSUMsT0FBTyxHQUFHRixNQUFkO0FBQ0FGLGdFQUFJLENBQUNJLE9BQUQsQ0FBSixDQUFjSCxHQUFkLENBQWtCLFVBQUVJLEtBQUYsRUFBU0YsR0FBVCxFQUFrQjtBQUNoQyxZQUFDLGlFQUFEO0FBQWdCLFdBQUcsRUFBRUEsR0FBckI7QUFBMEIsWUFBSSxFQUFFRSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0gsS0FGRDtBQUdILEdBTkQsQ0FEQSxHQVNBTCw0REFBSSxDQUFDSixNQUFELENBQUosQ0FBYUssR0FBYixDQUFpQixVQUFFSSxLQUFGLEVBQVNGLEdBQVQ7QUFBQSxXQUNiLE1BQUMsaUVBQUQ7QUFBZ0IsU0FBRyxFQUFFQSxHQUFyQjtBQUEwQixVQUFJLEVBQUVFLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYTtBQUFBLEdBQWpCLENBZEosQ0FWSixDQURKLENBREo7QUFtQ0gsQ0F0Q0Q7O0dBQU1YLFM7O0tBQUFBLFM7QUF3Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkMmE1YTFhYzY3Y2M0MmU2NGY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb2wsIFJvdywgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgUG9ydGZvbGlvSXRlbXMgZnJvbSAnLi4vLi4vY29tcG9uZW50L1BvcnRmb2xpb0l0ZW1zJ1xyXG5cclxuaW1wb3J0IERhdGEgZnJvbSAnLi4vLi4vZGF0YS9wb3J0Zm9saW8tZGF0YSdcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICgpID0+IHsgICAgICAgIFxyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0ZmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwdC01IHB4LTAgcHktM1wiIGZsdWlkPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm14LTAgcHgtMFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjEyXCIgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBtYi00XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibGFjayBweS01IHRleHQtY2VudGVyXCI+UG9ydGZvbGlvPC9oMj4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgYmxhY2syIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwiYWxsXCIgY2xhc3NOYW1lPVwibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gYmx1ZSBweC0zXCIgb25DbGljaz17KCkgPT4gc2V0ZmlsdGVyKFwiYWxsXCIpIH0+QUxMPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwiYXBwc1wiIGNsYXNzTmFtZT1cIm1lbnUtbGluayBmb250LTE4IGZvbnQtbWVkaXVtIHB4LTNcIiBvbkNsaWNrPXsoKSA9PiBzZXRmaWx0ZXIoXCJhcHBzXCIpfT5BUFBTPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwidWlcIiBjbGFzc05hbWU9XCJtZW51LWxpbmsgZm9udC0xOCBmb250LW1lZGl1bSBweC0zXCIgb25DbGljaz17KCkgPT4gc2V0ZmlsdGVyKFwidWlcIil9PlVJIERFU0lHTjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZD1cInZpZGVvXCIgY2xhc3NOYW1lPVwibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gcHgtM1wiIG9uQ2xpY2s9eygpID0+IHNldGZpbHRlcihcInZpZGVvXCIpfT5WSURFTyBHUkFQSElDPC9oNT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm14LTAgcHgtMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlciA9PSBcImFsbFwiID8gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoRGF0YSkubWFwKChmdW5jdGlvbihvYmplY3QsIGtleSkgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0cyA9IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhW29iamVjdHNdLm1hcCgoIGRhdGFzLCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9ydGZvbGlvSXRlbXMga2V5PXtrZXl9IGRhdGE9e2RhdGFzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFbZmlsdGVyXS5tYXAoKCBkYXRhcywga2V5ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9ydGZvbGlvSXRlbXMga2V5PXtrZXl9IGRhdGE9e2RhdGFzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1Jvdz4gICAgICAgIFxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbzsiXSwic291cmNlUm9vdCI6IiJ9