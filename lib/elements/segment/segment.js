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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Segment: {
        displayName: 'Segment'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/elements/segment/segment.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/elements/segment/segment.jsx',
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
    aligned: ['right', 'left', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

var Segment = _wrapComponent('Segment')((_temp = _class = function (_React$Component) {
    _inherits(Segment, _React$Component);

    function Segment() {
        _classCallCheck(this, Segment);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Segment).apply(this, arguments));
    }

    _createClass(Segment, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var component = _props.component;
            var attached = _props.attached;
            var basic = _props.basic;
            var blurring = _props.blurring;
            var children = _props.children;
            var className = _props.className;
            var clearing = _props.clearing;
            var color = _props.color;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var emphasis = _props.emphasis;
            var floated = _props.floated;
            var index = _props.index;
            var inverted = _props.inverted;
            var loading = _props.loading;
            var vertical = _props.vertical;
            var zIndex = _props.zIndex;

            var other = _objectWithoutProperties(_props, ['aligned', 'component', 'attached', 'basic', 'blurring', 'children', 'className', 'clearing', 'color', 'defaultClasses', 'disabled', 'emphasis', 'floated', 'index', 'inverted', 'loading', 'vertical', 'zIndex']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
            other.style = this.getStyle();

            if (typeof this.props.component == 'function' && this.props.component.displayName == 'Segment') {
                component = 'div';
            } else {
                component = this.props.component;
            }

            return _react3.default.createElement(component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // positioning
                right: false,
                left: false,
                center: false,
                top: false,
                bottom: false,

                // types
                raised: this.props.type === 'raised',
                stacked: this.props.type === 'stacked',
                piled: this.props.type === 'piled',
                vertical: this.props.vertical,

                // states
                disabled: this.props.disabled,
                loading: this.props.loading,

                // variations
                aligned: this.props.aligned,
                attached: this.props.attached,
                basic: this.props.basic,
                blurring: this.props.blurring,
                clearing: this.props.clearing,
                compact: this.props.spacing === 'fitted',
                container: this.props.container,
                floated: this.props.floated,
                inverted: this.props.inverted,
                padded: this.props.spacing === 'padded',
                primary: this.props.emphasis === 'primary',
                secondary: this.props.emphasis === 'secondary',
                tertiary: this.props.emphasis === 'tertiary',

                // component
                segment: this.props.defaultClasses
            };

            classes[this.props.color] = !!this.props.color;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }, {
        key: 'getStyle',
        value: function getStyle() {
            var style = this.props.style;

            if (this.props.type === 'piled' && !style.zIndex) {
                style.zIndex = this.props.zIndex || 0;
            }

            return style;
        }
    }]);

    return Segment;
}(_react3.default.Component), _class.propTypes = {
    aligned: _react3.default.PropTypes.oneOf(['right', 'left', 'center']),
    attached: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['bottom', 'top']), _react3.default.PropTypes.bool]),
    basic: _react3.default.PropTypes.bool,
    blurring: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.any,
    className: _react3.default.PropTypes.node,
    clearing: _react3.default.PropTypes.bool,
    color: _react3.default.PropTypes.string,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    container: _react3.default.PropTypes.bool,
    defaultClasses: _react3.default.PropTypes.bool,
    disabled: _react3.default.PropTypes.bool,
    emphasis: _react3.default.PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    floated: _react3.default.PropTypes.oneOf(['right', 'left']),
    index: _react3.default.PropTypes.number,
    inverted: _react3.default.PropTypes.bool,
    loading: _react3.default.PropTypes.bool,
    spacing: _react3.default.PropTypes.oneOf(['fitted', 'padded']),
    style: _react3.default.PropTypes.object,
    type: _react3.default.PropTypes.oneOf(['raised', 'stacked', 'piled']),
    vertical: _react3.default.PropTypes.bool,
    zIndex: _react3.default.PropTypes.number
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true,
    attached: false,
    style: {}
}, _temp));

exports.default = Segment;
//# sourceMappingURL=segment.js.map