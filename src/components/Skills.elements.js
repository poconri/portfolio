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

export const IconWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    gap: 4rem;
    
    svg {
        transition: transform 0.5s ease-in-out;

        &:nth-child(1) {
            color: #dd4b25;

            &:hover {
                transform: scale(1.5);
            }
        }
        &:nth-child(2) {
            color: #0170ba;

            &:hover {
                transform: scale(1.5);
            }
        }
        &:nth-child(3) {
            background: black;
            color: #f5de19;

            &:hover {
                transform: scale(1.5);
            }
        }
        &:nth-child(4) {
            color: #00d9ff;

            &:hover {
                transform: scale(1.5);
            }
        }
        &:nth-child(5) {
            color: var(--fontcolor);

            &:hover {
                transform: scale(1.5);
            }
        }
        &:nth-child(6) {

            &:hover {
                transform: scale(1.5);
            }
        }
    }
`;
