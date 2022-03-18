import React from "react";
import { ContactMeWrapper, Container } from "./contactMe.elements";

const ContactMe = () => {
    let email = `pocon.ri@gmail.com`
    return (
        <Container>
            <p> Did you like what you saw?</p>
            <ContactMeWrapper>
                <a href={`mailto:${email}`}>Contact Me</a>
            </ContactMeWrapper>
        </Container>
    );
}

export default ContactMe;