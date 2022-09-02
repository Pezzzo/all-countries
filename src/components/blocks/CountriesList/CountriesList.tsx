import React, { useState } from 'react';
import { IDataTypes } from '../../../types/dataTypes';
import { StyledImg, StyledPClosed, StyledPOpen, Wrapper } from './styled';
import { getLanguages, getTimezones } from '../../../util/util';
import { StyledP, StyledSpan } from '../../../common-styles/styled';

interface ICountriesName {
  data: IDataTypes
  hover: string
};

const NotOpenedList = ({ data, hover }: ICountriesName) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <li>
        {hover === 'green' ?
          <StyledPOpen onClick={() => setIsActive(!isActive)}>
            {data.name.common}
          </StyledPOpen>
          :
          <StyledPClosed onClick={() => setIsActive(!isActive)}>
            {data.name.common}
          </StyledPClosed>
        }
        {
          isActive &&
          <Wrapper>
            <StyledImg src={data.flags.png}
              width="200"
              height="120"
              alt="flag" />
            <StyledP><StyledSpan>Continents: </StyledSpan>{data.continents}</StyledP>
            <StyledP><StyledSpan>Country: </StyledSpan>{data.name.common}</StyledP>
            <StyledP><StyledSpan>Capital: </StyledSpan>{data.capital}</StyledP>
            <StyledP><StyledSpan>Languages: </StyledSpan>{getLanguages(data)}</StyledP>
            <StyledP><StyledSpan>Population: </StyledSpan>{data.population}</StyledP>
            <StyledP><StyledSpan>Area: </StyledSpan>{data.area}</StyledP>
            <StyledP><StyledSpan>Timezones: </StyledSpan>{getTimezones(data)}</StyledP>
            <StyledP><StyledSpan>On the map: </StyledSpan><a href={data.maps.googleMaps} target="_blank" rel="noopener noreferrer">{data.maps.googleMaps}</a></StyledP>
          </Wrapper>
        }
      </li>
    </>
  );
}

export default NotOpenedList;
