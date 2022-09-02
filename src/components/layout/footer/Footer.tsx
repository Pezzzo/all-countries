import React from 'react';
import { StyledFooter, StyledLink } from './styled';

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
      </StyledFooter>
    </>
  );
}
export default Footer;
