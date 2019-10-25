import React, { Component } from 'react';
import './header.css';

const img ='./assets/images/game.jpg'

class Header extends Component {
    render() {
        return (
            <header className='header' style={{ backgroundImage: `url(${img})` }}>
                <div className='headerContainer'>
                    <h1>Clicky Game</h1>
                    <h2>Click on image to win</h2>
                </div>
            </header>
        );
    }
}
export default Header;