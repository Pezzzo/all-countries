import React from 'react';
import { PlayButton, RowWrapper, H2 } from '../../../common-styles/styled';
import {
  CountriesList,
  FlagsList,
  Main,
  CounterFail,
  CounterRound,
  CounterWrapper,
  Span,
  InfoWrapper,
  BeforeWrapper,
  IntermediateMain,
  P
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
          <H2>Accept congratulations, <br />  because it was the last round!</H2>
          <P>It's time to look at the results</P>
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
                      right to fail: <Span className="counter">{attemptСount}</Span>
                    </CounterFail>
                  </CounterWrapper>
                </InfoWrapper>
            }
          </RowWrapper>
          {
            zeroAttempts ?
              <IntermediateMain>
                {
                  attemptСount === 0 ?
                    <h2>too many misses, please open the following list</h2> :
                    <h2>the list is empty, please open the following list</h2>}
                <PlayButton type="button">
                  <Button clickHandler={() => getPartData(dispatch, originalData)}>next list countries</Button>
                </PlayButton>
              </IntermediateMain>
              :
              <Main>

                <CountriesList>
                  {notSort && notSort.map((item) => <CountriesName data={item} key={item.flag} />)}
                </CountriesList>

                <FlagsList>
                  {sort && sort.map((item) => <CountriesFlags data={item} key={item.flag} />)}
                </FlagsList>
                {coincidence && <ModalCountryInfo data={selectedCountry} />}

              </Main>
          }
        </BeforeWrapper>
    }
    </>
  );
}

export default CountriesPage;
