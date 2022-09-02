import React, { useEffect } from 'react';
import CountriesFlags from '../../blocks/CountriesFlags/CountriesFlags';
import CountriesName from '../../blocks/CountriesName/CountriesName';
import Error from '../../blocks/Error/Error';
import ModalCountryInfo from '../../blocks/ModalCountryInfo/ModalCountryInfo';
import Button from '../../ui/Button/Button';
import { CountriesList, FlagsList, StyledMain } from './styled';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getPartData, getPartDataLocalStorage } from '../../../localStorage/localStorage';
import { PlayButton } from '../../../common-styles/styled';


const CountriesPage = () => {

  const { coincidence } = useTypedSelector(state => state.coincidence);
  const { notSort } = useTypedSelector(state => state.notSort);
  const { sort } = useTypedSelector(state => state.sort);
  const { selectedCountry } = useTypedSelector(state => state.selectedCountry);
  const { error } = useTypedSelector(state => state.fetch);
  const { zeroAttempts } = useTypedSelector(state => state.zeroAttempts);

  const dispatch = useDispatch();

  useEffect(() => {
    getPartDataLocalStorage(dispatch);
  }, [dispatch]);

  let started = localStorage.getItem('started');

  return error ? <Error error={error} /> : (
    <>
      {
        started === null || undefined ?
          <PlayButton>
            <Button clickHandler={() => getPartData(dispatch)}>play</Button>
          </PlayButton>
          :
          ''
      }
      {
        zeroAttempts ?
          <div>
            <h2>attempts are over, please open the following list</h2>
            <PlayButton type="button">
              <Button clickHandler={() => getPartData(dispatch)}>next list countries</Button>
            </PlayButton>
          </div>
          :
          <StyledMain>
            <div>
              <CountriesList>
                <h2>
                  countries:
                </h2>
                {notSort && notSort.map((item) => <CountriesName data={item} key={item.flag} />)}
              </CountriesList>
            </div>
            <div>
              <FlagsList>
                {sort && sort.map((item) => <CountriesFlags data={item} key={item.flag} />)}
              </FlagsList>
              {coincidence && <ModalCountryInfo data={selectedCountry} />}
            </div>
          </StyledMain>
      }
    </>
  );
}

export default CountriesPage;
