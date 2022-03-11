import React, {useState, useEffect } from "react";
import { Container, Presentation } from "./Content.elements";
import TypeAnimation from 'react-type-animation';


const Content = () => {
    let text1 = ``;
    let text2 = `I'm a javaScript dev`;
    let text3 = `I love React`;
    let text4 = `Welcome to my portfolio...`;
    let delay = 2500;

    return (
        <Container>
            <Presentation>
                <p>Hello, my name is</p>
                <h1>Ramon Pocón</h1>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        text1,
                        delay,
                        '',
                        text2,
                        delay,
                        '',
                        text3,
                        delay,
                        '',
                        text4,
                        delay,
                        '',
                        ]}
                    wrapper="p"
                    repeat = {Infinity}
                />
            </Presentation>
        </Container>
    );
}

export default Content;