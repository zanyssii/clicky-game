import React, { Component } from 'react';
//import ''


class NavBar extends Component {
    render() {
        console.log(this.props);
        return (
            <nav className='navbar'>
                <ul>
                    <li className='brand'>
                        <a href='/'>Clicky Game</a>
                    </li>
                    <li className={this.props.gameMessageClass}>{this.props.gameMessage}</li>
                    <li>Score: {this.props.gameScore} | Top Score: {this.props.gameTopScore}</li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;