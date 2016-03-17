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

var _elements = require('../../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Rating: {
        displayName: 'Rating'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/modules/rating/rating.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/modules/rating/rating.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Rating = _wrapComponent('Rating')((_temp = _class = function (_React$Component) {
    _inherits(Rating, _React$Component);

    function Rating(props) {
        _classCallCheck(this, Rating);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rating).call(this, props));

        _this.state = { value: props.initialValue };
        return _this;
    }

    _createClass(Rating, [{
        key: 'renderChildren',
        value: function renderChildren() {
            var children = [];
            var classes = {
                icon: true
            };

            for (var i = 1; i <= this.props.max; i++) {
                classes.active = this.state.value >= i;

                if (this.props.onChange) {
                    children.push(_react3.default.createElement(_elements.Icon, {
                        className: (0, _classnames2.default)(classes),
                        key: i,
                        onClick: this.handleChange.bind(this, i) }));
                } else {
                    children.push(_react3.default.createElement(_elements.Icon, {
                        className: (0, _classnames2.default)(classes),
                        key: i }));
                }
            }

            return children;
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var heart = _props.heart;
            var max = _props.max;
            var size = _props.size;
            var star = _props.star;
            var initialValue = _props.initialValue;

            var other = _objectWithoutProperties(_props, ['component', 'defaultClasses', 'heart', 'max', 'size', 'star', 'initialValue']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react3.default.createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'handleChange',
        value: function handleChange(index) {
            if (index === this.state.value) {
                this.props.onChange(0);
                return;
            }

            if (this.props.onChange(index) !== false) {
                this.setState({ value: index });
            }
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var _ref;

            return _ref = {
                ui: this.props.defaultClasses
            }, _defineProperty(_ref, this.props.size, !!this.props.size), _defineProperty(_ref, 'star', this.props.star), _defineProperty(_ref, 'heart', this.props.heart), _defineProperty(_ref, 'rating', this.props.defaultClasses), _ref;
        }
    }]);

    return Rating;
}(_react3.default.Component), _class.propTypes = {
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.any,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    heart: _react3.default.PropTypes.bool,
    /*
     * The initial rating.
     * @see https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html
     */
    initialValue: _react3.default.PropTypes.number,
    max: _react3.default.PropTypes.number,
    /*
     * The callback to call when the user clicks an Icon. The icons' active classes are updated unless this function returns false.
     */
    onChange: _react3.default.PropTypes.func,
    size: _react3.default.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    star: _react3.default.PropTypes.bool
}, _class.defaultProps = {
    children: null,
    component: 'div',
    defaultClasses: true,
    initialValue: 0,
    max: 5
}, _temp));

exports.default = Rating;
//# sourceMappingURL=rating.js.map