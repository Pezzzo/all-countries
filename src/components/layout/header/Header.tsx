import React from 'react';
import CustomLink from '../../ui/CustomLink/CustomLink';
import { StyledHeader, NavWrapper } from './styled';

const Header = () => {

  return (
    <>
      <StyledHeader>
        <NavWrapper>
          <CustomLink to='/'>
            home
          </CustomLink>
          <CustomLink to='/game'>
            game
          </CustomLink>
          <CustomLink to='/rules'>
            rules
          </CustomLink>
          <CustomLink to='/results'>
          results
          </CustomLink>
        </NavWrapper>
      </StyledHeader>
    </>
  );
}
export default Header;
