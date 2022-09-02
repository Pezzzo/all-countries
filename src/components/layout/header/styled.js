import styled from "styled-components";

export const StyledHeader = styled.header`
min-height: 80px;
padding-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${(props) => props.theme.colorGrey};
`
export const NavWrapper = styled.div`
width: 840px;
display: flex;
align-items: center;
flex-wrap: wrap;
`
export const CounterWrapper = styled.div`
min-width: 200px;
min-height: 47px;
border: 2px solid ${(props) => props.theme.colorBlue};
margin-bottom: 3px;
`
export const StyledP = styled.p`
font-size: 16px;
font-weight: 500;
`
export const StyledSpanOpen = styled.span`
font-size: 20px;
font-weight: 600;
`
export const StyledSpanAttempts = styled.span`
font-size: 20px;
font-weight: 600;
color: ${(props) => props.theme.colorRed};
`
