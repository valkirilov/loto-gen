import React, { Component } from 'react';

class Input extends Component {

    render() {
        return (
            <input
                type="number"
                name={this.props.name}
                placeholder={this.props.value}
                value={this.props.value}
                onChange={(e) => this.props.handleChange(this.props.name, e.target.value)}
            />
        )
    }
}

export default Input;