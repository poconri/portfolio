import styled from 'styled-components';
import { animated } from '@react-spring/web';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92.5vh;
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
    h1:nth-child(3) {
        color: #8892b0;
        -webkit-box-reflect: below 1px linear-gradient(transparent, var(--lightblue));
        overflow: hidden;
        width: 19ch;
        animation: typing 4s steps(19) infinite;
    }
    @keyframes typing {
        from {
            width: 0;
        }
    }
}
`;

export const Presentation = styled(animated.div)`

`;