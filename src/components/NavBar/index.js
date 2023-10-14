import styled from "styled-components";

import dmsLogo from '../../assets/img/dms-logo.png';
import SVGSun from '../../assets/svg/SVGSun.js';
import SVGUser from '../../assets/svg/SVGUser.js';

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  & img {
    padding: 1rem;
  }
  
  & div {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    padding-right: 1rem;
    align-items: center;
  }
`;

function NavBar() {
    return (
        <Nav>
            <img src={dmsLogo}/>
            <div>
                <SVGUser fill="white" height="33" width="33"/>
                <SVGSun fill="white" height="33" width="33"/>
            </div>
        </Nav>
    )
}

export default NavBar;