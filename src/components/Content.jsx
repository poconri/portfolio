import React from "react";
import { Container, Presentation } from "./Content.elements";


const Content = () => {
    let developer = `I'm a javaScript dev`;
    return (
        <Container>
            <Presentation>
                <p>Hello, my name is</p>
                <h1>Ramon Pocón</h1>
                <h1>{developer}</h1>
                <p></p>
            </Presentation>
        </Container>
    );
}

export default Content;