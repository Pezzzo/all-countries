import { keyframes } from 'styled-components';
import {
  flipOutX,
  headShake,
  fadeIn,
  fadeOut,
  fadeInLeft,
  fadeInRight,
  fadeInUp
} from 'react-animations';

export const shakeAnimation = keyframes`${headShake}`;
export const flipAnimation = keyframes`${flipOutX}`
export const fadeInAnimation = keyframes`${fadeIn}`
export const fadeOutAnimation = keyframes`${fadeOut}`
export const fadeInLeftAnimation = keyframes`${fadeInLeft}`
export const fadeInRightAnimation = keyframes`${fadeInRight}`
export const fadeInUpAnimation = keyframes`${fadeInUp}`

export const fadeInButtonAnimation = keyframes`
from {
  opacity: 0;
  pointer-events: none;
}

50% {
  opacity: 0;
}

to {
  opacity: 1;
  pointer-events: auto;
}
`;

export const pulseAnimation = keyframes`
0% {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  z-index: 5;
}

90% {
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0);
    z-index: 5;
}

100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    z-index: 5;
}
`;

export const fadeInTitle1Animation = keyframes`

0% {
  opacity: 0;
}

10% {
  opacity: 0;
}

40% {
  opacity: 1;
}

100% {
  opacity: 1;
}
`;

export const fadeInTitle2Animation = keyframes`

0% {
  opacity: 0;
}

40% {
  opacity: 0;
}

70% {
  opacity: 1;
}

100% {
  opacity: 1;
}
`;

export const fadeInTitle3Animation = keyframes`

0% {
  opacity: 0;
}

70% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;
