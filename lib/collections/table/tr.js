'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _td = require('./td');

var _td2 = _interopRequireDefault(_td);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tr = function Tr(props) {
    return _react2.default.createElement(
        _td2.default,
        _extends({}, props, {
            component: props.component
        }),
        props.children
    );
};

Tr.propTypes = {
    children: _react2.default.PropTypes.node,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
};

Tr.defaultProps = {
    component: 'tr'
};

exports.default = Tr;
//# sourceMappingURL=tr.js.map