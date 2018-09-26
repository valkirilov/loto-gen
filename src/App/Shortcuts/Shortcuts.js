import React, { Component } from 'react';

import './Shortcuts.css';

import ShortcutButton from './ShortcutButton';
import Input from './Input';

class Shortcuts extends Component {

    render() {
        return (
            <section id="shortcuts">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className="pure-button-group" role="group" aria-label="...">
                            <ShortcutButton
                                subset="6"
                                set="42"
                                handleClick={this.props.handleShortcutButtonClick}
                            />

                            <ShortcutButton
                                subset="5"
                                set="35"
                                handleClick={this.props.handleShortcutButtonClick}
                            />

                            <ShortcutButton
                                subset="6"
                                set="49"
                                handleClick={this.props.handleShortcutButtonClick}
                            />
                        </div>
                    </div>
                </div>

                <div className="pure-g">
                    <div className="pure-u-1">
                        <form className="pure-form">
                        <fieldset>
                            <Input
                                name="subset"
                                value={this.props.subset}
                                handleChange={this.props.handleInputChange}
                            />
                            /
                            <Input
                                name="set"
                                value={this.props.set}
                                handleChange={this.props.handleInputChange}
                            />
                        </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Shortcuts;