import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Content from './../../elements/simple/content';
import DefaultProps from '../../defaultProps';

export default class Results extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        emptyHeader: React.PropTypes.string,
        emptyMessage: React.PropTypes.string,
        onChoice: React.PropTypes.func,
        results: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ]),
        search: React.PropTypes.string,
        style: React.PropTypes.object,
        indexFocusItem: React.PropTypes.number,
        indexFocusCategory: React.PropTypes.number
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        emptyHeader: 'No Results',
        emptyMessage: 'Your search returned no results'
    };

    /* eslint-disable */
    static Components = {
        Content: Content
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    onClick(child, e) {
        this.props.onChoice(e, child);
    }

    renderChildren() {
        if (this.props.results.length === 0) {
            return this.renderEmpty();
        } else if (Array.isArray(this.props.results)) {
            return this.props.results.map(this.renderItem.bind(this, true));
        } else if (typeof this.props.results === 'object') {
            return Object.keys(this.props.results).map(this.renderCategory)
        } else {
            return false;
        }
    }

    renderItem = (isParentActive, child, key) => {
        let description = null;
        let isChildObject = typeof child === 'object';
        let title = isChildObject ? child.title : child;

        // use title and description
        if (isChildObject && child.description) {
            description = (
                <div className="description">
                    {child.description}
                </div>
            );
        }

        return (
            <a className={classNames('result', { active: isParentActive && this.props.indexFocusItem === key })}
               key={key}
               onMouseDown={this.onClick.bind(this, title)}
            >
                <Results.Components.Content>
                    <div className="title">
                        {title}
                    </div>
                    {description}
                </Results.Components.Content>
            </a>
        )
    }

    renderCategory = (child, key) => {
        let isActive = this.props.indexFocusCategory === key;

        return (
            <div className={classNames('category', { active: isActive })}
                key={key}
            >
                <div className="name">{child}</div>
                {this.props.results[child].map(this.renderItem.bind(this, isActive))}
            </div>
        );
    }

    renderEmpty() {
        return (
            <div className="message empty">
                <div className="header">{this.props.emptyHeader}</div>
                <div className="description">{this.props.emptyMessage}</div>
            </div>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, onChoice, results, search, style,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.props.style;

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    getClasses() {
        return {
            results: this.props.defaultClasses,

            transition: this.props.defaultClasses,
            visible: this.props.defaultClasses
        }
    }

}
