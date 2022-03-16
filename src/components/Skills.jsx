import React from "react";
import { Container, IconWrapper } from "./Skills.elements";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IconContext } from "react-icons/lib";


const Skills = () => {
    return (
        <>
            <Container>
                <IconContext.Provider value={{style:{fontSize: "10rem"}}}>
                    <h1>Skills</h1>
                    <IconWrapper>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <SiJavascript />
                        <FaReact />
                    </IconWrapper>
                </IconContext.Provider>
            </Container>
        </>
    );
}

export default Skills;