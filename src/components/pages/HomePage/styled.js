import styled from "styled-components";
import Bg from '../../../assets/home-bg.jpg'

export const StyledMain = styled.main`
position: relative;
width: 100%;
height: 80vh;
background: url(${Bg}) 50% 50% no-repeat;
background-size: contain;
`
export const StyledTextWrapper = styled.div`
position: absolute;
width: 100%;
top: 40%;
left: 50%;
transform: translateX(-50%);
`
export const StyledTitle = styled.h2`
display: block;
font-size: 40px;
line-height: 40px;
text-align: center;
`
export const LinkWrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 20px;
width: 100%;
`
