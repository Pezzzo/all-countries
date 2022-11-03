import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { defaultTheme } from './defaultTheme';

export const GlobalStyle = createGlobalStyle`

${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    min-height: 100%;
    background-color: ${defaultTheme.colorWhite};
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
  padding-left: 10px;
  padding-right: 10px;
  font-weight:  ${defaultTheme.fontWeightDefault};
  max-width: ${defaultTheme.pageWidth};
  font-family: ${defaultTheme.fontFamily};
  font-size: ${defaultTheme.fontSizeDefault};
  line-height: ${defaultTheme.lineHeightDefault};
  color: ${defaultTheme.colorBlackText};

  a {
    text-decoration: none;
  }

  @media ${defaultTheme.media.tablet} {
    padding-left: 30px;
    padding-right: 30px;
  }
}

img {
    max-width: 100%;
    height: auto;
  }
`;
