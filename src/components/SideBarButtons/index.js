import styled from "styled-components";
import { Link } from 'react-router-dom';

const SideBarButtons = styled(Link)`
  height: 3rem;
  width: 13rem;
  padding-left: 2%;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.selected ? props.theme.colors.secondary : props.theme.colors.gray)};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  text-decoration: none;
  font-weight: 400;
  clip-path: polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 60px), calc(100% - 45px) 100%, 15px 100%, 0 100%);
`;

export default SideBarButtons;
