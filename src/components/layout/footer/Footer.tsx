import React from 'react';
import { StyledFooter, StyledLink, StyledLinkAutor } from './styled';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledLink
          href="https://restcountries.com/"
          target="_blank"
          rel="noopener noreferrer">
          restcountries.com
        </StyledLink>
        <StyledLink
          href="https://ru.freepik.com/free-vector/illustration-of-global-icon_2687446.htm#query=map&position=5&from_view=keyword"
          target="_blank"
          rel="noopener noreferrer">
          rawpixel.com
        </StyledLink>
        <StyledLinkAutor href="https://github.com/Pezzzo" target="_blank" rel="noopener noreferrer">
          Pezzzo
        </StyledLinkAutor>
      </StyledFooter>
    </>
  );
}
export default Footer;
