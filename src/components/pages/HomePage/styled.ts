import styled from 'styled-components';
import { bg } from '../../../assets/images';
import {
  fadeInAnimation,
  fadeInTitle1Animation,
  fadeInTitle2Animation,
  fadeInTitle3Animation
} from '../../../common-styles/animations';

export const Main = styled.main`
position: relative;
width: 100%;
min-height: 100vh;
background: url(${bg}) 50% 200px no-repeat;
background-size: contain;
animation: 1s ${fadeInAnimation};
`;

export const TextWrapper = styled.div`
position: absolute;
width: 100%;
margin-top: 34px;
top: 0;
left: 50%;
transform: translateX(-50%);
`;

export const Title1 = styled.h2`
display: block;
font-size: 18px;
line-height: 24px;
text-align: center;
animation: 4s ${fadeInTitle1Animation};

@media ${(props) => props.theme.media.tablet} {
  font-size: 24px;
  line-height: 30px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 30px;
  line-height: 40px;
}
`;

export const Title2 = styled(Title1)`
animation: 4s ${fadeInTitle2Animation};
`;

export const Title3 = styled(Title1)`
animation: 4s ${fadeInTitle3Animation};
`;

export const LinkWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-top: 30px;
`;
