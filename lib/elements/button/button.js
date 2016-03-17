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
  Button: {
    displayName: 'Button'
  }
};

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/components/elements/button/button.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeAnatolyWorkSemanticReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/components/elements/button/button.jsx',
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
  animated: ['vertical', 'fade'],
  attached: ['left', 'right', 'bottom', 'top'],
  labeled: ['left', 'right'],
  floated: ['left', 'right']
  // No 'size' here to avoid validateClassProps() picking it up and adding classes
};

var Button = _wrapComponent('Button')((_temp = _class = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var Component = this.props.attached || this.context.isAttached || this.props.animated || _react3.default.Children.count(this.props.children) > 1 ? 'div' : 'button';

      // consume props
      /* eslint-disable no-use-before-define */
      var _props = this.props;
      var animated = _props.animated;
      var attached = _props.attached;
      var basic = _props.basic;
      var children = _props.children;
      var circular = _props.circular;
      var color = _props.color;
      var component = _props.component;
      var compact = _props.compact;
      var className = _props.className;
      var defaultClasses = _props.defaultClasses;
      var primary = _props.primary;
      var secondary = _props.secondary;
      var floated = _props.floated;
      var fluid = _props.fluid;
      var icon = _props.icon;
      var inverted = _props.inverted;
      var labeled = _props.labeled;
      var loading = _props.loading;
      var size = _props.size;
      var social = _props.social;
      var state = _props.state;

      var other = _objectWithoutProperties(_props, ['animated', 'attached', 'basic', 'children', 'circular', 'color', 'component', 'compact', 'className', 'defaultClasses', 'primary', 'secondary', 'floated', 'fluid', 'icon', 'inverted', 'labeled', 'loading', 'size', 'social', 'state']);
      /* eslint-enable no-use-before-define */

      // add class names


      other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

      return _react3.default.createElement(this.props.component || Component, other, this.props.children);
    }
  }, {
    key: 'isIconButton',
    value: function isIconButton() {
      return (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react3.default.Children.count(this.props.children) === 1;
    }
  }, {
    key: 'getClasses',
    value: function getClasses() {
      var classes = {
        // default
        ui: this.props.defaultClasses,

        // position based props
        floated: this.props.floated,
        labeled: this.props.labeled && !this.context.isLabeledButtons,
        attached: this.props.attached,

        // types
        animated: this.props.animated,
        basic: this.props.basic,
        icon: (this.props.icon || this.isIconButton()) && !this.context.isIconButtons,
        inverted: this.props.inverted,

        // states
        active: this.props.state === 'active',
        disabled: this.props.state === 'disabled',
        loading: this.props.loading,

        // variations
        circular: this.props.circular,
        compact: this.props.compact,
        primary: this.props.primary,
        secondary: this.props.secondary,
        fluid: this.props.fluid,

        // component
        button: this.props.defaultClasses
      };

      // string types
      classes[this.props.color] = !!this.props.color;
      classes[this.props.size] = !!this.props.size;
      classes[this.props.social] = !!this.props.social;

      return (0, _utilities.validateClassProps)(classes, this.props, validProps);
    }
  }]);

  return Button;
}(_react3.default.Component), _class.propTypes = {
  /**
   * Adds a fade or slide animation on hover.
   */
  animated: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['fade', 'vertical']), _react3.default.PropTypes.bool]),

  /**
   * It's attached to some other attachable component.
   */
  attached: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['left', 'right', 'bottom', 'top']), _react3.default.PropTypes.bool]),

  /**
   * Adds simple styling to the component.
   */
  basic: _react3.default.PropTypes.bool,

  /**
   * The child nodes of the component.
   */
  children: _react3.default.PropTypes.node,

  /**
   * Gives a circular shape to the component.
   */
  circular: _react3.default.PropTypes.bool,

  /**
   * Adds additional classes to the component.
   */
  className: _react3.default.PropTypes.node,

  /**
   * Adds a SemanticUI color class.
   */
  color: _react3.default.PropTypes.string,

  /**
   * Reduces the padding on the component.
   */
  compact: _react3.default.PropTypes.bool,

  /**
   * Overrides the component with a custom component string ('div') or ReactElement.
   */
  component: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.element, _react3.default.PropTypes.func, _react3.default.PropTypes.string]),

  /**
   * Adds the default classes for the component.
   */
  defaultClasses: _react3.default.PropTypes.bool,

  /**
   * Forces to component to float left or right.
   */
  floated: _react3.default.PropTypes.oneOf(['left', 'right']),

  /**
   * The component fills the parent components horizontal space.
   */
  fluid: _react3.default.PropTypes.bool,

  /**
   * Overrides default behavior and adds the icon class to the component.
   */
  icon: _react3.default.PropTypes.bool,

  /**
   * Styles the component for a dark background.
   */
  inverted: _react3.default.PropTypes.bool,

  /**
   * Defines whether the label is to the right or left of the component (LabeledButton).
   */
  labeled: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.oneOf(['right', 'left']), _react3.default.PropTypes.bool]),

  /**
   * Displays a loading indicator on the component.
   */
  loading: _react3.default.PropTypes.bool,

  /**
   * A button can be formatted to show different levels of emphasis
   * Setting your brand colors to primary and secondary color variables in site.variables will allow you to use
   * your color theming for UI elements
   */
  primary: _react3.default.PropTypes.bool,

  /**
   * A button can be formatted to show different levels of emphasis
   * Setting your brand colors to primary and secondary color variables in site.variables will allow you to use
   * your color theming for UI elements
   */
  secondary: _react3.default.PropTypes.bool,

  /**
   * Adds a SemanticUI size class.
   */
  size: _react3.default.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),

  /**
   * Adds a SemanticUI social class (SocialButton).
   */
  social: _react3.default.PropTypes.string,

  /**
   * Indicates whether the button is currently highlighted or disabled.
   */
  state: _react3.default.PropTypes.oneOf(['active', 'disabled'])
}, _class.contextTypes = {
  isAttached: _react3.default.PropTypes.bool,
  isIconButtons: _react3.default.PropTypes.bool,
  isLabeledButtons: _react3.default.PropTypes.bool
}, _class.defaultProps = {
  defaultClasses: true
}, _temp));

exports.default = Button;
//# sourceMappingURL=button.js.map