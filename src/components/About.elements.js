import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-size: 5rem;
        color: #ccd6f6;
        margin: 0;
    }
    p {
        font-size: 2rem;
        color: #ccd6f6;
        padding-left: 7.5rem;
        padding-right: 7.5rem;
        @media (min-width: 85rem) {
            width: 90rem;
        }
        em {
            margin: 0;
            padding: 0;
            color: var(--lightblue);
        }
    }
`;


