import React from 'react';
import {NavBarLogo, NavBarWrapper, NavBarLogoWrapper} from './NavBar.style';
import logo from '../assets/images/logo-1.png'

class NavBar extends React.Component {
    render() {
        return <NavBarWrapper>
            <NavBarLogoWrapper>
                <NavBarLogo src={logo}/>
            </NavBarLogoWrapper>
        </NavBarWrapper>;
    }
}

export default NavBar;
