import styled from "styled-components";
import { fadeInAnimation } from "../../../common-styles/animations";

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

export const FlagsList = styled.ul`
padding: 0;
grid-column: 2/-1;
display: flex;
flex-wrap: wrap;
align-content: start;
justify-content: center;

@media ${(props) => props.theme.media.tablet} {
  padding-left: 30px;
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
