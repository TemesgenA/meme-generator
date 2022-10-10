import React from "react";
import logo from '../images/Troll Face.png';

function Header() {
    return (
        <header className="App-header">
            <div className="logo">
                <img src={logo} className='logo-img' alt='logo' />
                <p className="logo-title">Meme Generator</p>
            </div>
        </header>
    );
}

export default Header;