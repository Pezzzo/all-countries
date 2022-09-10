import { keyframes } from 'styled-components';
import { flipOutX, headShake, fadeIn, fadeOut } from 'react-animations';

export const shakeAnimation = keyframes`${headShake}`;
export const flipAnimation = keyframes`${flipOutX}`
export const fadeInAnimation = keyframes`${fadeIn}`
export const fadeOutAnimation = keyframes`${fadeOut}`

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
`
