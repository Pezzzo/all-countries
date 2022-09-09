import React from 'react';
import { IDataTypes } from '../../../types/dataTypes';
import { StyledFlagsLi, Img } from './styled';
import { useDispatch } from 'react-redux';
import { countryFlagHandler } from '../../../handlers/handlers';
import { completeRound } from '../../../util/util';
import useSelectors from '../../../hooks/useSelectors';

interface ICountriesFlags {
  data: IDataTypes
};

const CountriesFlags = ({ data }: ICountriesFlags) => {

  const {
    selectedCountry,
    originalData,
    partData,
    attemptСount,
    openedCountries,
    notOpenedCountries
  } = useSelectors();

  const dispatch = useDispatch();

  completeRound(
    originalData,
    partData,
    attemptСount,
    notOpenedCountries,
    dispatch);

  return (
    <>
      <StyledFlagsLi>
        <Img className="flagActive"
          src={data.flags.png}
          width="150"
          height="80"
          alt="flag"
          onClick={(evt) => countryFlagHandler(
            evt,
            originalData,
            partData,
            attemptСount,
            selectedCountry,
            openedCountries,
            data,
            dispatch
            )}
        />
      </StyledFlagsLi>
    </>
  );
};

export default CountriesFlags;
