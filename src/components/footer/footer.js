import React, { Component } from 'react';
import './footer.css';


class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='bottom'>
                    Powered By<img src={this.img} className='App-logo' alt='logo'/><a href='https://github.com/zanyssii' target='_blank' rel='noopener noreferrer'>Inna Atamanova</a>
                </div>
            </footer>
        );
    }
}

export default Footer;