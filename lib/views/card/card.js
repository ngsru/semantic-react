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
    Card: {
        displayName: 'Card'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/views/card/card.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/views/card/card.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Card = _wrapComponent('Card')((_temp = _class = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));
    }

    _createClass(Card, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isCardChild: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var centered = _props.centered;
            var col = _props.col;
            var color = _props.color;
            var doubling = _props.doubling;
            var defaultClasses = _props.defaultClasses;
            var fluid = _props.fluid;

            var other = _objectWithoutProperties(_props, ['centered', 'col', 'color', 'doubling', 'defaultClasses', 'fluid']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react3.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses && !this.context.isChildCard,

                // component
                card: this.props.defaultClasses,

                // variations
                centered: this.props.centered,
                doubling: this.props.doubling,
                color: this.props.color,
                fluid: this.props.fluid,
                link: this.props.link || this.props.onClick
            };

            classes[this.props.color] = !!this.props.color;
            classes[this.props.col] = !!this.props.col;
            classes[this.props.doubling] = !!this.props.doubling;

            return classes;
        }
    }]);

    return Card;
}(_react3.default.Component), _class.propTypes = {
    centered: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.node,
    col: _react3.default.PropTypes.string,
    color: _react3.default.PropTypes.string,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    doubling: _react3.default.PropTypes.string,
    fluid: _react3.default.PropTypes.bool,
    link: _react3.default.PropTypes.bool,
    onClick: _react3.default.PropTypes.func
}, _class.contextTypes = {
    isCardChild: _react3.default.PropTypes.bool
}, _class.childContextTypes = {
    isCardChild: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp));

exports.default = Card;
//# sourceMappingURL=card.js.map