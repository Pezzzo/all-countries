import styled from "styled-components";
import { fadeInAnimation, fadeOutAnimation } from "../../../common-styles/animations";

export const ModalWrapper = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
background-color: ${(props) => props.theme.colorBlackModal};

&.closed {
  animation: 0.3s ${fadeInAnimation};
}

&.open {
  animation: 0.3s ${fadeOutAnimation};
}
`;

export const StyledDiv = styled.div`
position: relative;
margin-right: 30px;
margin-left: 30px;
word-break: break-word;
max-width: 400px;
min-height: 200px;
padding: 20px;
border-radius: 10px;
background-color: ${(props) => props.theme.colorGrey};

@media ${(props) => props.theme.media.tablet} {
  max-width: 500px;
  min-height: 400px;
}

@media ${(props) => props.theme.media.desktop} {
  max-width: 800px;
  min-height: 400px;
}
`;

export const ImgWrapper = styled.div`
text-align: center;
margin-bottom: 20px;
`;

export const StyledImg = styled.img`
box-shadow: 0 0 6px 2px ${(props) => props.theme.colorBlack};
width: 160px;
height: 100px;
object-fit: fill;

@media ${(props) => props.theme.media.tablet} {
  width: 300px;
  height: 180px;
}
`;

export const CloseButton = styled.button`
position: absolute;
font-size: 50px;
width: 40px;
height: 40px;
border-radius: 50%;
color: ${(props) => props.theme.colorRed};
background-color: ${(props) => props.theme.colorBlackModal30};
opacity: 0.5;
top: 5px;
right: 5px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
overflow: hidden;
border: none;

&:hover {
  opacity: 0.9;
}
`;
