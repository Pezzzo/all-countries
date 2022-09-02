import React from 'react';

interface ITitle {
  children: string;
}

const Title = ({ children}: ITitle) => {
  return (
    <>
    <h2>{children}</h2>
    </>
  );
}
export default Title;
