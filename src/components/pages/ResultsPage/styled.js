import styled from "styled-components";
import { fadeInAnimation } from "../../../common-styles/animations";

export const ListsWrapper = styled.div`
animation: 1s ${fadeInAnimation};

@media ${(props) => props.theme.media.desktop} {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`;

export const ButtonsWrapper = styled.div`
width: max-content;
margin: 0 auto;
display: flex;
justify-content: center;

@media ${(props) => props.theme.media.desktop} {
  display: none;
}
`;

export const ButtonOpened = styled.button`
border: none;
border-radius: 20px;
font-weight: 700;
font-size: 26px;
padding: 0 30px;
margin-right: 2px;
color: ${(props) => props.theme.colorDarkGreen};
background-color: ${(props) => props.theme.colorWhite};
opacity: 0.4;
cursor: pointer;

&.result-botton-active {
  box-shadow: 0 0 4px 2px ${(props) => props.theme.colorDarkBlue};
  outline: 1px solid ${(props) => props.theme.colorDarkBlue};
  opacity: 1;
}
`;

export const ButtonNotOpened = styled(ButtonOpened)`
color: ${(props) => props.theme.colorRed};
margin-left: 2px;
`;

export const OlOpened = styled.ol`
margin: 0;
padding: 0 40px;
display: flex;
flex-direction: column;
max-width: 610px;
margin: 0 auto;

&.closed {
  display: none;

  @media ${(props) => props.theme.media.desktop} {
    display: block;
  }
}

@media ${(props) => props.theme.media.desktop} {
  margin: 0;
}
`;

export const OlClosed = styled(OlOpened)``;

export const OpenedP = styled.p`
margin: 0;
padding: 4px;
cursor: pointer;

&:hover {
  background-color: ${(props) => props.theme.colorLightGreen};
}
`;

export const ClosedP = styled(OpenedP)`

&:hover {
  background-color: ${(props) => props.theme.colorLightRed};
}
`;

export const ResetButtonWrapper = styled.div`
margin-left: auto;
`;

export const StyledSpan = styled.span`
font-size: 16px;
font-weight: 500;
padding-left: 10px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 18px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 20px;
}
`;
