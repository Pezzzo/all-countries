import styled from 'styled-components';

export const StyledPOpen = styled.p`
margin: 0;
padding: 4px;
line-height: 24px;
font-weight: 600;
cursor: pointer;
display: flex;
justify-content: space-between;
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
background-color: ${(props) => props.theme.colorBlackModal10};
transition: 0.4s;

&.current-country-info-active {
  max-height: 100%;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

&.current-country-info-passive {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
`
