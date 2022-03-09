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
    }
    svg:hover {
        color: var(--lightblue);
        cursor: pointer;
        transform: translateY(-0.3rem);
        transition: all 0.3s ease-in-out;
    }
    @media (max-height: 500px) {
        display: none;
    }
`;

export const Icon = styled(animated.div)`
    display: flex;
`;
