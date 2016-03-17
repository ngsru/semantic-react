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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _modules = require('../../modules');

var _decorator = require('react-onclickoutside/decorator');

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Modal: {
        displayName: 'Modal'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/modules/modal/modal.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/modules/modal/modal.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Modal = _wrapComponent('Modal')((_temp = _class = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

        _this.state = {
            active: false,
            visible: false
        };
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.active != this.props.active && props.active !== this.state.active) {
                if (props.active) {
                    this.setState({
                        active: true,
                        visible: true
                    });
                } else {
                    this.setState({
                        active: false
                    });
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(props, state) {
            // this will happen when we modify the state by clicking the Backdrop
            // we don't want to force a re-render just because the parent component
            // got it's active state changed after the animation completed
            if (props.active === this.props.active && state.active === this.state.active) {
                return false;
            } else {
                return true;
            }
        }
    }, {
        key: 'onAnimationComplete',
        value: function onAnimationComplete() {
            if (!this.state.active) {
                this.setState({
                    visible: false
                });
            }

            this.props.onComplete(this.state.active);
        }
    }, {
        key: 'renderModalBody',
        value: function renderModalBody() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var blurring = _props.blurring;
            var component = _props.component;
            var disabled = _props.disabled;
            var leaveAnimation = _props.leaveAnimation;
            var inverted = _props.inverted;
            var outsideClickClose = _props.outsideClickClose;
            var page = _props.page;
            var enterAnimation = _props.enterAnimation;

            var other = _objectWithoutProperties(_props, ['blurring', 'component', 'disabled', 'leaveAnimation', 'inverted', 'outsideClickClose', 'page', 'enterAnimation']);
            /* eslint-enable no-use-before-define */

            var props = Object.assign(other, {
                animate: this.state.active,
                active: this.state.visible,
                start: this.props.enterAnimation,
                end: this.props.leaveAnimation,
                onComplete: this.onAnimationComplete.bind(this)
            });

            return _react3.default.createElement(_modules.ModalBody, props, this.props.children);
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var basic = _props2.basic;
            var children = _props2.children;
            var component = _props2.component;
            var leaveAnimation = _props2.leaveAnimation;
            var fullscreen = _props2.fullscreen;
            var offset = _props2.offset;
            var outsideClickClose = _props2.outsideClickClose;
            var padding = _props2.padding;
            var size = _props2.size;
            var enterAnimation = _props2.enterAnimation;

            var other = _objectWithoutProperties(_props2, ['basic', 'children', 'component', 'leaveAnimation', 'fullscreen', 'offset', 'outsideClickClose', 'padding', 'size', 'enterAnimation']);
            /* eslint-enable no-use-before-define */


            other.active = this.state.active;

            return _react3.default.createElement(_modules.Dimmer, other, this.renderModalBody());
        }
    }, {
        key: 'handleClickOutside',
        value: function handleClickOutside() {
            if (this.props.outsideClickClose) {
                if (this.state.active) {
                    this.setState({
                        active: false
                    });
                }
            }
        }
    }, {
        key: 'getModalClasses',
        value: function getModalClasses() {
            var classes = {
                // variations
                basic: this.props.basic,
                fullscreen: this.props.fullscreen
            };

            classes[this.props.size] = !!this.props.size;

            return classes;
        }
    }]);

    return Modal;
}(_react3.default.Component), _class.propTypes = {
    active: _react3.default.PropTypes.bool,
    basic: _react3.default.PropTypes.bool,
    blurring: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.func, _react3.default.PropTypes.string]),
    disabled: _react3.default.PropTypes.bool,
    enterAnimation: _react3.default.PropTypes.shape({
        duration: _react3.default.PropTypes.number,
        easing: _react3.default.PropTypes.string,
        from: _react3.default.PropTypes.object,
        to: _react3.default.PropTypes.object
    }),
    fullscreen: _react3.default.PropTypes.bool,
    inverted: _react3.default.PropTypes.bool,
    leaveAnimation: _react3.default.PropTypes.shape({
        duration: _react3.default.PropTypes.number,
        easing: _react3.default.PropTypes.string,
        from: _react3.default.PropTypes.object,
        to: _react3.default.PropTypes.object
    }),
    offset: _react3.default.PropTypes.number,
    onComplete: _react3.default.PropTypes.func,
    outsideClickClose: _react3.default.PropTypes.bool,
    padding: _react3.default.PropTypes.number,
    page: _react3.default.PropTypes.bool,
    size: _react3.default.PropTypes.string
}, _class.defaultProps = {
    component: 'div',
    enterAnimation: {
        duration: 500,
        easing: 'in-ease',
        from: {
            opacity: 0,
            transform: 'scale(0,0)',
            WebkitTransform: 'scale(0,0)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1,1)',
            WebkitTransform: 'scale(1,1)'
        }
    },
    leaveAnimation: {
        duration: 500,
        easing: 'in-ease',
        from: {
            opacity: 1,
            transform: 'scale(1,1)',
            WebkitTransform: 'scale(1,1)'
        },
        to: {
            opacity: 0,
            transform: 'scale(0,0)',
            WebkitTransform: 'scale(0,0)'
        }
    },
    onComplete: function noop() {},
    outsideClickClose: true,
    page: true
}, _temp));

// Need this trick for react-docgen


Modal = (0, _decorator2.default)(Modal);
exports.default = Modal;
//# sourceMappingURL=modal.js.map