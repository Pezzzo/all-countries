import styled from "styled-components";
import { fadeInAnimation } from "./animations";

export const PlayButton = styled.button`
color: ${(props) => props.theme.colorBlackText};
background-color: ${(props) => props.theme.colorLightGreen};
border: none;
cursor: pointer;
border-radius: 10px;
transition: all 0.5s;

&:hover {
  background-color: ${(props) => props.theme.colorGreen};
}
`;

export const ResetButton = styled(PlayButton)`
background-color: ${(props) => props.theme.colorLightRed};

&:hover {
  background-color: ${(props) => props.theme.colorRed};
}
`;

export const IntermediateWrapper = styled.div`
width: 100%;
height: 100%;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
`;

export const RowWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 30px;
animation: 1s ${fadeInAnimation};

@media ${(props) => props.theme.media.tablet} {
  margin-bottom: 20px;
}
`;

export const ColumnWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const StyledP = styled.p`
margin: 0;
padding: 4px;
line-height: 20px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 16px;
  line-height: 22px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 18px;
  line-height: 24px;
}
`;

export const StyledSpan = styled.span`
font-weight: 600;
`;

export const StyledLinkToMap = styled.a`
color: ${(props) => props.theme.colorDarkBlue};

&:hover {
  color: ${(props) => props.theme.colorRed};
}
`;

export const H2 = styled.h2`
font-size: 18px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 20px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 22px;
}
`;

export const H3 = styled.h3`
font-size: 16px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 18px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 20px;
}
`;
