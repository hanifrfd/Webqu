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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("apps"),
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
  }, console.log(filter), // filter != "all" ?          
  // Data[filter].map(( datas, key ) => (
  //     <PortfolioItems key={key} data={datas}></PortfolioItems>
  // ))
  // :
  Object.keys(_data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"]).map(function (key, index) {
    var _this2 = this;

    _data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"][key].map(function (datas, key) {
      return __jsx(_component_PortfolioItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key,
        data: datas,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }
      });
    });
  }))));
};

_s(Portfolio, "z73sT4v3NwlqzBjBHbxsIBclDiw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGF5b3V0L1BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJQb3J0Zm9saW8iLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldGZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiRGF0YSIsIm1hcCIsImtleSIsImluZGV4IiwiZGF0YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsTUFBRCxDQURoQjtBQUFBLE1BQ2JDLE1BRGE7QUFBQSxNQUNMQyxTQURLOztBQUdwQixTQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsZ0JBQXJCO0FBQXNDLFNBQUssTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxJQUFSO0FBQWEsYUFBUyxFQUFDLDZCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksTUFBRSxFQUFDLEtBQVA7QUFBYSxhQUFTLEVBQUMseUNBQXZCO0FBQWlFLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFFSTtBQUFJLE1BQUUsRUFBQyxNQUFQO0FBQWMsYUFBUyxFQUFDLG9DQUF4QjtBQUE2RCxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsTUFBRCxDQUFmO0FBQUEsS0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0k7QUFBSSxNQUFFLEVBQUMsSUFBUDtBQUFZLGFBQVMsRUFBQyxvQ0FBdEI7QUFBMkQsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLEtBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosRUFJSTtBQUFJLE1BQUUsRUFBQyxPQUFQO0FBQWUsYUFBUyxFQUFDLG9DQUF6QjtBQUE4RCxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixDQUZKLENBREosRUFVSSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVosQ0FGSixFQUtJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUksUUFBTSxDQUFDQyxJQUFQLENBQVlDLDREQUFaLEVBQWtCQyxHQUFsQixDQUF1QixVQUFTQyxHQUFULEVBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDeENILGdFQUFJLENBQUNFLEdBQUQsQ0FBSixDQUFVRCxHQUFWLENBQWMsVUFBRUcsS0FBRixFQUFTRixHQUFUO0FBQUEsYUFDVixNQUFDLGlFQUFEO0FBQWdCLFdBQUcsRUFBRUEsR0FBckI7QUFBMEIsWUFBSSxFQUFFRSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRFU7QUFBQSxLQUFkO0FBR0gsR0FKRCxDQVZKLENBVkosQ0FESixDQURKO0FBaUNILENBcENEOztHQUFNWixTOztLQUFBQSxTO0FBc0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZmQzMjFlOTdkZmRkMmJiNzE4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29sLCBSb3csIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IFBvcnRmb2xpb0l0ZW1zIGZyb20gJy4uLy4uL2NvbXBvbmVudC9Qb3J0Zm9saW9JdGVtcydcclxuXHJcbmltcG9ydCBEYXRhIGZyb20gJy4uLy4uL2RhdGEvcG9ydGZvbGlvLWRhdGEnXHJcblxyXG5jb25zdCBQb3J0Zm9saW8gPSAoKSA9PiB7ICAgICAgICBcclxuICAgIGNvbnN0IFtmaWx0ZXIsIHNldGZpbHRlcl0gPSB1c2VTdGF0ZShcImFwcHNcIikgICAgXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInB0LTUgcHgtMCBweS0zXCIgZmx1aWQ+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXgtMCBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiMTJcIiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsYWNrIHB5LTUgdGV4dC1jZW50ZXJcIj5Qb3J0Zm9saW88L2gyPiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBibGFjazIgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgaWQ9XCJhbGxcIiBjbGFzc05hbWU9XCJtZW51LWxpbmsgZm9udC0xOCBmb250LW1lZGl1bSBibHVlIHB4LTNcIiBvbkNsaWNrPXsoKSA9PiBzZXRmaWx0ZXIoXCJhbGxcIikgfT5BTEw8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgaWQ9XCJhcHBzXCIgY2xhc3NOYW1lPVwibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gcHgtM1wiIG9uQ2xpY2s9eygpID0+IHNldGZpbHRlcihcImFwcHNcIil9PkFQUFM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgaWQ9XCJ1aVwiIGNsYXNzTmFtZT1cIm1lbnUtbGluayBmb250LTE4IGZvbnQtbWVkaXVtIHB4LTNcIiBvbkNsaWNrPXsoKSA9PiBzZXRmaWx0ZXIoXCJ1aVwiKX0+VUkgREVTSUdOPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwidmlkZW9cIiBjbGFzc05hbWU9XCJtZW51LWxpbmsgZm9udC0xOCBmb250LW1lZGl1bSBweC0zXCIgb25DbGljaz17KCkgPT4gc2V0ZmlsdGVyKFwidmlkZW9cIil9PlZJREVPIEdSQVBISUM8L2g1PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXgtMCBweC0wIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyICE9IFwiYWxsXCIgPyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhW2ZpbHRlcl0ubWFwKCggZGF0YXMsIGtleSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPFBvcnRmb2xpb0l0ZW1zIGtleT17a2V5fSBkYXRhPXtkYXRhc30+PC9Qb3J0Zm9saW9JdGVtcz5cclxuICAgICAgICAgICAgICAgICAgICAvLyApKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDpcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhEYXRhKS5tYXAoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YVtrZXldLm1hcCgoIGRhdGFzLCBrZXkgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9ydGZvbGlvSXRlbXMga2V5PXtrZXl9IGRhdGE9e2RhdGFzfT48L1BvcnRmb2xpb0l0ZW1zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUm93PiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvOyJdLCJzb3VyY2VSb290IjoiIn0=