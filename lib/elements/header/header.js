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
    Header: {
        displayName: 'Header'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/elements/header/header.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/elements/header/header.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

var Header = _wrapComponent('Header')((_temp = _class = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'getChildContext',
        // handles


        // any header/sub header under a header is a sub header
        value: function getChildContext() {
            return {
                isHeaderChild: true
            };
        }

        // we don't want the ui in these circumstances

    }, {
        key: 'render',
        value: function render() {
            var Component = this.props.onClick ? 'a' : 'div';

            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var attached = _props.attached;
            var children = _props.children;
            var className = _props.className;
            var color = _props.color;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var divider = _props.divider;
            var emphasis = _props.emphasis;
            var floated = _props.floated;
            var horizontal = _props.horizontal;
            var inverted = _props.inverted;
            var item = _props.item;
            var size = _props.size;

            var other = _objectWithoutProperties(_props, ['aligned', 'attached', 'children', 'className', 'color', 'component', 'defaultClasses', 'disabled', 'divider', 'emphasis', 'floated', 'horizontal', 'inverted', 'item', 'size']);
            /* eslint-enable no-use-before-define */

            // add class names


            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react3.default.createElement(this.props.component || Component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses && !this.context.isListChild && !this.context.isHeaderChild && !this.context.isMenuChild,

                // types
                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && this.props.aligned == 'center',
                image: (0, _utilities.hasChild)(this.props.children, _elements.Image),
                item: this.context.isMenuChild && this.props.item,

                // states
                disabled: this.props.disabled,

                // variations
                aligned: this.props.aligned && this.props.aligned !== 'justified',
                attached: this.props.attached,
                block: this.props.emphasis == 'block',
                dividing: this.props.emphasis == 'dividing',
                divider: this.props.divider, // makes a header that is also a divider
                floated: this.props.floated,
                horizontal: this.props.horizontal,
                inverted: this.props.inverted,

                // component
                header: this.props.defaultClasses
            };

            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Header;
}(_react3.default.Component), _class.propTypes = {
    aligned: _react3.default.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
    attached: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['bottom', 'top']), _react3.default.PropTypes.bool]),
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.node,
    color: _react3.default.PropTypes.string,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    disabled: _react3.default.PropTypes.bool,
    divider: _react3.default.PropTypes.bool,
    emphasis: _react3.default.PropTypes.oneOf(['dividing', 'block']),
    floated: _react3.default.PropTypes.oneOf(['right', 'left']),
    horizontal: _react3.default.PropTypes.bool,
    inverted: _react3.default.PropTypes.bool,
    item: _react3.default.PropTypes.bool,
    size: _react3.default.PropTypes.string
}, _class.contextTypes = {
    isListChild: _react3.default.PropTypes.bool,
    isHeaderChild: _react3.default.PropTypes.bool,
    isAccordionChild: _react3.default.PropTypes.bool,
    isMenuChild: _react3.default.PropTypes.bool
}, _class.childContextTypes = {
    isHeaderChild: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    attached: false,
    defaultClasses: true,
    item: true }, _temp));

exports.default = Header;
//# sourceMappingURL=header.js.map