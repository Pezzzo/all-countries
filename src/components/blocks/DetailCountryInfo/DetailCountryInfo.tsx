import React from 'react';
import { StyledLinkToMap, StyledP, StyledSpan } from '../../../common-styles/styled';
import { IDataTypes } from '../../../types/dataTypes';
import { getLanguages, getTimezones, getCurrencies } from '../../../util/util';

interface Icomponent {
  data: IDataTypes
};

const DetailCountryInfo = ({ data }: Icomponent) => {

  return (
    <>
      <StyledP>
        <StyledSpan>Continents: </StyledSpan>{data.continents}
      </StyledP>
      <StyledP>
        <StyledSpan>Capital: </StyledSpan>{data.capital}
      </StyledP>
      <StyledP>
        <StyledSpan>Languages: </StyledSpan>{getLanguages(data)}
      </StyledP>
      <StyledP>
        <StyledSpan>Currencies: </StyledSpan>{getCurrencies(data)}
      </StyledP>
      <StyledP>
        <StyledSpan>Population: </StyledSpan>{data.population}
      </StyledP>
      <StyledP>
        <StyledSpan>Area: </StyledSpan>{data.area} km²
      </StyledP>
      <StyledP>
        <StyledSpan>Timezones: </StyledSpan>{getTimezones(data)}
      </StyledP>
      <StyledP>
        <StyledSpan>On the map: </StyledSpan>
        <StyledLinkToMap
          href={data.maps.googleMaps}
          target="_blank"
          rel="noopener noreferrer">
          {data.maps.googleMaps}
        </StyledLinkToMap>
      </StyledP>
    </>
  );
}

export default DetailCountryInfo;
