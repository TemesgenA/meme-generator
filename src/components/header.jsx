import React from "react";
import logo from '../images/Troll Face.png';

function Header() {
    return (
        <header className="App-header">
            <div className="logo">
                <img src={logo} className='logo-img' alt='logo' />
                <h2 className="logo-title">Meme Generator</h2>
            </div>
            <div className="nav-bar">
                <p className="project-cat">Interactive React project</p>
            </div>
        </header>
    );
}

export default Header;