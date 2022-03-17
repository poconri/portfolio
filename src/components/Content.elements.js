import styled from 'styled-components';
import { animated } from '@react-spring/web';


export const Container = styled.div`
    margin-top: -7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    p:nth-child(1) {
        font-size: 1.6rem;
        color: var(--lightblue);
        margin: 0;
    }
    h1:nth-child(2) {
        font-size: 7rem;
        color: #ccd6f6;
        margin: 0;
    }
    p:nth-child(3) {
        color: #8892b0;
        font-size: 2rem;
        margin: 0;
    }
    
}
`;

export const Presentation = styled(animated.section)`
    @media (max-width: 768px) {
        display: block;
        padding: 0 0 0 20%;
    }
`;