import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton, RowWrapper, H2, H3, } from '../../../common-styles/styled';
import useSelectors from '../../../hooks/useSelectors';
import { getPartDataLocalStorage } from '../../../data/data';
import Button from '../../ui/Button/Button';
import { P, TextWrapper } from './styled';

const RulesPage = () => {

  const dispatch = useDispatch();

  const { partData, started, sortPartData } = useSelectors();

  return (
    <>
      {
        started &&
        <RowWrapper>
          <Link to='/game'>
            <PlayButton type="button">
              <Button clickHandler={() => getPartDataLocalStorage(dispatch, partData, sortPartData)}>continue</Button>
            </PlayButton>
          </Link>
        </RowWrapper>
      }
      <TextWrapper>
        <H2>The game consists of 10 rounds.</H2>
        <H2>At the beginning of the round, given a list of 25 countries and their flags.</H2>
        <H2>You must to collate the name of the country and the flag, for this you need:</H2>
        <H3>1. Select a country's name from the list.</H3>
        <H3>2. Next, select the supposed flag of the selected country,and click on it.</H3>
      </TextWrapper>
      <TextWrapper>
        <P>If matched correctly, a window will appear with minimal details about that country.</P>
        <P>
          You have a certain number of possible misses (right to make a mistake).
          <br />
          In one round, you can only make a 5 mistakes, after that it will end round.
        </P>
        <P>
          On the page <strong>RESULTS</strong> you can view the actual results,
          you can also reset all the data to start over.
        </P>
      </TextWrapper>
    </>
  );
}
export default RulesPage;
