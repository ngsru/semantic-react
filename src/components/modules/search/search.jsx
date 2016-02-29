import React from 'react';
import { Icon } from '../../elements';
import { Results } from './results';
import classNames from 'classnames';

/*
3 support results types:

{
    title: 'test',
    description: 'testing'
}

{
    animal: ['cat', 'dog']
}

['test', 'test']
*/

export class Search extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        emptyHeader: React.PropTypes.string,
        emptyMessage: React.PropTypes.string,
        enterAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        icon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        leaveAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        loading: React.PropTypes.bool,
        onChange: React.PropTypes.func.isRequired,
        onSearchClick: React.PropTypes.func,
        placeholder: React.PropTypes.string,
        results: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ]),
        value: React.PropTypes.string
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        enterAnimation: {
            duration: 200,
            easing: 'out-expo',
            from: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            },
            to: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            }
        },
        leaveAnimation: {
            duration: 200,
            easing: 'out-expo',
            from: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            },
            to: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            }
        },
        icon: 'search',
        onSearchClick: function noop() {},
        placeholder: 'Search...',
        value: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            focus: false
        };
    }

    onBlur() {
        if (this.state.focus) {
            this.setState({
                focus: false
            });
        }
    }

    onChange(e) {
        this.props.onChange(e);
    }

    onFocus(e) {
        this.setState({
            focus: true
        });
    }

    onSearchClick(e, child) {
        this.props.onSearchClick(e, child);
    }

    renderChildren() {
        return (
            <div className="ui icon input" key='searchInput' >
                <input className="prompt"
                    onBlur={this.onBlur.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    type="text" />
                {this.renderInputIcon()}
            </div>
        );
    }

    renderInputIcon() {
        if (!this.props.icon) return null;

        return <Icon name={this.props.icon} />;
    }

    renderResults() {
        let props = {
            animate: this.state.focus && this.props.value !== '',
            emptyHeader: this.props.emptyHeader,
            emptyMessage: this.props.emptyMessage,
            key: 'searchResults',
            onSearchClick: this.onSearchClick.bind(this),
            results: this.state.focus ? this.props.results : [],
            search: this.props.value || '',
            start: this.props.enterAnimation,
            end: this.props.leaveAnimation,
        };

        return React.createElement(
            Results,
            props
        );
    }

    render() {
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, enterAnimation, icon, leaveAnimation, loading,
              onChange, onSearchClick, placeholder, results,
              ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            [
                this.renderChildren(),
                this.renderResults()
            ]
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,
            search: this.props.defaultClasses,

            // state
            loading: this.props.loading,
            focus: this.state.focus,

            category: !Array.isArray(this.props.results)
        };
    }

}
