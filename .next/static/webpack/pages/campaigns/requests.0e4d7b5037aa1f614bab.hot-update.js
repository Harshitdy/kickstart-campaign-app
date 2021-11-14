"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./component/reqeustRow.js":
/*!*********************************!*\
  !*** ./component/reqeustRow.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_blockchain_udemy_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(F_blockchain_udemy_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "F:\\blockchain\\udemy\\kickstart\\component\\reqeustRow.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var RequestRow = /*#__PURE__*/function (_Component) {
  (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    var _this;

    (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "state", {
      errorMessage: "",
      loading: false
    });

    (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onApprove", /*#__PURE__*/(0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/F_blockchain_udemy_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
      var campaign, accounts;
      return F_blockchain_udemy_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context.prev = 1;
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__.default)(_this.props.address);
              _context.next = 5;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes__WEBPACK_IMPORTED_MODULE_12__.Router.replaceRoute("/campaigns/".concat(_this.props.address, "/requests"));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 14:
              _this.setState({
                loading: false
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    })));

    (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onFinalize", /*#__PURE__*/(0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/F_blockchain_udemy_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2() {
      var campaign, accounts;
      return F_blockchain_udemy_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context2.prev = 1;
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__.default)(_this.props.address);
              _context2.next = 5;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequests(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes__WEBPACK_IMPORTED_MODULE_12__.Router.replaceRoute("/campaigns/".concat(_this.props.address, "/requests"));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);

              _this.setState({
                errorMessage: _context2.t0.message
              });

            case 14:
              _this.setState({
                loading: false
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 11]]);
    })));

    return _this;
  }

  (0,F_blockchain_udemy_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Table.Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Table.Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      var readyToFinalize = request.approvalCount > approversCount / 2;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Row, {
        disabled: request.complete,
        positive: readyToFinalize && !request.complete,
        error: !!this.state.errorMessage,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Cell, {
          children: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Cell, {
          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.utils.fromWei(request.value, "ether")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Cell, {
          children: request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Cell, {
          children: [request.approvalCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Cell, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {
            error: true,
            header: "Oops!",
            content: this.state.errorMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 9
          }, this), request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Cell, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {
            error: true,
            header: "Oops!",
            content: this.state.errorMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
            color: "teal",
            basic: true,
            onClick: this.onFinalize,
            loading: this.state.loading,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjBlNGQ3YjUwMzdhYTFmNjE0YmFiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRU1TOzs7Ozs7Ozs7Ozs7Ozs7O29SQUNJO0FBQ05DLE1BQUFBLFlBQVksRUFBRSxFQURSO0FBRU5DLE1BQUFBLE9BQU8sRUFBRTtBQUZIOztpaUJBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1Ysb0JBQUtDLFFBQUwsQ0FBYztBQUFDRCxnQkFBQUEsT0FBTyxFQUFFLElBQVY7QUFBZ0JELGdCQUFBQSxZQUFZLEVBQUU7QUFBOUIsZUFBZDs7QUFEVTtBQUdGRyxjQUFBQSxRQUhFLEdBR1NOLDREQUFRLENBQUMsTUFBS08sS0FBTCxDQUFXQyxPQUFaLENBSGpCO0FBQUE7QUFBQSxxQkFJZVQsb0VBQUEsRUFKZjs7QUFBQTtBQUlGWSxjQUFBQSxRQUpFO0FBQUE7QUFBQSxxQkFLRkwsUUFBUSxDQUFDTSxPQUFULENBQWlCQyxjQUFqQixDQUFnQyxNQUFLTixLQUFMLENBQVdPLEVBQTNDLEVBQStDQyxJQUEvQyxDQUFvRDtBQUN4REMsZ0JBQUFBLElBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFEMEMsZUFBcEQsQ0FMRTs7QUFBQTtBQVNSVixjQUFBQSx5REFBQSxzQkFBa0MsTUFBS00sS0FBTCxDQUFXQyxPQUE3QztBQVRRO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVdSLG9CQUFLSCxRQUFMLENBQWM7QUFBRUYsZ0JBQUFBLFlBQVksRUFBRSxZQUFJZTtBQUFwQixlQUFkOztBQVhRO0FBYVYsb0JBQUtiLFFBQUwsQ0FBYztBQUFDRCxnQkFBQUEsT0FBTyxFQUFFO0FBQVYsZUFBZDs7QUFiVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7a2lCQWVDO0FB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QUFLLE1BQWQ7QUFBZSxrQkFBTSxFQUFDLE9BQXRCO0FBQThCLG1CQUFPLEVBQUUsS0FBS04sS0FBTCxDQUFXeEI7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVHbUIsT0FBTyxDQUFDSSxRQUFSLEdBQW1CLElBQW5CLGdCQUNDLCtEQUFDLHNEQUFEO0FBQVEsaUJBQUssRUFBQyxNQUFkO0FBQXFCLGlCQUFLLE1BQTFCO0FBQTJCLG1CQUFPLEVBQUUsS0FBS1EsVUFBekM7QUFBcUQsbUJBQU8sRUFBRSxLQUFLUCxLQUFMLENBQVd2QixPQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBaUNEOzs7O0VBMUVzQlY7O0FBNkV6QiwrREFBZVEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvcmVxZXVzdFJvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgTWVzc2FnZSwgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIG9uQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xyXG4gIH07XHJcbiAgb25GaW5hbGl6ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmZpbmFsaXplUmVxdWVzdHModGhpcy5wcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XHJcbiAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICA8Um93XHJcbiAgICAgICAgZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9XHJcbiAgICAgICAgcG9zaXRpdmU9e3JlYWR5VG9GaW5hbGl6ZSAmJiAhcmVxdWVzdC5jb21wbGV0ZX1cclxuICAgICAgICBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDZWxsPntpZH08L0NlbGw+XHJcbiAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKX08L0NlbGw+XHJcbiAgICAgICAgPENlbGw+e3JlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgIHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3thcHByb3ZlcnNDb3VudH1cclxuICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgPENlbGw+XHJcbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPlxyXG4gICAgICAgICAge3JlcXVlc3QuY29tcGxldGUgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZX0+XHJcbiAgICAgICAgICAgICAgQXBwcm92ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfS8+XHJcbiAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ0ZWFsXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkZpbmFsaXplfSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICAgIEZpbmFsaXplXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NlbGw+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiTWVzc2FnZSIsIlRhYmxlIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwiZmluYWxpemVSZXF1ZXN0cyIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJzdGF0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJvbkFwcHJvdmUiLCJvbkZpbmFsaXplIl0sInNvdXJjZVJvb3QiOiIifQ==