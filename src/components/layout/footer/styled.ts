import styled from "styled-components";
import { logo } from "../../../assets/images";

export const StyledFooter = styled.footer`
position: fixed;
min-height: 40px;
max-width: 1280px;
width: 100%;
bottom: 0;
display: flex;
flex-wrap: wrap;
align-items: center;
padding-right: 40px;
justify-content: space-between;
background-color: ${(props) => props.theme.colorWhite};
z-index: 2;

@media ${(props) => props.theme.media.tablet} {
  padding-right: 80px;
  min-height: 60px;
}
`;

export const StyledLink = styled.a`
color: ${(props) => props.theme.colorBlackText};
opacity: 0.5;
transition: 0.3s;
display: block;
min-height: 10px;
line-height: 10px;
padding: 6px 10px;

&:hover {
  opacity: 1;
}
`;

export const StyledLinkAutor = styled(StyledLink)`
position: relative;

&::after {
position: absolute;
content: '';
top: 2px;
right: -14px;
width: 20px;
height: 20px;
background-color: ${(props) => props.theme.colorWhite};
background: url(${logo}) 50% 50% no-repeat;
background-size: contain;

@media ${(props) => props.theme.media.desktop} {
  top: -2px;
right: -24px;
width: 26px;
height: 26px;
}
`;

export const Span = styled.span`
font-size: 12px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 14px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 16px;
}
`;
