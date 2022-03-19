import styled from 'styled-components';


export const Container = styled.section`
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-size: 2rem;
        color: #ccd6f6;
    }
    a{
        font-size: 2rem;
        color: #ccd6f6;
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        &:hover{
            color: var(--lightblue);
        }
    }
`;

export const ContactMeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--lightblue);
    font-size: 2rem;
    cursor: pointer;
    height: 4rem;
    width: 12rem;
    padding: 0 0 0.2rem 0;
    gap: 3rem;
    border: 1px solid var(--lightblue);
    border-radius: 5px;
    transition: 0.5s background ease;

    &:hover {
        background: #123040; 
    }
`;