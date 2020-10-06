import styled from 'styled-components/macro'

export const NavBarWrapper = styled.div`
  background-color: var(--Main900);
  display: block;
  width: 250px;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavBarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  margin-top: 65px;
`

export const NavBarLogo = styled.img`
  display: flex;
  text-align: center;
  align-items: center;
  height: 180px;
  width: 180px;
`