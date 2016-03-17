'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('/home/anatoly/work/semantic-react/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/home/anatoly/work/semantic-react/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/home/anatoly/work/semantic-react/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Checkbox: {
        displayName: 'Checkbox'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/modules/checkbox/checkbox.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/modules/checkbox/checkbox.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Checkbox = _wrapComponent('Checkbox')((_temp = _class = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));

        _this.state = {
            active: _this.props.checked
        };
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'onClick',
        value: function onClick() {
            if (!this.state.active || this.state.active && !this.props.radio) {
                this.setState({
                    active: !this.state.active
                });
            }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var defaultClasses = _props.defaultClasses;
            var className = _props.className;
            var onClick = _props.onClick;
            var radio = _props.radio;
            var slider = _props.slider;
            var toggle = _props.toggle;
            var component = _props.component;
            var readOnly = _props.readOnly;
            var checked = _props.checked;
            var disabled = _props.disabled;

            var other = _objectWithoutProperties(_props, ['children', 'defaultClasses', 'className', 'onClick', 'radio', 'slider', 'toggle', 'component', 'readOnly', 'checked', 'disabled']);
            /* eslint-enable no-use-before-define */

            var childElements = [_react3.default.DOM.input(_extends({
                type: 'checkbox',
                key: 'input',
                className: 'hidden',
                checked: this.state.active || this.props.checked,
                readOnly: true
            }, other)), _react3.default.DOM.label({
                key: 'label'
            }, this.props.children)];

            return childElements;
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var component = _props2.component;
            var defaultClasses = _props2.defaultClasses;
            var name = _props2.name;

            var other = _objectWithoutProperties(_props2, ['component', 'defaultClasses', 'name']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
            other.onClick = typeof this.props.onClick === 'function' ? this.props.onClick : this.onClick.bind(this);

            return _react3.default.createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                ui: this.props.defaultClasses,
                checkbox: this.props.defaultClasses,

                // positioning

                // types
                radio: this.props.radio,

                // variations
                fitted: this.props.fitted,
                slider: this.props.slider,
                toggle: this.props.toggle,

                // state
                'read-only': this.props.readOnly,
                checked: this.state.active || this.props.checked,
                disabled: this.props.disabled,
                indeterminate: this.props.indeterminate
            };
        }
    }]);

    return Checkbox;
}(_react2.Component), _class.propTypes = {
    checked: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.any,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    disabled: _react3.default.PropTypes.bool,
    fitted: _react3.default.PropTypes.bool,
    indeterminate: _react3.default.PropTypes.bool,
    name: _react3.default.PropTypes.string,
    onClick: _react3.default.PropTypes.func,
    radio: _react3.default.PropTypes.bool,
    readOnly: _react3.default.PropTypes.bool,
    slider: _react3.default.PropTypes.bool,
    toggle: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp));

exports.default = Checkbox;
//# sourceMappingURL=checkbox.js.map