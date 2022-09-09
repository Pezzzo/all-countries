import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton } from '../../../common-styles/styled';
import useSelectors from '../../../hooks/useSelectors';
import { getPartDataLocalStorage, getPartData } from '../../../localStorage/localStorage';
import { deleteSelector } from '../../../util/util';
import Button from '../../ui/Button/Button';
import { StyledMain, StyledTextWrapper, StyledTitle1, StyledTitle2, StyledTitle3, LinkWrapper } from './styled';

const HomePage = () => {

  const { started, originalData, partData } = useSelectors();

  const dispatch = useDispatch();

  setTimeout(() => deleteSelector('.title1'), 1000);
  setTimeout(() => deleteSelector('.title2'), 2000);
  setTimeout(() => deleteSelector('.title3'), 3000);

  return (
    <>
      <StyledMain>
        <LinkWrapper>
          <Link to='/game'>
            <PlayButton type="button">
              {
                started ?
                  <Button clickHandler={() => getPartDataLocalStorage(dispatch, partData)}>
                    continue
                  </Button> :
                  <Button clickHandler={() => getPartData(dispatch, originalData)}>
                    start
                  </Button>
              }
            </PlayButton>
          </Link>
        </LinkWrapper>
        <StyledTextWrapper>
          <StyledTitle1 className="title1 display-none">There are many countries in the world</StyledTitle1>
          <StyledTitle2 className="title2 display-none">each country has its own symbol - the flag</StyledTitle2>
          <StyledTitle3 className="title3 display-none">how well do you know them?</StyledTitle3>
        </StyledTextWrapper>
      </StyledMain>
    </>
  );
}
export default HomePage;
