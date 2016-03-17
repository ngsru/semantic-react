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

var _utilities = require('../../utilities');

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Label: {
        displayName: 'Label'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/elements/label/label.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/elements/label/label.jsx',
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
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    corner: ['left', 'right'],
    pointing: ['below', 'left', 'right'],
    ribbon: ['right']
};

var Label = _wrapComponent('Label')((_temp = _class = function (_React$Component) {
    _inherits(Label, _React$Component);

    function Label() {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).apply(this, arguments));
    }

    _createClass(Label, [{
        key: 'getChildContext',


        // any header/sub header under a header is a sub header
        value: function getChildContext() {
            return {
                isLabelChild: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            // if it's attached or animated use a div instead of a button

            var Component = this.props.onClick ? 'a' : 'div';

            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var defaultClasses = _props.defaultClasses;
            var left = _props.left;
            var right = _props.right;
            var corner = _props.corner;
            var label = _props.label;
            var attached = _props.attached;
            var image = _props.image;
            var color = _props.color;
            var pointing = _props.pointing;
            var ribbon = _props.ribbon;
            var tag = _props.tag;
            var link = _props.link;
            var circular = _props.circular;
            var size = _props.size;

            var other = _objectWithoutProperties(_props, ['defaultClasses', 'left', 'right', 'corner', 'label', 'attached', 'image', 'color', 'pointing', 'ribbon', 'tag', 'link', 'circular', 'size']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react3.default.createElement(this.props.component || Component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses && !this.context.isCardsChild && !this.context.isProgressChild,

                // types
                attached: this.props.attached,
                corner: this.props.corner,
                floating: this.props.floating,
                image: this.props.image || (0, _utilities.hasChild)(this.props.children, _elements.Image),
                pointing: this.props.pointing,
                ribbon: this.props.ribbon,
                tag: this.props.tag,
                basic: this.props.basic,

                // variations
                circular: this.props.circular,

                // component
                label: this.props.defaultClasses
            };

            // handle mixed string/bool props
            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Label;
}(_react3.default.Component), _class.propTypes = {
    attached: _react3.default.PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),
    basic: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    circular: _react3.default.PropTypes.bool,
    className: _react3.default.PropTypes.node,
    color: _react3.default.PropTypes.string,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    corner: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['left', 'right']), _react3.default.PropTypes.bool]),
    defaultClasses: _react3.default.PropTypes.bool,
    floating: _react3.default.PropTypes.bool,
    image: _react3.default.PropTypes.bool,
    label: _react3.default.PropTypes.bool,
    left: _react3.default.PropTypes.bool,
    link: _react3.default.PropTypes.bool,
    onClick: _react3.default.PropTypes.func,
    pointing: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['below', 'left', 'right']), _react3.default.PropTypes.bool]),
    ribbon: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['right']), _react3.default.PropTypes.bool]),
    right: _react3.default.PropTypes.bool,
    size: _react3.default.PropTypes.string,
    tag: _react3.default.PropTypes.bool
}, _class.contextTypes = {
    isCardsChild: _react3.default.PropTypes.bool,
    isProgressChild: _react3.default.PropTypes.bool
}, _class.childContextTypes = {
    isLabelChild: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    corner: false,
    defaultClasses: true,
    pointing: false,
    ribbon: false
}, _temp));

exports.default = Label;
//# sourceMappingURL=label.js.map