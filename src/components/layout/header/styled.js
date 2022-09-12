import styled from "styled-components";

export const StyledHeader = styled.header`
min-height: 80px;
padding-top: 20px;
margin-bottom: 20px;
width: 100%;
background-color: ${(props) => props.theme.colorWhite};
`
export const NavWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`
