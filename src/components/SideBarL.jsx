import React from "react";
import gitHubIcon from "../assets/icons/github (2).png";
import linkedIn from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import '@styles/SideBarL.css';

const SideBarL = () => {
    return (
        <React.Fragment>
            <div className="sidebar-l">
                <div className="sidebar-l__item">
                <img src= { gitHubIcon } alt="gitHub icon" />
                </div>
                <div className="sidebar-l__item">
                <img src= { linkedIn } alt="linkedIn icon" />
                </div>
                <div className="sidebar-l__item">
                <img src= { instagram } alt="instagram icon" />
                </div>
                <div className="sidebar-l__item">
                <img src= { facebook } alt="facebook icon" />
                </div>
                <div className="sidebar-l__item2">
                <div></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SideBarL;