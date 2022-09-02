import styled from "styled-components";

export const PlayButton = styled.button`
color: ${(props) => props.theme.colorBlackText};
min-width: 140px;
background-color: ${(props) => props.theme.colorLightGreen};
padding: 6px 10px;
border: none;
cursor: pointer;
border-radius: 10px;
transition: all 0.5s;

&:hover {
  background-color: ${(props) => props.theme.colorGreen};
}
`
export const ResetButton = styled(PlayButton)`
background-color: ${(props) => props.theme.colorLightRed};

&:hover {
  background-color: ${(props) => props.theme.colorRed};
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const StyledP = styled.p`
margin: 0;
padding: 4px;
`
export const StyledSpan = styled.span`
font-weight: 600;
`
