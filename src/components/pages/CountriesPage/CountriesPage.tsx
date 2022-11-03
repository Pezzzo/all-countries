import React from 'react';
import { PlayGameBlock } from './styled';
import { Error } from '../../blocks/Error/Error';
import { useSelectors } from '../../../hooks/useSelectors';
import { NamesAndFlags } from '../../blocks/NamesAndFlags/NamesAndFlags';
import { EndGameBlock } from '../../blocks/EndGameBlock/EndGameBlock';
import { InfoBlock } from './../../blocks/InfoBlock/InfoBlock';
import { EndRound } from '../../blocks/EndRound/EndRound';

const CountriesPage: React.FC = () => {

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
    originalData,
    emptyArray
  } = useSelectors();

  return error ? <Error error={error} /> : (
    <>
      {
        ended ?
          <EndGameBlock />
          :
          <PlayGameBlock>
            <InfoBlock
              attemptСount={attemptСount}
              roundCount={roundCount}
              started={started}
              originalData={originalData} />
            {
              zeroAttempts || emptyArray ?
                <EndRound emptyArray={emptyArray} originalData={originalData} />
                :
                <NamesAndFlags
                  sort={sort}
                  notSort={notSort}
                  coincidence={coincidence}
                  selectedCountry={selectedCountry} />
            }
          </PlayGameBlock>
      }
    </>
  );
}

export default CountriesPage;
