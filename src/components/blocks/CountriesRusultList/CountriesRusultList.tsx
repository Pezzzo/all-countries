import React, { useState } from 'react';
import { IDataTypes } from '../../../types/dataTypes';
import { StyledImg, StyledPClosed, StyledPOpen, Wrapper, StyledDiv } from './styled';
import { DetailCountryInfo } from '../DetailCountryInfo/DetailCountryInfo';

interface ICountriesName {
  data: IDataTypes;
  countriesState: boolean;
};

const CountriesRusultList: React.FC<ICountriesName> = ({ data, countriesState }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <li>
        {countriesState ?
          <StyledPOpen onClick={() => setIsActive(!isActive)}>
            {data.name.common}<span>{isActive ? '−' : '+'}</span>
          </StyledPOpen>
          :
          <StyledPClosed onClick={() => setIsActive(!isActive)}>
            {data.name.common}<span>{isActive ? '−' : '+'}</span>
          </StyledPClosed>
        }
        {
          isActive &&
          <Wrapper>
            <StyledDiv>
              <StyledImg src={data.flags.png}
                width="200"
                height="120"
                alt="flag" />
              <DetailCountryInfo data={data} />
            </StyledDiv>
          </Wrapper>
        }
      </li>
    </>
  )
};

export { CountriesRusultList };
