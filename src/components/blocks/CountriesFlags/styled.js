import styled, { keyframes } from 'styled-components';
import { headShake, flipOutX } from 'react-animations';

const shakeAnimation = keyframes`${headShake}`;
const flipAnimation = keyframes`${flipOutX}`

export const Img = styled.img`
width: 140px;
height: 75px;
box-shadow: 0 0 1px 1px ${(props) => props.theme.colorBlack};
object-fit: cover;

&.flagActive {
  cursor: pointer;
  opacity: 1;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 6px 3px ${(props) => props.theme.colorBlack};
  }
}

&.flagPassive {
  cursor: auto;
  pointer-events: none;
}

&.wrongAttempt {

  animation: 0.5s ${shakeAnimation};
}

&.rightAnswerAnimation {
  box-shadow: 0 0 10px 4px ${(props) => props.theme.colorGreen};
  animation: 0.7s ${flipAnimation};
}
`
export const StyledFlagsLi = styled.li`
text-align: end;
width: 170px;
height: 100px;
margin-bottom: 20px;
list-style: none;
`
