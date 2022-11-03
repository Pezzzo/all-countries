import styled from "styled-components";
import { fadeInButtonAnimation, fadeInTitle1Animation } from "../../../common-styles/animations";
import { H2, PlayButton } from "../../../common-styles/common";

export const EndRoundTitle = styled(H2)`
animation: 3s ${fadeInTitle1Animation};
`;

export const FadeButton = styled(PlayButton)`

animation: 2s ${fadeInButtonAnimation};
`;
