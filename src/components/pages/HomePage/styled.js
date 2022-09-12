import styled from 'styled-components';
import Bg from '../../../assets/home-bg.jpg'
import {
  fadeInAnimation,
  fadeInTitle1Animation,
  fadeInTitle2Animation,
  fadeInTitle3Animation
} from '../../../common-styles/animations';

export const Main = styled.main`
position: relative;
width: 100%;
height: 80vh;
background: url(${Bg}) 50% 80% no-repeat;
background-size: contain;
animation: 2s ${fadeInAnimation};
`
export const TextWrapper = styled.div`
position: absolute;
width: 100%;
margin-top: 34px;
top: 0;
left: 50%;
transform: translateX(-50%);
`
export const Title1 = styled.h2`
display: block;
font-size: 30px;
line-height: 40px;
text-align: center;

animation: 4s ${fadeInTitle1Animation};
`
export const Title2 = styled(Title1)`
animation: 4s ${fadeInTitle2Animation};
`
export const Title3 = styled(Title1)`
animation: 4s ${fadeInTitle3Animation};
`

export const LinkWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
`
