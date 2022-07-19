"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Modal.css");

var _jsxRuntime = require("react/jsx-runtime");

function Modal(_ref) {
  var id = _ref.id,
      showModal = _ref.showModal,
      closeModal = _ref.closeModal,
      parameter = _ref.parameter,
      message = _ref.message;
  // Template
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: showModal === true && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal",
      id: id,
      style: parameter,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "modal-close-icon",
          onClick: closeModal,
          children: "\u2716"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: message
        })]
      })
    })
  });
}

var _default = Modal;
exports.default = _default;