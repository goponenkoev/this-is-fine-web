import React from 'react';
import {NavBarLogo, NavBarWrapper, NavBarLogoWrapper} from './NavBar.style';

class NavBar extends React.Component {
    render() {
        return <NavBarWrapper>
            <NavBarLogoWrapper>
                <NavBarLogo>LOGO</NavBarLogo>
            </NavBarLogoWrapper>
        </NavBarWrapper>;
    }
}

export default NavBar;
