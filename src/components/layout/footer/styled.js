import styled from "styled-components";

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
`
export const StyledLink = styled.a`
color: ${(props) => props.theme.colorBlackText};

&:hover {
  color: ${(props) => props.theme.colorDarkBlue};
}
`
