import React, {useState} from 'react';
import {HeaderWrapper, Menu} from './Header.style';

const Header = () => {
  const [isMenu, setMenu] = useState(false);

  const openMenu = () => {
    // TODO: Add dropdown menu instead of navigation menu
    setMenu(!isMenu);
  }

  return (<HeaderWrapper>
      <Menu onClick={openMenu}/>
    </HeaderWrapper>
  )
}

export default Header;
