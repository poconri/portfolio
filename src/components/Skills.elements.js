import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    margin:0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1 {
        font-size: 5rem;
        color: #ccd6f6;
        margin: 20rem 0 10rem 0;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    
    svg {
        &:nth-child(1) {
            color: #dd4b25;
        }
        &:nth-child(2) {
            color: #0170ba;
        }
        &:nth-child(3) {
            background: black;
            color: #f5de19;
        }
        &:nth-child(4) {
            color: #00d9ff;
        }    
    }
`;
