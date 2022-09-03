import styled from "styled-components";
import logo from '../../../assets/icon-github.png'

export const StyledFooter = styled.footer`
position: fixed;
min-height: 60px;
max-width: 1280px;
width: 100%;
bottom: 0;
display: flex;
padding-right: 60px;
align-items: center;
justify-content: space-between;
background-color: ${(props) => props.theme.colorWhite};
z-index: 2;

`
export const StyledLink = styled.a`
color: ${(props) => props.theme.colorBlackText};
opacity: 0.5;
transition: 0.3s;

&:hover {
  opacity: 1;
}
`
export const StyledLinkAutor = styled(StyledLink)`
position: relative;

&::after {
position: absolute;
content: '';
top: -2px;
right: -34px;
width: 30px;
height: 30px;
background-color: ${(props) => props.theme.colorWhite};
background: url(${logo}) 50% 50% no-repeat;
background-size: contain;
}
`
