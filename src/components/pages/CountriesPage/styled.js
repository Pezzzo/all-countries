import styled from "styled-components";
import { H2, PlayButton } from "../../../common-styles/styled";
import {
  fadeInLeftAnimation,
  fadeInRightAnimation,
  fadeInAnimation,
  fadeInButtonAnimation,
  fadeInTitle1Animation
} from "../../../common-styles/animations";

export const FlagsList = styled.ul`
padding: 0;
grid-column: 2/-1;
display: flex;
flex-wrap: wrap;
align-content: start;
justify-content: center;
max-width: 350px;

@media ${(props) => props.theme.media.tablet} {
  padding-left: 30px;
  max-width: 100%;
}

@media ${(props) => props.theme.media.desktop} {
  padding-left: 60px;
}
`;

export const CountriesList = styled.ul`
grid-column: 1/2;
margin: 0;
padding: 0;
padding-left: 10px;
display: flex;
flex-wrap: wrap;
flex-direction: column;

@media ${(props) => props.theme.media.tablet} {
  padding-left: 30px;
}
`;

export const ListsWrapper = styled.div`
display: grid;
grid-template-columns: 150px 1fr;
gap-column: 40px;
animation: 1.5s ${fadeInAnimation};

@media ${(props) => props.theme.media.tablet} {
  grid-template-columns: 250px 1fr;
}

@media ${(props) => props.theme.media.desktop} {
  grid-template-columns: 320px 1fr;
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

export const CounterWrapper = styled.div`
min-width: 100px;
margin-left: auto;
padding: 0 10px;
margin-right: 10px;
margin-bottom: 20px;
box-shadow: 0 0 2px 2px ${(props) => props.theme.colorBlackText};
animation: 0.7s ${fadeInRightAnimation};
`;

export const CounterFail = styled.p`
font-size: 14px;
font-weight: 500;
margin: 0;


@media ${(props) => props.theme.media.tablet} {
  font-size: 18px;
  padding: 2px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 22px;
  padding: 4px;
}
`;

export const CounterRound = styled(CounterFail)`
animation: 0.7s ${fadeInLeftAnimation};
font-size: 16px;
font-weight: 600;
padding-left: 10px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 20px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 24px;
}
`;

export const Span = styled.span`
font-size: 16px;
font-weight: 600;
margin: 0;
color: ${(props) => props.theme.colorRed};

@media ${(props) => props.theme.media.tablet} {
  font-size: 22px;
}
`;

export const InfoWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

export const BeforeWrapper = styled.div`
width: 100%;
height: 100%;
`;

export const P = styled.p`
@media ${(props) => props.theme.media.tablet} {
  font-size: 18px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 22px;
}
`;

export const EndRoundH2 = styled(H2)`
animation: 3s ${fadeInTitle1Animation};
`
export const FadeButton = styled(PlayButton)`

animation: 2s ${fadeInButtonAnimation};
`
