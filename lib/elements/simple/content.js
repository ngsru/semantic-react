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
    Content: {
        displayName: 'Content'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/elements/simple/content.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/elements/simple/content.jsx',
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
    floated: ['right', 'left']
};

var Content = _wrapComponent('Content')((_temp = _class = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
    }

    _createClass(Content, [{
        key: 'renderDimmerChild',
        value: function renderDimmerChild() {
            return _react3.default.createElement(
                'div',
                { className: 'center' },
                this.props.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.context.isDimmerChild ? this.renderDimmerChild() : this.props.children;

            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var extra = _props.extra;
            var floated = _props.floated;
            var hidden = _props.hidden;
            var meta = _props.meta;
            var visible = _props.visible;

            var other = _objectWithoutProperties(_props, ['aligned', 'component', 'defaultClasses', 'extra', 'floated', 'hidden', 'meta', 'visible']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react3.default.createElement(this.props.component, other, children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                content: this.props.defaultClasses,

                // variations
                active: this.props.active,
                aligned: this.props.aligned,
                extra: this.props.extra,
                floated: this.props.floated,
                hidden: this.props.hidden,
                meta: this.props.meta,
                visible: this.props.visible
            };

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Content;
}(_react3.default.Component), _class.propTypes = {
    active: _react3.default.PropTypes.bool,
    aligned: _react3.default.PropTypes.string,
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.node,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    extra: _react3.default.PropTypes.bool,
    floated: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.string, _react3.default.PropTypes.bool]),
    hidden: _react3.default.PropTypes.bool,
    meta: _react3.default.PropTypes.bool,
    visible: _react3.default.PropTypes.bool
}, _class.contextTypes = {
    isDimmerChild: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true,
    floated: false
}, _temp));

exports.default = Content;
//# sourceMappingURL=content.js.map