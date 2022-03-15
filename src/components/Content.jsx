import React from "react";
import { Container, Presentation } from "./Content.elements";
import TypeAnimation from 'react-type-animation';


const Content = () => {
    let text = [
        ``,
        `I'm a javaScript dev`,
        `I love React`,
        `Welcome to my portfolio...`,
        ];

        let duration = 2500;

    return (
        <Container>
            <Presentation>
                <p>Hello, my name is</p>
                <h1>Ramon Pocón</h1>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        text[0],
                        duration,
                        text[1],
                        duration,
                        text[0],
                        text[2],
                        duration,
                        text[0],
                        text[3],
                        duration,
                        text[0],
                        ]}
                    wrapper="p"
                    repeat = {Infinity}
                />
            </Presentation>
        </Container>
    );
}

export default Content;