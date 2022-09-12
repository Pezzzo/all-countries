import React from 'react';
import { PlayButton, RowWrapper } from '../../../common-styles/styled';
import {
  CountriesList,
  FlagsList,
  Main,
  CounterFail,
  CounterRound,
  CounterWrapper,
  StyledSpan,
  InfoWrapper,
  BeforeWrapper,
  IntermediateMain
} from './styled';
import CountriesFlags from '../../blocks/CountriesFlags/CountriesFlags';
import CountriesName from '../../blocks/CountriesName/CountriesName';
import Error from '../../blocks/Error/Error';
import ModalCountryInfo from '../../blocks/ModalCountryInfo/ModalCountryInfo';
import Button from '../../ui/Button/Button';
import { useDispatch } from 'react-redux';
import { getPartData } from '../../../data/data';
import useSelectors from '../../../hooks/useSelectors';
import { Link } from 'react-router-dom';

const CountriesPage = () => {

  const {
    attemptСount,
    coincidence,
    ended,
    notSort,
    sort,
    selectedCountry,
    error,
    zeroAttempts,
    roundCount,
    started,
    originalData
  } = useSelectors();

  const dispatch = useDispatch();

  return error ? <Error error={error} /> : (
    <>{
      ended ?
        <IntermediateMain>
          <h2>Accept congratulations</h2>
          <Link to='/results'>
            <PlayButton type="button">
              <Button>
                go to results
              </Button>
            </PlayButton>
          </Link>
        </IntermediateMain>
        :
        <BeforeWrapper>
          <RowWrapper>
            {
              !started ?
                <PlayButton type="button">
                  <Button clickHandler={() => getPartData(dispatch, originalData)}>start</Button>
                </PlayButton>
                :
                <InfoWrapper>
                  <CounterRound>
                    round: <span>{roundCount}</span>
                  </CounterRound>
                  <CounterWrapper>
                    <CounterFail>
                      right to fail: <StyledSpan className="counter">{attemptСount}</StyledSpan>
                    </CounterFail>
                  </CounterWrapper>
                </InfoWrapper>
            }
          </RowWrapper>
          {
            zeroAttempts ?
              <IntermediateMain>
                <h2>attempts are over, please open the following list</h2>
                <PlayButton type="button">
                  <Button clickHandler={() => getPartData(dispatch, originalData)}>next list countries</Button>
                </PlayButton>
              </IntermediateMain>
              :
              <Main>
                <div>
                  <CountriesList>
                    {notSort && notSort.map((item) => <CountriesName data={item} key={item.flag} />)}
                  </CountriesList>
                </div>
                <div>
                  <FlagsList>
                    {sort && sort.map((item) => <CountriesFlags data={item} key={item.flag} />)}
                  </FlagsList>
                  {coincidence && <ModalCountryInfo data={selectedCountry} />}
                </div>
              </Main>
          }
        </BeforeWrapper>
    }
    </>
  );
}

export default CountriesPage;
