import styled from "styled-components";
import { defaultTheme } from "../../../common-styles/defaultTheme";

interface BottonProps {
  activeState: boolean;
}

export const ButtonsWrapper = styled.div`
width: max-content;
margin: 0 auto;
display: flex;
justify-content: center;
`;

export const ButtonOpened = styled.button<BottonProps>`
border: none;
border-radius: 20px;
font-weight: 700;
font-size: 26px;
padding: 0 30px;
margin-right: 2px;
color: ${(props) => props.theme.colorDarkGreen};
background-color: ${(props) => props.theme.colorWhite};

cursor: pointer;

box-shadow: ${props => props.activeState ? `0 0 4px 2px ${defaultTheme.colorDarkBlue}` : 'none'};
outline: ${props => props.activeState ? `1px solid ${defaultTheme.colorDarkBlue}` : 'none'};
opacity: ${props => props.activeState ? '1' : '0.4'};
`;

export const ButtonNotOpened = styled(ButtonOpened)`
color: ${(props) => props.theme.colorRed};
margin-left: 2px;
box-shadow: ${props => !props.activeState ? `0 0 4px 2px ${defaultTheme.colorDarkBlue}` : 'none'};
outline: ${props => !props.activeState ? `1px solid ${defaultTheme.colorDarkBlue}` : 'none'};
opacity: ${props => !props.activeState ? '1' : '0.4'};
`;
