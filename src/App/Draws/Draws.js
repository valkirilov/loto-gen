import React, { Component } from 'react';

import './Draws.css';

import ListDraw from './ListDraw';

class Draws extends Component {
    render() {
        return (
          <section id="draws">
            <div className="pure-g">
              <div className="pure-u-1">
                <button
                  className="pure-button pure-button-primary"
                  onClick={this.props.handleDrawButtonClick}
                >
                  Ново теглене
                </button>
              </div>
            </div>

            <div className="pure-g">
              <div className="pure-u-1">
                <ul className="list-draws">
                  {
                    this.props.draws.map((draw, i) => (
                      <ListDraw key={i} draw={draw} />
                    ))
                  }
                </ul>
              </div>
            </div>

            <div className={this.props.draws.length == 0 ? 'hidden' : ''}>
              <div className="pure-g">
                <div className="pure-u-1">
                  <br />
                  <button
                    className="pure-button"
                    onClick={this.props.handleDrawClearButtonClick}
                  >
                    Изчисти списъка
                  </button>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Draws;