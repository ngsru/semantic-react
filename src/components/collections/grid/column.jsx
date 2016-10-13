import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Numbers, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';
import classNames from 'classnames';

const validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    floated: ['right', 'left'],
    valigned: ['top', 'middle', 'bottom']

};

/**
 * Grid column
 */
export default class Column extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Horizontal content alignment
         */
        aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
        /**
         * Float to the right or left edge of the row
         */
        floated: React.PropTypes.oneOf(['right', 'left']),
        /**
         * Only visible for types. Could be single type string or array, i.e. only={["mobile","tablet"]}
         */
        only: React.PropTypes.oneOfType([
            React.PropTypes.oneOf([
                'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
            ]),
            React.PropTypes.arrayOf(React.PropTypes.oneOf([
                'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
            ]))
        ]),
        /**
         * Column color
         */
        color: React.PropTypes.string,
        /**
         * Column width for all device types
         */
        width: React.PropTypes.number,
        /**
         * Column width for mobile
         */
        mobileWidth: React.PropTypes.number,
        /**
         * Column width for tablet
         */
        tabletWidth: React.PropTypes.number,
        /**
         * Column width for computer
         */
        computerWidth: React.PropTypes.number,
        /**
         * Column width for large screens
         */
        largeScreenWidth: React.PropTypes.number,
        /**
         * Column width for wide screens
         */
        wideScreenWidth: React.PropTypes.number,
        /**
         * Vertical content alignment
         */
        valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let {
            aligned, component, children, defaultClasses, floated, only, width, mobileWidth, tabletWidth,
            computerWidth, largeScreenWidth, wideScreenWidth, valigned, wide, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */
        let Component = component;
        other.className = classNames(other.className, this.getClasses());

        return (
            <Component {...other}>
                       {children}
            </Component>
        );
    }

    getClasses() {
        let classes = {
            column: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;

        // Widths
        if (this.props.width && this.props.width > 0 && this.props.width <= 16) {
            classes[`${Numbers[this.props.width]} wide`] = true;
        }

        if (this.props.mobileWidth && this.props.mobileWidth > 0 && this.props.mobileWidth <= 16) {
            classes[`${Numbers[this.props.mobileWidth]} wide mobile`] = true;
        }

        if (this.props.tabletWidth && this.props.tabletWidth > 0 && this.props.tabletWidth <= 16) {
            classes[`${Numbers[this.props.tabletWidth]} wide tablet`] = true;
        }

        if (this.props.computerWidth && this.props.computerWidth > 0 && this.props.computerWidth <= 16) {
            classes[`${Numbers[this.props.computerWidth]} wide computer`] = true;
        }

        if (this.props.largeScreenWidth && this.props.largeScreenWidth > 0 && this.props.largeScreenWidth <= 16) {
            classes[`${Numbers[this.props.largeScreenWidth]} wide large screen`] = true;
        }

        if (this.props.wideScreenWidth && this.props.wideScreenWidth > 0 && this.props.wideScreenWidth <= 16) {
            classes[`${Numbers[this.props.wideScreenWidth]} wide widescreen`] = true;
        }

        if (this.props.only) {
            let device;
            if (Array.isArray(this.props.only)) {
                device = this.props.only.join(' ');
            } else {
                device = this.props.only;
            }
            if (device) {
                classes[`${device} only`] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps, { valigned: 'aligned' });
    }
}
