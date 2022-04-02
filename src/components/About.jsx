import React, { useRef } from "react";
import { Container } from "./About.elements";



const About = () => {
    return (
        <>
            <Container id="AboutPart">
                <h1>About</h1>
                <p>For the last year I have been learning to program in <em>JavaScript</em> as primary programing language, I begun study
    the history of computers and logical thinking, how a Linux
    based console works, the bases of <em>Git</em> and <em>GitHub</em> and
    version control. Then I learned the bases of <em>HTML5</em> & <em>CSS3</em> and work in little projects to get to understanding of them
    to jump into <em>JavaScript</em>, I got the basics of the language and
    dive into the harder part of understanding, the Event Loop,
    the <em>Asynchronous</em> part of the language, Arrays and
    Objects(Prototypes), <em>ECMA script6+</em>(Vanilla JavaScript) and the bases of <em>TypeScript</em>. I'm dedicated to frontEnd Development and my favorite Library its <em>React</em>.</p>
            </Container>
        </>
    );
}

export default About;