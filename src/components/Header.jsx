import React from "react";
import { useState, useEffect } from "react";
import { animated, config, useTrail } from '@react-spring/web';
import '@styles/Header.css';

const Header = () => {
    const springUpDown = useTrail(5, {
        from: { top: -100 , position:'absolute', opacity:0},
        to: { top: 0 , position:'relative', opacity:1},
        delay: 200,
        config: config.wobbly,
    })
    return (
        <header>
            <nav className="nav-header">
                <ul className="ul-header">
                    <li>
                        <animated.a className="a-header" style={ springUpDown[0] } href="/" >About</animated.a>
                    </li>
                    <li>
                        <animated.a className="a-header" style={ springUpDown[1] }  href="/">Technologies</animated.a>
                    </li>
                    <li>
                        <animated.a className="a-header" style={ springUpDown[2] } href="/">Projects</animated.a>
                    </li>
                    <li>
                        <animated.a className="a-header" style={ springUpDown[3] } href="/">contacts</animated.a>
                    </li>
                    <animated.li className="resume-header" style={ springUpDown[4] } >
                        <animated.a className="a-header" style={ springUpDown[4] } href="/">Resume</animated.a>
                    </animated.li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;