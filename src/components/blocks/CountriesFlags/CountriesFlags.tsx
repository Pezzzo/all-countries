import React from 'react';
import { IDataTypes } from '../../../types/dataTypes';
import { StyledFlagsLi, Img } from './styled';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { countryFlagHandler } from '../../../handlers/handlers';
import '../blocks.css';


interface ICountriesFlags {
  data: IDataTypes
};

const CountriesFlags =  ({ data }: ICountriesFlags) => {

  const {selectedCountry} = useTypedSelector(state => state.selectedCountry);

  const dispatch = useDispatch();

  return (
    <>
      <StyledFlagsLi>
        <Img className="flagActive"
        src={data.flags.png}
        width="150"
        height="80"
        alt="flag"
        onClick={(evt) => countryFlagHandler(evt, selectedCountry, data, dispatch)}
        />
      </StyledFlagsLi>
    </>
  );
};

export default CountriesFlags;
