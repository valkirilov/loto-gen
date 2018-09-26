import React, { Component } from 'react';

import './ListDraw.css';

class ListDraw extends Component {
    render() {
        return (
            <li>
                <div className="list-draw">
                    {
                        this.props.draw.map((number, i) => (
                            <div key={i} className="ball">
                                <div><span>{number}</span></div>
                            </div>
                        ))
                    }
                </div>
            </li>
        )
    }
}

export default ListDraw;