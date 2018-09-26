import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <section id="header">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className="logo">
                        <img src="./images/logo-rectangle-equal.png" alt="ЛОТО ГЕНЕРАТОР" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;