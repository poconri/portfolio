import React from "react";
import { Container, IconWrapper } from "./Skills.elements";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiJavascript } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { FcLinux } from "react-icons/fc";


const Skills = () => {
    return (
        <>
            <Container id="SkillPart">
                <IconContext.Provider value={{style:{fontSize: "10rem"}}}>
                    <h1>Skills</h1>
                    <IconWrapper>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <SiJavascript />
                        <FaReact />
                        <FiGithub />
                        <FcLinux />
                    </IconWrapper>
                </IconContext.Provider>
            </Container>
        </>
    );
}

export default Skills;