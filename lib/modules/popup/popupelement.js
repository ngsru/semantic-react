'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.POSITIONS = undefined;

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

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    PopupElement: {
        displayName: 'PopupElement'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/modules/popup/popupelement.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/modules/popup/popupelement.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var POSITIONS = exports.POSITIONS = ['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'];

/**
 * Popup component without animation transitions
 */

var PopupElement = _wrapComponent('PopupElement')((_temp = _class = function (_React$Component) {
    _inherits(PopupElement, _React$Component);

    function PopupElement() {
        _classCallCheck(this, PopupElement);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PopupElement).apply(this, arguments));
    }

    _createClass(PopupElement, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var className = _props.className;
            var component = _props.component;

            var other = _objectWithoutProperties(_props, ['className', 'component']);
            /* eslint-enable no-use-before-define */
            // other.style = Object.assign({}, style, pStyle);

            if (this.props.component === PopupElement) {
                component = 'div';
            } else {
                component = this.props.component;
            }

            // Save ref to HTML element
            other.ref = 'popup';
            other.className = (0, _classnames2.default)(className, this.getClasses());

            return _react3.default.createElement(component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                ui: this.props.defaultClasses,
                popup: this.props.defaultClasses,
                basic: this.props.basic,
                fluid: this.props.fluid,
                flowing: this.props.flowing,
                inverted: this.props.inverted,
                wide: this.props.wide,
                visible: true
            };

            if (this.props.wide) {
                // very wide
                if (typeof this.props.wide === 'string') {
                    classes['very wide'] = true;
                } else {
                    classes['wide'] = true;
                }
            }

            if (this.props.size) {
                classes[this.props.size] = true;
            }

            var position = this.props.position.split(' ');

            position.forEach(function (pos) {
                classes[pos] = true;
            });

            return classes;
        }
    }]);

    return PopupElement;
}(_react3.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
    /**
     * Basic popup variation
     */
    basic: _react3.default.PropTypes.bool,
    /**
     * Fluid popup
     */
    fluid: _react3.default.PropTypes.bool,
    /**
     * No maximum width and continue to flow to fit its content
     */
    flowing: _react3.default.PropTypes.bool,
    /**
     * Inverted popup
     */
    inverted: _react3.default.PropTypes.bool,
    /**
     * Popup size
     */
    size: _react3.default.PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'huge']),
    /**
     * Make content of popup wide
     */
    wide: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.bool, _react3.default.PropTypes.string]),
    /**
     * Popup position
     */
    position: _react3.default.PropTypes.oneOf(['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'])
}), _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    position: 'top left'
}), _temp));

exports.default = PopupElement;
//# sourceMappingURL=popupelement.js.map