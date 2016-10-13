import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export const POSITIONS = ['top left', 'top center', 'top right', 'right center',
                'bottom right', 'bottom center', 'bottom left', 'left center'];

/**
 * Popup component without animation transitions
 */
export default class PopupElement extends React.Component {
    static propTypes = {
        /**
         * Default properties
         */
        ...DefaultProps.propTypes,
        /**
         * Basic popup variation
         */
        basic: React.PropTypes.bool,
        /**
         * Fluid popup
         */
        fluid: React.PropTypes.bool,
        /**
         * No maximum width and continue to flow to fit its content
         */
        flowing: React.PropTypes.bool,
        /**
         * Inverted popup
         */
        inverted: React.PropTypes.bool,
        /**
         * Popup size
         */
        size: React.PropTypes.oneOf([
            'mini', 'tiny', 'small', 'large', 'huge'
        ]),
        /**
         * Make content of popup wide
         */
        wide: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.string
        ]),
        /**
         * Popup position
         */
        position: React.PropTypes.oneOf(['top left', 'top center', 'top right', 'right center',
                'bottom right', 'bottom center', 'bottom left', 'left center'])
    };
    
    static defaultProps = {
        ...DefaultProps.defaultProps,
        position: 'top left'
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { className, component, defaultClasses, position, dimensions, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        // other.style = Object.assign({}, style, pStyle);

        if (this.props.component === PopupElement) {
            component = 'div';
        } else {
            component = this.props.component;
        }

        // Save ref to HTML element
        other.ref = 'popup';
        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            popup: this.props.defaultClasses,
            basic: this.props.basic,
            fluid: this.props.fluid,
            flowing: this.props.flowing,
            inverted: this.props.inverted,
            wide: this.props.wide,
            visible: true
        };
        
        if (this.props.wide) {
            // very wide
            if (typeof this.props.wide === 'string') {
                classes['very wide'] = true;
            } else {
                classes['wide'] = true;
            }
        }
        
        
        if (this.props.size) {
            classes[this.props.size] = true;
        }

        let position = this.props.position.split(' ');

        position.forEach(pos => {
            classes[pos] = true;
        });

        return classes;
    }
}
