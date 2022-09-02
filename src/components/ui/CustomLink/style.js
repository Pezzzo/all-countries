import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
text-align: center;
font-weight: 600;
text-transform: uppercase;
color: ${(props) => props.theme.colorBlackText};
min-width: 200px;
background-color: ${(props) => props.theme.colorLightBlue};
padding: 10px 20px;
border: none;
cursor: pointer;
margin: 0 4px 4px 4px;
border-radius: 3px;
transition: 0.3s;

&:hover {
  background-color: ${(props) => props.theme.colorBlue};
}
`
