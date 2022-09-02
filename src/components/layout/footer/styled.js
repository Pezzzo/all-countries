import styled from "styled-components";

export const StyledFooter = styled.footer`
position: fixed;
min-height: 60px;
width: 100%;
bottom: 0;
display: flex;
align-items: center;
background-color: ${(props) => props.theme.colorGrey};
`
