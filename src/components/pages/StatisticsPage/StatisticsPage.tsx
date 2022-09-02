import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton, ResetButton } from '../../../common-styles/styled';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getOpenedCountries, getPartDataLocalStorage, getNotOpenedCountries } from '../../../localStorage/localStorage';
import { IDataTypes } from '../../../types/dataTypes';
import { ActionTypes } from '../../../types/redusersTypes';
import { clearLocalStorage } from '../../../util/util';
import Error from '../../blocks/Error/Error';
import CountriesList from '../../blocks/CountriesList/CountriesList';
import Button from '../../ui/Button/Button';
import { ButtonsWrapper, ListsWrapper, StyledOl, ResetButtonWrapper } from './styled';

const StatisticsPage = () => {

  const STARTED = localStorage.getItem('started');
  const OPENED = 'green';
  const NOT_OPENED = 'red';

  const { loading, error } = useTypedSelector(state => state.fetch);
  const { openedCountryCount } = useTypedSelector(state => state.openedCountryCounter);
  const { openedCountries } = useTypedSelector(state => state.openedCountries);
  const { notOpenedCountries } = useTypedSelector(state => state.notOpenedCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionTypes.OPEN_COUNTRY_COUNTER, payload: localStorage.getItem('openedCountriesCount') });
    getOpenedCountries(dispatch);
    getNotOpenedCountries(dispatch);
  }, [dispatch]);

  return error ? <Error error={error} /> : (
    <>
      <ButtonsWrapper>
        {
          STARTED !== null || undefined ?
            <Link to='/game'>
              <PlayButton>
                <Button clickHandler={() => getPartDataLocalStorage(dispatch)}>continue</Button>
              </PlayButton>
            </Link>
            :
            ''
        }
        <ResetButtonWrapper>
          <ResetButton>
            <Button clickHandler={clearLocalStorage}>reset</Button>
          </ResetButton>
        </ResetButtonWrapper>
      </ButtonsWrapper>
      {
        loading ? '' :
          <div>
            <p>
              opened countries: <span>{openedCountryCount}</span> out of 250
            </p>
          </div>
      }
      <ListsWrapper>
        <StyledOl>
          <h3>opened: </h3>
          {openedCountries && openedCountries.map((item: IDataTypes) => <CountriesList data={item} key={item.flag} hover={OPENED} />)}
        </StyledOl>
        <StyledOl>
          <h3>not opened: </h3>
          {notOpenedCountries && notOpenedCountries.map((item: IDataTypes) => <CountriesList data={item} key={item.flag} hover={NOT_OPENED} />)}
        </StyledOl>
      </ListsWrapper>
    </>
  );
}
export default StatisticsPage;
