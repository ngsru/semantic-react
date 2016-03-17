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

var _elements = require('../../elements');

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    LabeledButton: {
        displayName: 'LabeledButton'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/elements/button/labeledbutton.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/elements/button/labeledbutton.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var LabeledButton = _wrapComponent('LabeledButton')((_temp = _class = function (_React$Component) {
    _inherits(LabeledButton, _React$Component);

    function LabeledButton() {
        _classCallCheck(this, LabeledButton);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LabeledButton).apply(this, arguments));
    }

    _createClass(LabeledButton, [{
        key: 'renderButton',


        /*
         *  Handles buttons with an image for a label
         */
        value: function renderButton() {
            /* eslint-disable no-use-before-define */

            var other = _objectWithoutProperties(this.props, []);
            /* eslint-enable no-use-before-define */


            other.icon = true;
            other.labeled = this.props.labeled || true;

            return _react3.default.createElement(
                _elements.Button,
                other,
                this.props.children
            );
        }

        /*
         *  Wraps any non-label component(s) in a div with
         */

    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var children = [];

            // split children into Label and not Label arrays
            var components = (0, _utilities.spliceChildren)(this.props.children, _elements.Label);

            // labeled is consumed by the parent button
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var labeled = _props.labeled;

            var other = _objectWithoutProperties(_props, ['labeled']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            var icon = _react3.default.createElement(
                'div',
                _extends({}, other, {
                    key: 'icon'
                }),
                components.remaining
            );

            // if Label was spliced at index 0, put it first
            if (components.index == 0) {
                children.push(components.component);
                children.push(icon);
                // otherwise last
            } else {
                    children.push(icon);
                    children.push(components.component);
                }

            return children;
        }
    }, {
        key: 'render',
        value: function render() {
            // this must be an icon label
            if (!(0, _utilities.hasChild)(this.props.children, _elements.Label)) {
                return this.renderButton();
            }

            // most button props are consumed by the child
            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var active = _props2.active;
            var basic = _props2.basic;
            var color = _props2.color;
            var circular = _props2.circular;
            var compact = _props2.compact;
            var fluid = _props2.fluid;
            var inverted = _props2.inverted;
            var size = _props2.size;

            var other = _objectWithoutProperties(_props2, ['active', 'basic', 'color', 'circular', 'compact', 'fluid', 'inverted', 'size']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(other.className);

            // if the label was the first child, its direction must be left
            if ((0, _utilities.hasFirstChild)(this.props.children, _elements.Label)) {
                other.labeled = 'left';

                // labels are on the right by default
            } else {
                    other.labeled = true;
                }

            return _react3.default.createElement(
                _elements.Button,
                other,
                this.renderChildren()
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // position based props
                labeled: this.props.labeled,

                // types
                animated: false,
                basic: this.props.basic,
                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react3.default.Children.count(this.props.children) === 2,
                inverted: this.props.inverted,

                // states
                active: this.props.active,
                loading: this.props.loading,

                // variations
                circular: this.props.circular,
                compact: this.props.compact,
                fluid: false,

                // component
                button: this.props.defaultClasses
            };

            // string types
            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;
            classes[this.props.social] = !!this.props.social;

            return classes;
        }
    }]);

    return LabeledButton;
}(_react3.default.Component), _class.propTypes = {
    active: _react3.default.PropTypes.bool,
    basic: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    circular: _react3.default.PropTypes.bool,
    className: _react3.default.PropTypes.node,
    color: _react3.default.PropTypes.string,
    compact: _react3.default.PropTypes.bool,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    disabled: _react3.default.PropTypes.bool,
    fluid: _react3.default.PropTypes.bool,
    icon: _react3.default.PropTypes.bool,
    inverted: _react3.default.PropTypes.bool,
    labeled: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.string, _react3.default.PropTypes.bool]),
    loading: _react3.default.PropTypes.bool,
    negative: _react3.default.PropTypes.bool,
    positive: _react3.default.PropTypes.bool,
    primary: _react3.default.PropTypes.bool,
    secondary: _react3.default.PropTypes.bool,
    size: _react3.default.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    social: _react3.default.PropTypes.string
}, _class.contextTypes = {
    isAttached: _react3.default.PropTypes.bool,
    hasIconClass: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    defaultClasses: true
}, _temp));

exports.default = LabeledButton;
//# sourceMappingURL=labeledbutton.js.map