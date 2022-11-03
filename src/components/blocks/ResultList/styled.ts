import styled from "styled-components";
import { fadeInAnimation } from "../../../common-styles/animations";

export const ListsWrapper = styled.div`
animation: 1s ${fadeInAnimation};

@media ${(props) => props.theme.media.desktop} {
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
}
`;

export const OlOpened = styled.ol`
margin: 0 auto;
padding: 0 40px;
display: flex;
flex-direction: column;
width: 100%;
max-width: 610px;
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
