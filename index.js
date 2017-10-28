"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var ShadowWrapper = (function (_super) {
    __extends(ShadowWrapper, _super);
    function ShadowWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShadowWrapper.prototype.render = function () {
        return (this.props.children);
    };
    return ShadowWrapper;
}(React.Component));
exports["default"] = ShadowWrapper;
