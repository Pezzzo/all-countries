import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton } from '../../../common-styles/styled';
import { getPartDataLocalStorage } from '../../../localStorage/localStorage';
import Button from '../../ui/Button/Button';
import { StyledMain, StyledTextWrapper, StyledTitle, LinkWrapper } from './styled';

const HomePage = () => {

  const dispatch = useDispatch();
  let started = localStorage.getItem('started');

  return (
    <>
      <StyledMain>
        <LinkWrapper>
          <Link to='/game'>
            {
              started !== null || undefined ?
                <PlayButton>
                  <Button clickHandler={() => getPartDataLocalStorage(dispatch)}>
                    continue
                  </Button>
                </PlayButton>
                :
                null
            }
          </Link>
        </LinkWrapper>
        <StyledTextWrapper>
          <StyledTitle>в мире много стран, но сколько знаете вы?</StyledTitle>
        </StyledTextWrapper>
      </StyledMain>
    </>
  );
}
export default HomePage;
