import React from 'react';
import { StyledP } from './styled';


interface IButton {
  children?: React.ReactNode
  clickHandler?: () => void
  disabled?: string
}

const Button = ({ children, clickHandler }: IButton) => {

  return (
    <>
      <StyledP onClick={clickHandler}>
        {children}
      </StyledP>
    </>
  );
}
export default Button;
