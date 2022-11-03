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

@media ${(props) => props.theme.media.tablet} {
font-size: 16px;
line-height: 24px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 18px;
  line-height: 28px;
}
`;

export const StyledPClosed = styled(StyledPOpen)`
&:hover {
  background-color: ${(props) => props.theme.colorLightRed};
}
`;

export const StyledImg = styled.img`
width: 180px;
height: 100px;
`;

export const Wrapper = styled.div`
background-color: ${(props) => props.theme.colorBlackModal10};
`;

export const StyledDiv = styled.div`
padding: 10px;
`;
