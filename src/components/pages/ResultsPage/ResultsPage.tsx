import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton, ResetButton, RowWrapper, H2 } from '../../../common-styles/styled';
import {
  ListsWrapper,
  OlOpened,
  OlClosed,
  ResetButtonWrapper,
  StyledSpan,
  ButtonsWrapper,
  ButtonOpened,
  ButtonNotOpened
} from './styled';
import { getPartData, getPartDataLocalStorage } from '../../../data/data';
import { IDataTypes } from '../../../types/dataTypes';
import { clearLocalStorage } from '../../../util/util';
import Error from '../../blocks/Error/Error';
import CountriesList from '../../blocks/CountriesList/CountriesList';
import Button from '../../ui/Button/Button';
import useSelectors from '../../../hooks/useSelectors';
import { setOpenedCountriesVisibility, setNotOpenedCountriesVisibility } from '../../../handlers/handlers';

const StatisticsPage = () => {

  const OPENED = 'green';
  const NOT_OPENED = 'red';

  const {
    error,
    openedCountries,
    notOpenedCountries,
    partData,
    sortPartData,
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
              <Button clickHandler={() => getPartDataLocalStorage(dispatch, partData, sortPartData)}>continue</Button> :
              <Button clickHandler={() => getPartData(dispatch, originalData)}>start</Button>}
          </PlayButton>
        </Link>
        <ResetButtonWrapper>
          <ResetButton type="button">
            <Button clickHandler={clearLocalStorage}>reset</Button>
          </ResetButton>
        </ResetButtonWrapper>
      </RowWrapper>
      <ListsWrapper>
        <ButtonsWrapper>
          <ButtonOpened
            className="result-botton-opened result-botton-active"
            onClick={setOpenedCountriesVisibility}>
            &#10003;
          </ButtonOpened>
          <ButtonNotOpened
            className="result-botton-not-opened"
            onClick={setNotOpenedCountriesVisibility}>
            &#10007;
          </ButtonNotOpened>
        </ButtonsWrapper>
        <OlOpened className="opened-countries">
          <H2>opened: <StyledSpan>{openedCountries.length}</StyledSpan></H2>
          {openedCountries && openedCountries.map((item: IDataTypes) =>
            <CountriesList
              data={item}
              key={item.flag}
              hover={OPENED} />)}
        </OlOpened>
        <OlClosed className="not-opened-countries closed">
          <H2>not opened: <StyledSpan>{notOpenedCountries?.length}</StyledSpan></H2>
          {notOpenedCountries && notOpenedCountries.map((item: IDataTypes) =>
            <CountriesList
              data={item}
              key={item.flag}
              hover={NOT_OPENED} />)}
        </OlClosed>
      </ListsWrapper>
    </>
  );
}
export default StatisticsPage;
