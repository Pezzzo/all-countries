import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Bg from '../../../assets/home-bg.jpg'

const fadeAnimation = keyframes`${fadeIn}`;

export const StyledMain = styled.main`
position: relative;
width: 100%;
height: 80vh;
background: url(${Bg}) 50% 80% no-repeat;
background-size: contain;
`
export const StyledTextWrapper = styled.div`
position: absolute;
width: 100%;
margin-top: 34px;
top: 0;
left: 50%;
transform: translateX(-50%);
`
export const StyledTitle1 = styled.h2`
display: block;
font-size: 30px;
line-height: 40px;
text-align: center;

animation: 2s ${fadeAnimation};

&.none {
  display: none;
}
`
export const StyledTitle2 = styled(StyledTitle1)``;

export const StyledTitle3 = styled(StyledTitle1)``;

export const LinkWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
`
