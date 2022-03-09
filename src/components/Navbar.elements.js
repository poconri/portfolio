import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Container = styled.div`
    width: 100%;
    height: 70px;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled(animated.div)`
    margin-left: 2rem;
    display: flex;
    align-items: center;
    font-size: 2rem;

    p {
        &:nth-child(2) {
            color: var(--fontcolor);
        }
}
    svg {
        fill: var(--lightblue);
        margin-right: 0.5rem;
        -webkit-transition: spin 5s linear infinite;
        -moz-transition: spin 5s linear infinite;
        animation: spin 5s linear infinite;
        @-webkit-keyframes spin {
            100%{-webkit-transform: rotate(360deg);}
        }
        @-moz-keyframes spin {
            100%{-webkit-transform: rotate(360deg);}
        }
        @keyframes spin {
            100%{-webkit-transform: rotate(360deg);}
        }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    padding-right: 2rem;
    list-style: none;

    @media screen and (max-width: 960px) {
        @media screen and (max-width: 960px) {
            display:flex;
            background-color: #23394d;
            position: absolute;
            top: 5rem;
            right: ${({open}) => open ? '0' : '-150%'}; //Import
            width: 100%;
            height: 90vh;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            transition: 0.5s all ease;
            padding: 0;
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 960px) {
        height: 70px;
        display: flex;
        justify-content: ce;
        align-items: center;
    }
`;

export const MenuItemLink = styled(animated.a)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2.5rem;
    color: var(--fontcolor);
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;

    &:hover {
        color: var(--lightblue);

    div{
        svg{
            fill: #23394d;
        }
    }
    }
    div {
        display:flex;
        justify-content:center;
        align-items:center;
    

    svg {
        display: none;
        fill: #e0792a;
        maring-right: 0.5rem;
    }
}
    @media screen and (max-width: 960px) {
        div {
            justify-content: left;
            svg {
                display: flex;
            }
        }
    }
    @media screen and (max-width: 880px) {
        div {
            width: 40%;
            justify-content: left;
        svg {
            display: flex;
            }
        }
    }
    @media screen and (max-width: 500px) {
        div {
            width: 60%;
            justify-content: left;
            svg {
                display: flex;
            }
        }
    }
    @media screen and (max-width: 260px) {
        div {
            width: 100%;
            justify-content: left;
            svg {
                display: flex;
            }
        }
    }
`;

export const MenuItemResume = styled(animated.a)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2.5rem;
    color: var(--fontcolor);
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    border: 2px solid var(--lightblue);
    border-radius: 5px;

    &:hover {
        color: var(--lightblue);
    div{
        svg{
            fill: #23394d;
        }
    }
    }
    div {
        display:flex;
        justify-content:center;
        align-items:center;
    

    svg {
        display: none;
        fill: #e0792a;
        maring-right: 0.5rem;
    }
}
    @media screen and (max-width: 960px) {

        div {
            width: 100%;
            justify-content: left;

            svg {
                display: flex;
            }
        }
    }
    @media screen and (max-width: 880px) {
        div {
            width: 40%;
            justify-content: left;
        svg {
            display: flex;
            }
        }
    }
    @media screen and (max-width: 500px) {
        div {
            width: 60%;
            justify-content: left;
            svg {
                display: flex;
            }
        }
    }
    @media screen and (max-width: 260px) {
        div {
            width: 100%;
            justify-content: left;
            svg {
                display: flex;
            }
        }
    }
`;

export const MobileIcon = styled(animated.div)`
    display: none;
    
    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        cursor: pointer;
        svg {
            fill: var(--lightblue);
            margin-right: 1.5rem;
        }
    }
`;