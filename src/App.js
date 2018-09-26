import React, { Component } from 'react';

import './App.css';

import Header from './App/Header/Header';
import Shortcuts from './App/Shortcuts/Shortcuts';
import Draws from './App/Draws/Draws';

import { makeDraw } from './Helpers.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subset: 6,
      set: 49,
      draws: []
    };

    this.handleShortcutButtonClick = this.handleShortcutButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleDrawButtonClick = this.handleDrawButtonClick.bind(this);
    this.handleDrawClearButtonClick = this.handleDrawClearButtonClick.bind(this);
  }

  /**
   * Handle the onClick event for the ShortcutButtons
   * It should update the state's subset and set values
   *
   * @param {Number} subset
   * @param {Number} set
   */
  handleShortcutButtonClick(subset, set) {
    this.setState({
      subset: subset,
      set: set
    });
  }

  /**
   * Handle the onChange event for the Inputs
   * It should update the state's subset or set value, according to the passed name
   *
   * @param {String} name
   * @param {Number} value
   */
  handleInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  /**
   * Handle the onClick event for generating a new draw
   * It should make a new draw with the state's sibset and set values
   */
  handleDrawButtonClick() {
    const draws = this.state.draws.slice();
    let draw = makeDraw(this.state.subset, this.state.set);

    this.setState({
      draws: draws.concat([draw]),
    });
  }

  /**
   * Handle the onClick event for generating a new draw
   * It should clear the draws list
   */
  handleDrawClearButtonClick() {
    this.setState({
      draws: []
    });
  }

  render() {
    return (
      <div id="app">
        <div className="wrapper">
          <Header />
          <Shortcuts
            subset={this.state.subset}
            set={this.state.set}
            handleShortcutButtonClick={this.handleShortcutButtonClick}
            handleInputChange={this.handleInputChange}
          />

          <Draws
            draws={this.state.draws}
            handleDrawButtonClick={this.handleDrawButtonClick}
            handleDrawClearButtonClick={this.handleDrawClearButtonClick}
          />
          <div className="push"></div>
        </div>

        <section id="footer">
            <div className="line-strip"></div>
        </section>
      </div>
    );
  }
}

export default App;
