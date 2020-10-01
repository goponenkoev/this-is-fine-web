import styled from 'styled-components/macro'
import {ReactComponent as menu} from '../assets/images/menu.svg';

export const HeaderWrapper = styled.div`
  background-color: var(--Main600);
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--HeaderHeight);
`
// TODO Create svg with fill attibute to change color easily
export const Menu = styled(menu)`
  margin-left: 3vh;
  color: var(--Main100);
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`