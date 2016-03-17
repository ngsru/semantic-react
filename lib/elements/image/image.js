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

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Image: {
        displayName: 'Image'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/elements/image/image.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/elements/image/image.jsx',
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
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left'],
    spaced: ['right', 'left']
    // No 'size' here to avoid validateClassProps() picking it up and adding classes
};

// can't do SVG since JSX/React breaks on SVG images

var Image = _wrapComponent('Image')((_temp = _class = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image() {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
    }

    _createClass(Image, [{
        key: 'renderComponent',


        // we don't want the ui in these circumstances
        value: function renderComponent(other) {
            var imageDiv = _react3.default.createElement('img', {
                key: 'image',
                src: this.props.src });

            return _react3.default.createElement(this.props.component || 'div', other, [this.props.children, imageDiv]);
        }
    }, {
        key: 'renderImg',
        value: function renderImg(other) {
            return _react3.default.createElement('img', _extends({ src: this.props.src
            }, other));
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var avatar = _props.avatar;
            var bordered = _props.bordered;
            var centered = _props.centered;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var content = _props.content;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var floated = _props.floated;
            var fluid = _props.fluid;
            var shape = _props.shape;
            var size = _props.size;
            var spaced = _props.spaced;
            var src = _props.src;
            var visible = _props.visible;

            var other = _objectWithoutProperties(_props, ['aligned', 'avatar', 'bordered', 'centered', 'children', 'className', 'component', 'content', 'defaultClasses', 'disabled', 'floated', 'fluid', 'shape', 'size', 'spaced', 'src', 'visible']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            // if a custom tag or a child is passed, it will always render
            // a custom tag/div
            return _react3.default.Children.count(this.props.children) > 0 || this.props.component || this.props.avatar ? this.renderComponent(other) : this.renderImg(other);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                // is there a use-case for an image to be content and still have the ui/image classes?
                ui: this.props.defaultClasses && !this.props.content,

                // types
                content: this.props.content,

                // states
                disabled: this.props.disabled,
                hidden: this.props.visible === 'hidden' || this.props.visible === false,
                visible: this.props.visible === 'visible' || this.props.visible === true,

                // variations
                aligned: this.props.aligned,
                avatar: this.props.avatar,
                bordered: this.props.bordered,
                centered: this.props.centered,
                circular: this.props.shape === 'circular',
                floated: this.props.floated,
                fluid: this.props.fluid,
                rounded: this.props.shape === 'rounded',
                spaced: this.props.spaced,

                // component
                image: this.props.defaultClasses && !this.props.content && this.context.isCommentsChild !== true

            };

            // string types
            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Image;
}(_react3.default.Component), _class.propTypes = {
    aligned: _react3.default.PropTypes.oneOf(['top', 'middle', 'bottom']),
    avatar: _react3.default.PropTypes.bool,
    bordered: _react3.default.PropTypes.bool,
    centered: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.node,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    content: _react3.default.PropTypes.bool,
    defaultClasses: _react3.default.PropTypes.bool,
    disabled: _react3.default.PropTypes.bool,
    floated: _react3.default.PropTypes.oneOf(['right', 'left']),
    fluid: _react3.default.PropTypes.bool,
    shape: _react3.default.PropTypes.oneOf(['circular', 'rounded']),
    size: _react3.default.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    spaced: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['right', 'left']), _react3.default.PropTypes.bool]),
    src: _react3.default.PropTypes.string.isRequired,
    visible: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['hidden', 'visible']), _react3.default.PropTypes.bool])
}, _class.contextTypes = {
    isLabelChild: _react3.default.PropTypes.bool,
    isCommentsChild: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    defaultClasses: true
}, _temp));

exports.default = Image;
//# sourceMappingURL=image.js.map