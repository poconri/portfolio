import React, { useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MenuItemResume, MobileIcon, Wrapper } from "./Navbar.elements";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { config, useTrail } from '@react-spring/web';
import { Link } from 'react-scroll';

const Navbar = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    let cvLink = `https://drive.google.com/file/d/14gXqtg_p3m6eI9eqEQhT7eAevFgLcygz/view?usp=sharing`;

    const scrollToTop = (props) => window.scrollTo({top: props, behavior: 'smooth'});
    
    const boxShadow = `box-Shadow`;
    const [scroll, setScroll] = useState(0);

    const {
        statusMenu,
        setStatusMenu
    } = React.useContext(AppContext);
    
    const onClickMenu = () => {
        setStatusMenu(prevState => !prevState);
    }

    const springUpDown = useTrail(7, {
        from: {  opacity:0, transform: 'translateY(-100%)' },
        to: {  opacity:1, transform: 'translateY(0%)'},
        config: config.default,
    })

    const [scrollY, setScrollY] = useState(0); //this is the scroll position
    const [scrollYF, setScrollYFPrev] = useState(false); //this is the scroll position

    const changeNavbar = () => {
        if(scrollY > window.scrollY) {
            setScrollYFPrev(true);
            setScroll(0.1);
        } else {
            setScrollYFPrev(false);
            setScrollY(window.scrollY);
            setScroll(0);
        }
    }

    function resumeFunction() {
        onClickMenu();
        openInNewTab(cvLink);
    }

    function logoFunction() {
        scrollToTop( 0 );
    }

    window.addEventListener('scroll', changeNavbar);

    return (
        <Container>
            <Wrapper navBarPosition={ scrollYF } style= { { boxShadow: `0px 10px 5px 0px rgba(0,0,0,${scroll})` }}>
                <IconContext.Provider value={{style:{fontSize: "3rem"}}}>
                <LogoContainer style={ springUpDown[0] }>
                    <FaReact onClick={ logoFunction } />
                    <p onClick={ logoFunction } >RP</p>
                </LogoContainer>
                <MobileIcon onClick={ onClickMenu }  style={ springUpDown[1] }>
                    { !statusMenu ? <FaBars /> : <FaTimes /> } 
                </MobileIcon>
                <Menu open={statusMenu}>
                    <MenuItem style={ springUpDown[2] }>
                            <Link to="AboutPart" onClick={ onClickMenu }>
                                About
                            </Link>
                    </MenuItem>
                    <MenuItem style={ springUpDown[3] } >
                        <Link to="SkillPart" onClick={ onClickMenu }>
                            Skills
                        </Link>
                    </MenuItem>
                    <MenuItem style={ springUpDown[4] }>
                        <Link onClick={ onClickMenu }  >
                            Projects
                        </Link>
                    </MenuItem>
                    <MenuItem style={ springUpDown[5] }>
                        <Link to="ContactPart" onClick={ onClickMenu }  >
                            Contact me
                        </Link>
                    </MenuItem>
                    <MenuItemResume style={ springUpDown[6] } >
                        <MenuItemLink onClick={ resumeFunction } style={ springUpDown[6] }>
                            Resume
                        </MenuItemLink>
                    </MenuItemResume>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar;