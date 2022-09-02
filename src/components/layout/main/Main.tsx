import React from 'react';
import { StyledMain } from './styled';

interface IMain {
  children?: React.ReactNode
}

const Main = ({children}: IMain) => {
  return (
    <>
    <StyledMain>
    {children}
    </StyledMain>
    </>
  );
}

export default Main;
