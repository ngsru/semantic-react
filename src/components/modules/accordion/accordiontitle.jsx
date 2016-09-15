import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';
import elementType from 'react-prop-types/lib/elementType';
import Icon from './../../elements/icon/icon';

/**
 * Title element for Accordion
 */
export default class AccordionTitle extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * True for active (visible) accordion section. This is being set by Accordion itself
         */
        active: React.PropTypes.bool,
        /**
         * Icon name
         */
        icon: React.PropTypes.string,
        /**
         * Allows to override icon component
         */
        iconComponent: elementType,
        /**
         * Initial style. Shouldn't be set directly, it's being passed by Accordion component,
         * since we don't want to animate titles
         */
        initialStyle: React.PropTypes.object,
        /**
         * Accordion index. Used by Accordion component to control which content should be hidden/displayed
         */
        index: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]).isRequired,
        /**
         * Click handler. Being set by Accordion
         */
        onClick: React.PropTypes.func

    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        active: false,
        icon: 'dropdown'
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const {
            component, children, defaultClasses, active, icon, iconComponent, index, initialStyle, onClick, dimensions, ...other
        } = this.props;
        const Component = component;
        const IconComponent = iconComponent || AccordionTitle.Components.Icon;

        other.className = classNames(other.className, {
            title: defaultClasses,
            active: active
        });
        // Set style to initial style, just style will contain animating values, we don't want animate the title
        return (
            <Component {...other} onClick={onClick} style={initialStyle}>
                <IconComponent name={icon}/>
                {children}
            </Component>
        );
    }
}
