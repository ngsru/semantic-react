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

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _utilities = require('../../utilities');

var _elements = require('../../elements');

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
    Dimmer: {
        displayName: 'Dimmer'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/modules/dimmer/dimmer.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/modules/dimmer/dimmer.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Dimmer = _wrapComponent('Dimmer')((_temp = _class = function (_React$Component) {
    _inherits(Dimmer, _React$Component);

    function Dimmer() {
        _classCallCheck(this, Dimmer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dimmer).apply(this, arguments));
    }

    _createClass(Dimmer, [{
        key: 'getChildContext',


        // This forces <Content> to add a centered div below it.
        value: function getChildContext() {
            return {
                isDimmerChild: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var active = _props.active;
            var children = _props.children;
            var component = _props.component;
            var enterAnimation = _props.enterAnimation;
            var leaveAnimation = _props.leaveAnimation;
            var page = _props.page;
            var inverted = _props.inverted;

            var other = _objectWithoutProperties(_props, ['active', 'children', 'component', 'enterAnimation', 'leaveAnimation', 'page', 'inverted']);
            /* eslint-enable no-use-before-define */

            var Component = component;
            other.className = (0, _classnames2.default)(other.className, this.getClasses());
            return _react3.default.createElement(
                _reactMotionUiPack2.default,
                { component: false,
                    enter: enterAnimation,
                    leave: leaveAnimation
                },
                active && _react3.default.createElement(
                    Component,
                    _extends({}, other, {
                        key: 'dimmer'
                    }),
                    (0, _utilities.hasChild)(children, _elements.Loader) ? children : _react3.default.createElement(
                        _elements.Content,
                        null,
                        children
                    )
                )
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                ui: this.props.defaultClasses,
                dimmer: this.props.defaultClasses,
                active: this.props.active,
                page: this.props.page,
                inverted: this.props.inverted
            };
        }
    }]);

    return Dimmer;
}(_react3.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
    /**
     * Hide/Display dimmer
     */
    active: _react3.default.PropTypes.bool,
    /**
     * Enter animation
     */
    enterAnimation: _react3.default.PropTypes.object,
    /**
     * Leave animation
     */
    leaveAnimation: _react3.default.PropTypes.object,
    /**
     * Page dimmer. Doesn't require dimmable section
     */
    page: _react3.default.PropTypes.bool,
    /**
     * Inverted dimmer
     */
    inverted: _react3.default.PropTypes.bool
}), _class.childContextTypes = {
    isDimmerChild: _react3.default.PropTypes.bool
}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    active: false,
    enterAnimation: {
        opacity: 1
    },
    leaveAnimation: {
        opacity: 0
    },
    page: false,
    inverted: false
}), _temp));

exports.default = Dimmer;
//# sourceMappingURL=dimmer.js.map