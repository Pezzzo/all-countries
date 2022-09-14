import styled from 'styled-components';
import { pulseAnimation, flipAnimation } from '../../../common-styles/animations';

export const StyledP = styled.p`
margin: 0;
padding: 4px 6px;
font-weight: 600;
font-size: 14px;
line-height: 14px;

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

@media ${(props) => props.theme.media.tablet} {
  font-size: 16px;
  line-height: 16px;
}

@media ${(props) => props.theme.media.desktop} {
  font-size: 18px;
  line-height: 20px;
}
`;

export const StyledLi = styled.li`
display: flex;
list-style: none;
margin-bottom: 2px;
margin-top: 2px;
`;
