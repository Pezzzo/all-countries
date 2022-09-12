import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton, ResetButton, RowWrapper } from '../../../common-styles/styled';
import { ListsWrapper, StyledOl, ResetButtonWrapper, StyledSpan } from './styled';
import { getPartData, getPartDataLocalStorage } from '../../../data/data';
import { IDataTypes } from '../../../types/dataTypes';
import { clearLocalStorage } from '../../../util/util';
import Error from '../../blocks/Error/Error';
import CountriesList from '../../blocks/CountriesList/CountriesList';
import Button from '../../ui/Button/Button';
import useSelectors from '../../../hooks/useSelectors';

const StatisticsPage = () => {

  const OPENED = 'green';
  const NOT_OPENED = 'red';

  const {
    error,
    openedCountries,
    notOpenedCountries,
    partData,
    started,
    originalData
  } = useSelectors();

  const dispatch = useDispatch();

  return error ? <Error error={error} /> : (
    <>
      <RowWrapper>
        <Link to='/game'>
          <PlayButton type="button">
            {started ?
              <Button clickHandler={() => getPartDataLocalStorage(dispatch, partData)}>continue</Button> :
              <Button clickHandler={() => getPartData(dispatch, originalData)}>start</Button>}
          </PlayButton>
        </Link>
        <ResetButtonWrapper>
          <ResetButton type="button">
            <Button clickHandler={clearLocalStorage}>reset</Button>
          </ResetButton>
        </ResetButtonWrapper>
      </RowWrapper>
      <ListsWrapper className="lists-wrapper">
        <StyledOl>
          <h3>opened: <StyledSpan>{openedCountries.length}</StyledSpan></h3>
          {openedCountries && openedCountries.map((item: IDataTypes) =>
            <CountriesList
              data={item}
              key={item.flag}
              hover={OPENED} />)}
        </StyledOl>
        <StyledOl>
          <h3>not opened: <StyledSpan>{notOpenedCountries?.length}</StyledSpan></h3>
          {notOpenedCountries && notOpenedCountries.map((item: IDataTypes) =>
            <CountriesList
              data={item}
              key={item.flag}
              hover={NOT_OPENED} />)}
        </StyledOl>
      </ListsWrapper>
    </>
  );
}
export default StatisticsPage;
