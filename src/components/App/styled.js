import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`

${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    height: 100%;
    background-color: ${(props) => props.theme.colorGrey};
  }

body,
html {
    margin: 0 auto;
  }

body {
  position: relative;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  font-weight:  ${(props) => props.theme.fontWeightDefault};
  max-width: ${(props) => props.theme.pageWidth};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorBlackText};

  a {
    text-decoration: none;
  }
}

img {
    max-width: 100%;
    height: auto;
  }
`
