import React from "react";
import '@styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Technologies</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">contacts</a>
                    </li>
                    <li className="resume">
                        <a  href="/">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;