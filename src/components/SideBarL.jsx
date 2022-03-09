import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { Container, Icon } from "./sideBarL.elements";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { config, useTrail } from '@react-spring/web';
import '@styles/SideBarL.css';

const SideBarL = () => {
    const trailLeft = useTrail(4 , {
        from: { left: -100 , opacity:0, transform: 'translateX(-100%)' },
        to: { left: 0 , opacity:1, transform: 'translateX(0%)'},
        delay: 1000,
        config: config.default,
    })
    return (
        <>
        <IconContext.Provider value={{style:{fontSize: "2rem"}}}>
                <Container >
                    <Icon style={trailLeft[3]}>
                        <FiGithub />
                    </Icon>
                    <Icon style={trailLeft[2]}>
                        <FiLinkedin />
                    </Icon>
                    <Icon style={trailLeft[1]}>
                        <FiInstagram />
                    </Icon>
                    <Icon style={trailLeft[0]}>
                        <FaFacebook />
                    </Icon>                    
                </Container>
            </IconContext.Provider>
        </>
    );
}

export default SideBarL;