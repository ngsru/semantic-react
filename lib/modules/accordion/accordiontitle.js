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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    AccordionTitle: {
        displayName: 'AccordionTitle'
    }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/modules/accordion/accordiontitle.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/modules/accordion/accordiontitle.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2(_homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var AccordionTitle = _wrapComponent('AccordionTitle')((_temp = _class = function (_Component) {
    _inherits(AccordionTitle, _Component);

    function AccordionTitle(props) {
        _classCallCheck(this, AccordionTitle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionTitle).call(this, props));
    }

    _createClass(AccordionTitle, [{
        key: 'render',
        value: function render() {
            var classes = {
                // default

                // positioning

                // types

                // variations
                active: this.props.active,

                // component
                title: this.props.defaultClasses
            };

            return _react3.default.createElement(
                'div',
                {
                    className: (0, _classnames2.default)(this.props.className, classes),
                    onClick: this.props.onClick
                },
                _react3.default.createElement(_elements.Icon, { name: this.props.icon }),
                this.props.children
            );
        }
    }]);

    return AccordionTitle;
}(_react2.Component), _class.propTypes = {
    active: _react3.default.PropTypes.bool,
    children: _react3.default.PropTypes.node,
    className: _react3.default.PropTypes.node,
    defaultClasses: _react3.default.PropTypes.bool,
    icon: _react3.default.PropTypes.bool,
    onClick: _react3.default.PropTypes.func

}, _class.defaultProps = {
    defaultClasses: true,
    icon: 'dropdown'
}, _temp));

exports.default = AccordionTitle;
//# sourceMappingURL=accordiontitle.js.map