import React from 'react';

export default function Navigation(){
    return (
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <a href="/" className="header__logo">
                            <img 
                                src={require("../images/logo.jpeg")}
                                alt="logo"
                            />
                        </a>
                        <div className="header__burger">
                            <span></span>
                        </div>
                        <nav className="header__menu">
                            <ul className="header__list">
                                <li>
                                    <a href="/" className="header__link">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="header__link">About me</a>
                                </li>
                                <li>
                                    <a href="/contact" className="header__link">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}