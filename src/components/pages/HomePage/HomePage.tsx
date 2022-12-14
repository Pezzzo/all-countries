import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton } from '../../../common-styles/common';
import { useSelectors } from '../../../hooks/useSelectors';
import { getPartDataLocalStorage, getPartData } from '../../../data/data';
import { Button } from '../../ui/Button/Button';
import {
  Main,
  TextWrapper,
  Title1,
  Title2,
  Title3,
  LinkWrapper
} from './styled';

const HomePage: React.FC = () => {

  const { started, originalData, partData, sortPartData } = useSelectors();

  const dispatch = useDispatch();

  return (
    <>
      <Main>
        <LinkWrapper>
          <Link to='/game'>
            <PlayButton type="button">
              {
                started ?
                  <Button clickHandler={() => getPartDataLocalStorage(dispatch, partData, sortPartData)}>
                    continue
                  </Button> :
                  <Button clickHandler={() => getPartData(dispatch, originalData)}>
                    start
                  </Button>
              }
            </PlayButton>
          </Link>
        </LinkWrapper>
        <TextWrapper>
          <Title1>there are many countries in the world</Title1>
          <Title2>each country has own symbol - the flag</Title2>
          <Title3>how well do you know them?</Title3>
        </TextWrapper>
      </Main>
    </>
  );
}
export default HomePage;
