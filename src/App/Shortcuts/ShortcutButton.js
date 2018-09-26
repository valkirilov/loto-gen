import React, { Component } from 'react';

class ShortcutButton extends Component {

    render() {
        return (
            <button
                className="pure-button pure-button-secondary button-large"
                onClick={() => this.props.handleClick(this.props.subset, this.props.set)}
            >
                {this.props.subset}/{this.props.set}
            </button>
        )
    }
}

export default ShortcutButton;