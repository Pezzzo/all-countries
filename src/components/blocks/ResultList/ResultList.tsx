import React, { useState } from 'react';
import { H2 } from '../../../common-styles/common';
import { ListsWrapper, OlClosed, OlOpened } from './styled';
import { StyledSpan } from '../../../common-styles/common';
import { IDataTypes } from '../../../types/dataTypes';
import { CountriesRusultList } from '../CountriesRusultList/CountriesRusultList';
import { ResultButtons } from '../ResultButtons/ResultButtons';

interface IResultList {
  openedCountries: IDataTypes[];
  notOpenedCountries: IDataTypes[];
}

const ResultList: React.FC<IResultList> = ({ openedCountries, notOpenedCountries }) => {

  const OPENED: boolean = true;
  const NOT_OPENED: boolean = false;

  const [active, setActive] = useState<boolean>(true);

  return (
    <ListsWrapper>
      <ResultButtons active={active} setActive={setActive} />
      {
        active ?
          <OlOpened>
            <H2>opened: <StyledSpan>{openedCountries.length}</StyledSpan></H2>
            {openedCountries && openedCountries.map((item: IDataTypes) =>
              <CountriesRusultList
                data={item}
                key={item.flag}
                countriesState={OPENED} />)}
          </OlOpened>
          :
          <OlClosed>
            <H2>not opened: <StyledSpan>{notOpenedCountries?.length}</StyledSpan></H2>
            {notOpenedCountries && notOpenedCountries.map((item: IDataTypes) =>
              <CountriesRusultList
                data={item}
                key={item.flag}
                countriesState={NOT_OPENED} />)}
          </OlClosed>
      }
    </ListsWrapper>
  )
};

export { ResultList };
