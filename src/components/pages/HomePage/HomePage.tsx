import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton } from '../../../common-styles/styled';
import { getPartDataLocalStorage, getPartData } from '../../../localStorage/localStorage';
import Button from '../../ui/Button/Button';
import { StyledMain, StyledTextWrapper, StyledTitle1, StyledTitle2, StyledTitle3, LinkWrapper } from './styled';

const HomePage = () => {

  const dispatch = useDispatch();
  let started = localStorage.getItem('started');

  const delay = (selector: string) => {
    let title = document.querySelector(selector);
    title?.classList.remove('none');
  };

  setTimeout(() => delay('.title2'), 1000);
  setTimeout(() => delay('.title3'), 2000);

  return (
    <>
      <StyledMain>
        <LinkWrapper>
          <Link to='/game'>
            <PlayButton>
              {
                started !== null || undefined ?
                  <Button clickHandler={() => getPartDataLocalStorage(dispatch)}>
                    continue
                  </Button> :
                  <Button clickHandler={() => getPartData(dispatch)}>
                    start
                  </Button>
              }
            </PlayButton>
          </Link>
        </LinkWrapper>
        <StyledTextWrapper>
          <StyledTitle1>There are many countries in the world</StyledTitle1>
          <StyledTitle2 className="title2 none">each country has its own symbol - the flag</StyledTitle2>
          <StyledTitle3 className="title3 none">how well do you know them?</StyledTitle3>
        </StyledTextWrapper>
      </StyledMain>
    </>
  );
}
export default HomePage;
