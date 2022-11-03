import styled from 'styled-components';
import { fadeInAnimation } from '../../../common-styles/animations';

export const TextWrapper = styled.div`
padding: 30px;
animation: 1s ${fadeInAnimation};
`;

export const P = styled.p`
font-size: 14px;

@media ${(props) => props.theme.media.tablet} {
  font-size: 16px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 18px;
}
`;
