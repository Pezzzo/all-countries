import React from 'react';
import { useMatch } from 'react-router-dom';
import { StyledLink } from './style';

interface ILink {
  children?: React.ReactNode
  clickHandler?: () => void
  to: string
}

const CustomLink = ({ children, to, clickHandler}: ILink) => {
  const match = useMatch(to);
  return (
    <>
      <StyledLink onClick={clickHandler}
        to={to}
        style={{
          backgroundColor: match ? 'rgb(125, 194, 255)' : '',
        }}>
        {children}
      </StyledLink>
    </>
  );
}
export default CustomLink;
