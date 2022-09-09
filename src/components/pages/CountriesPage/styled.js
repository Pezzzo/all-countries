import styled from "styled-components";

export const FlagsList = styled.ul`
padding-left: 60px;
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
export const StyledLi = styled.li`
display: flex;
list-style: none;
`
export const Main = styled.main`
display: grid;
grid-template-columns: 300px 1fr;
gap-column: 40px;
`
export const IntermediateMain = styled.main`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

export const CounterWrapper = styled.div`
min-width: 100px;
margin-left: auto;
padding: 0 10px;
margin-right: 10px;
margin-bottom: 20px;
box-shadow: 0 0 2px 2px ${(props) => props.theme.colorBlackText};;
`
export const StyledCounterFail = styled.p`
font-size: 18px;
font-weight: 500;
margin: 0;
`
export const StyledCounterRound = styled(StyledCounterFail)`
font-size: 24px;
font-weight: 600;
padding-left: 10px;
`

export const StyledSpan = styled.span`
font-size: 20px;
font-weight: 600;
margin: 0;
color: ${(props) => props.theme.colorRed};
`
export const InfoWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
export const BeforeWrapper = styled.div`
width: 100%;
height: 100%;
`
