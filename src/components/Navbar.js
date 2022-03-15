import React from "react";
import { AppContext } from "../context/AppContext";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MenuItemResume, MobileIcon, Wrapper } from "./Navbar.elements";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { config, useTrail } from '@react-spring/web';

const Navbar = () => {
    const {
        statusMenu,
        setStatusMenu,
    } = React.useContext(AppContext);
    
    const onClickMenu = () => {
        setStatusMenu(prevState => !prevState);
    }

    const springUpDown = useTrail(7, {
        from: {  opacity:0, transform: 'translateY(-100%)' },
        to: {  opacity:1, transform: 'translateY(0%)' },
        config: config.gentle
    })

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize: "3rem"}}}>
                <LogoContainer style={ springUpDown[0] }>
                    <FaReact />
                    <p>RP</p>
                </LogoContainer>
                <MobileIcon onClick={ onClickMenu }  style={ springUpDown[1] }>
                    { !statusMenu ? <FaBars /> : <FaTimes /> } 
                </MobileIcon>
                <Menu open={statusMenu}>
                    <MenuItem>
                        <MenuItemLink onClick={ onClickMenu } style={ springUpDown[2] } >
                            About
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={ onClickMenu } style={ springUpDown[3] } >
                            Skills
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={ onClickMenu } style={ springUpDown[4] } >
                            Projects
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={ onClickMenu } style={ springUpDown[5] } >
                            Contact me
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItemResume style={ springUpDown[6] } >
                        <MenuItemLink onClick={ onClickMenu } style={ springUpDown[6] } >
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