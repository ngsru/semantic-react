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

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

var _tabtitle = require('./tabtitle');

var _tabtitle2 = _interopRequireDefault(_tabtitle);

var _views = require('../../views');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Tabs: {
        displayName: 'Tabs'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/modules/tab/tabs.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/modules/tab/tabs.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Tabs = _wrapComponent('Tabs')((_temp = _class = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

        _this.state = {
            active: 0
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setActiveChild();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setActiveChild();
        }
    }, {
        key: 'onItemClick',
        value: function onItemClick(index) {
            this.setState({
                active: index
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            return _react3.default.Children.map(this.props.children, function (child, index) {
                if (child.type === _tab2.default) {
                    return _react3.default.cloneElement(child, {
                        active: _this2.state.active === index,
                        type: _this2.props.type
                    }, child.props.children);
                }
            });
        }
    }, {
        key: 'renderTitles',
        value: function renderTitles() {
            var _this3 = this;

            var tabs = [];

            _react3.default.Children.forEach(this.props.children, function (child, index) {
                if (child.type == _tab2.default) {
                    var props = {};

                    props.active = _this3.state.active === index;
                    props.key = index;
                    props.onClick = _this3.onItemClick.bind(_this3, index);

                    tabs.push(_react3.default.createElement(_views.Item, props, child.props.header));
                }
            });

            return _react3.default.createElement(
                _tabtitle2.default,
                {
                    key: 'titles',
                    type: this.props.type
                },
                tabs
            );
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var position = _props.position;
            var type = _props.type;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'position', 'type']);
            /* eslint-enable no-use-before-define */

            return _react3.default.createElement(this.props.component, other, [this.renderTitles(), this.renderChildren()]);
        }
    }, {
        key: 'setActiveChild',
        value: function setActiveChild() {
            var _this4 = this;

            _react3.default.Children.forEach(this.props.children, function (child, index) {
                if (child.type === _tab2.default && child.props.active) {
                    _this4.setState({
                        active: index
                    });
                }
            });
        }
    }]);

    return Tabs;
}(_react3.default.Component), _class.propTypes = {
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.any,
    component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.func, _react3.default.PropTypes.string]),
    defaultClasses: _react3.default.PropTypes.bool,
    position: _react3.default.PropTypes.oneOf(['top', 'bottom']),
    type: _react3.default.PropTypes.oneOf(['tab', 'menu', 'pill'])
}, _class.defaultProps = {
    component: 'div',
    type: 'tab'
}, _temp));

exports.default = Tabs;
//# sourceMappingURL=tabs.js.map