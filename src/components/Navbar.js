import React, {useState} from "react";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MenuItemResume, MobileIcon, Wrapper } from "./Navbar.elements";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animated, config, useTrail } from '@react-spring/web';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const springUpDown = useTrail(6, {
        from: { top: -100 , position:'absolute', opacity:0},
        to: { top: 0 , position:'relative', opacity:1},
        delay: 200,
        config: config.default,
    })

    return (
        <Container >
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize: "3rem"}}}>
                <LogoContainer style={ springUpDown[0] }>
                    <FaReact />
                    <p>Ramon Pocón</p>
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}  >
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