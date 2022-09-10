import React, { useState } from 'react';
import { IDataTypes } from '../../../types/dataTypes';
import { StyledImg, StyledPClosed, StyledPOpen, Wrapper } from './styled';
import DetailCountryInfo from '../DetailCountryInfo/DetailCountryInfo';

interface ICountriesName {
  data: IDataTypes
  hover: string
};

const CountriesList = ({ data, hover }: ICountriesName) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <li>
        {hover === 'green' ?
          <StyledPOpen onClick={() => setIsActive(!isActive)}>
            {data.name.common}<span>{isActive ? '−' : '+'}</span>
          </StyledPOpen>
          :
          <StyledPClosed onClick={() => setIsActive(!isActive)}>
            {data.name.common}<span>{isActive ? '−' : '+'}</span>
          </StyledPClosed>
        }

          <Wrapper className={isActive ? 'current-country-info-active' : 'current-country-info-passive'}>
            <StyledImg src={data.flags.png}
              width="200"
              height="120"
              alt="flag" />
              <DetailCountryInfo data={data}/>
          </Wrapper>

      </li>
    </>
  );
}

export default CountriesList;
