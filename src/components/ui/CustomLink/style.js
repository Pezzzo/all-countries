import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
text-align: center;
font-weight: 600;
text-transform: uppercase;
min-width: 120px;
padding: 5px 10px;
border: none;
cursor: pointer;
margin: 0 4px 4px 4px;
color: ${(props) => props.theme.colorBlackText};
background-color: ${(props) => props.theme.colorLightBlue};
border-radius: 3px;
transition: 0.3s;

&:hover {
  background-color: ${(props) => props.theme.colorBlue};
}

@media ${(props) => props.theme.media.tablet} {
  min-width: 165px;
  padding: 10px 20px;
}

@media ${(props) => props.theme.media.desktop} {
  min-width: 200px;
}
`;
