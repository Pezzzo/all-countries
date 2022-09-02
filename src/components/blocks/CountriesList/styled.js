import styled from "styled-components";

export const StyledPOpen = styled.p`
margin: 0;
padding: 4px;
cursor: pointer;
transition: all 0.3s;

&:hover {
  background-color: ${(props) => props.theme.colorLightGreen};
}
`
export const StyledPClosed = styled(StyledPOpen)`
&:hover {
  background-color: ${(props) => props.theme.colorLightRed};
}
`
export const StyledImg = styled.img`
width: 200px;
height: 120px;
`
export const Wrapper = styled.div`
padding: 10px;
background-color: ${(props) => props.theme.colorBlackModal10};
`
