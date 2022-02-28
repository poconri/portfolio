import React from "react";
import { useState, useEffect } from "react";
import '../styles/HeaderRes.css';

const HeaderRes = () => {
    return  <>
                <nav className="nav-headerRes">
                    <ul className="ul-headerRes">
                        <li>
                            <a className="a-headerRes" href="/" >About</a>
                        </li>
                        <li>
                            <a className="a-headerRes" href="/">Technologies</a>
                        </li>
                        <li>
                        <a className="a-headerRes" href="/">Projects</a>
                        </li>
                        <li>
                            <a className="a-headerRes" href="/">contacts</a>
                        </li>
                        <li  className="resume-headerRes">
                            <a className="a-headerRes" href="/">Resume</a>
                        </li>
                    </ul>
                </nav>
            </>
}

export default HeaderRes;