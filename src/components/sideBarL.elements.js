import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Container = styled(animated.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    width: 7.7rem;
    height: 30rem;
    position: fixed;
    bottom: 0;
    

    svg {
        color: var(--fontcolor);
        transition: transform 0.3s ease-in-out;
    }
    svg:hover {
        color: var(--lightblue);
        cursor: pointer;
        transform: translateY(-0.3rem);
        
    }
    @media (max-height: 500px) {
        display: none;
    }
    @media (max-width: 550px) {
        display: none;
    }
`;

export const Icon = styled(animated.div)`
    display: flex;
`;
