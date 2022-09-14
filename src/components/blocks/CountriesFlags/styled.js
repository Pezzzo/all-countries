import styled from 'styled-components';
import { shakeAnimation, flipAnimation } from '../../../common-styles/animations';

export const Img = styled.img`
width: 80px;
height: 50px;
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

@media ${(props) => props.theme.media.tablet} {
  width: 120px;
  height: 70px;
}

@media ${(props) => props.theme.media.desktop} {
  width: 160px;
  height: 90px;
}
`;

export const Li = styled.li`
text-align: end;
width: 90px;
height: 60px;
margin-bottom: 5px;
list-style: none;

@media ${(props) => props.theme.media.tablet} {
  width: 140px;
  height: 80px;
  margin-bottom: 10px;
}

@media ${(props) => props.theme.media.desktop} {
  width: 190px;
  height: 100px;
  margin-bottom: 20px;
}
`;
