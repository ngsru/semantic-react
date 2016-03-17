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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Images: {
        displayName: 'Images'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/elements/image/images.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/elements/image/images.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Images = _wrapComponent('Images')((_temp = _class = function (_React$Component) {
    _inherits(Images, _React$Component);

    function Images() {
        _classCallCheck(this, Images);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Images).apply(this, arguments));
    }

    _createClass(Images, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var avatar = _props.avatar;
            var bordered = _props.bordered;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var shape = _props.shape;
            var size = _props.size;
            var visible = _props.visible;

            var other = _objectWithoutProperties(_props, ['avatar', 'bordered', 'children', 'className', 'component', 'defaultClasses', 'disabled', 'shape', 'size', 'visible']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react3.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // types

                // states
                hidden: this.props.visible === 'hidden' || this.props.visible === false,
                disabled: this.props.disabled,

                // variations
                avatar: this.props.avatar,
                bordered: this.props.bordered,
                circular: this.props.shape === 'circular',
                rounded: this.props.shape === 'rounded',

                // component
                images: this.props.defaultClasses
            };

            classes[this.props.size] = !!this.props.size;

            return classes;
        }
    }]);

    return Images;
}(_react3.default.Component), _class.propTypes = {
    avatar: _react3.default.PropTypes.bool,
    bordered: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.node,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    disabled: _react3.default.PropTypes.bool,
    shape: _react3.default.PropTypes.oneOf(['circular', 'rounded']),
    size: _react3.default.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    visible: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['hidden', 'visible']), _react3.default.PropTypes.bool])
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp));

exports.default = Images;
//# sourceMappingURL=images.js.map