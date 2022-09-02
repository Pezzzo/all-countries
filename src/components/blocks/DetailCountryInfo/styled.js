import styled from "styled-components";

export const ModalWrapper = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.colorBlackModal};
`
export const StyledDiv = styled.div`
position: relative;
max-width: 600px;
min-height: 400px;
padding: 20px;
border-radius: 10px;
background-color: ${(props) => props.theme.colorGrey};
`
export const ImgWrapper = styled.div`
text-align: center;
`
export const StyledImg = styled.img`
outline: 2px solid ${(props) => props.theme.colorDarkGray};
`

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
`
