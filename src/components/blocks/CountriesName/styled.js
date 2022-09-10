import styled from 'styled-components';
import { pulseAnimation, flipAnimation } from '../../../common-styles/animations';

export const StyledP = styled.p`
margin: 0;
line-height: 20px;
padding: 4px 8px;
margin-bottom: 4px;
font-weight: 600;
background-color: ${(props) => props.theme.colorWhite};

&.countryNamePassive {
  cursor: auto;
  outline: 2px solid ${(props) => props.theme.colorBlack};
  animation: 1s ${pulseAnimation} infinite;
}

&.countryNameActive {
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colorBlackModal30};
  }
}

&.rightAnswerAnimation {
  animation: 1s ${flipAnimation};
}
`
export const StyledLi = styled.li`
display: flex;
list-style: none;
`
