import styled from "styled-components";
import { fadeInLeftAnimation, fadeInRightAnimation } from "../../../common-styles/animations";

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

export const CounterWrapper = styled.div`
min-width: 100px;
margin-left: auto;
padding: 0 10px;
margin-right: 10px;
margin-bottom: 20px;
box-shadow: 0 0 2px 2px ${(props) => props.theme.colorBlackText};
animation: 0.7s ${fadeInRightAnimation};
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

export const InfoWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
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
