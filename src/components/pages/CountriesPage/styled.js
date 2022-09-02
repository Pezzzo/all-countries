import styled from "styled-components";

export const FlagsList = styled.ul`
grid-column: 2/-1;
display: flex;
flex-wrap: wrap;
`
export const CountriesList = styled.ul`
grid-column: 1/2;
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
flex-direction: column;
`
export const StyledP = styled.p`
margin: 0;
font-weight: 500;
font-size: 16px;
cursor: pointer;
background-color: ${(props) => props.theme.colorGrey};
`
export const StyledLi = styled.li`
display: flex;
list-style: none;
`
export const StyledMain = styled.main`
display: grid;
grid-template-columns: 300px 1fr;
gap-column: 40px;
`
