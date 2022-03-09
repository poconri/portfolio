import React, {useState} from "react";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MenuItemResume, MobileIcon, Wrapper } from "./Navbar.elements";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { config, useTrail } from '@react-spring/web';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const springUpDown = useTrail(6, {
        from: {  opacity:0, transform: 'translateY(-100%)' },
        to: {  opacity:1, transform: 'translateY(0%)' },
        config: config.gentle
    })

    return (
        <Container >
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize: "3rem"}}}>
                <LogoContainer style={ springUpDown[0] }>
                    <FaReact />
                    <p>RP</p>
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}  style={ springUpDown[1] }>
                    { !showMobileMenu ? <FaBars /> : <FaTimes /> } 
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} style={ springUpDown[1] } >
                            About
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} style={ springUpDown[2] } >
                            Technologies
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} style={ springUpDown[3] } >
                            Projects
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} style={ springUpDown[4] } >
                            Contact me
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemResume onClick={() => setShowMobileMenu(!showMobileMenu)} style={ springUpDown[5] } >
                            Resume
                        </MenuItemResume>
                    </MenuItem>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar;