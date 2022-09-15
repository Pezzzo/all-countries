import React from 'react';
import { IDataTypes } from '../../../types/dataTypes';
import { Li, Img } from './styled';
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
    sortPartData,
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
      <Li>
        <Img className="flagActive"
          src={data.flags.png}
          width="150"
          height="80"
          alt="flag"
          onClick={(evt) => countryFlagHandler(
            evt,
            originalData,
            partData,
            sortPartData,
            attemptСount,
            selectedCountry,
            openedCountries,
            data,
            dispatch
            )}
        />
      </Li>
    </>
  );
};

export default CountriesFlags;
