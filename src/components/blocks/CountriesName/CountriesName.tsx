import React from 'react';
import { useDispatch } from 'react-redux';
import { IDataTypes } from '../../../types/dataTypes';
import { StyledLi, StyledP } from './styled';
import { countryNameHandler } from '../../../handlers/handlers';

interface ICountriesName {
  data: IDataTypes
};

const CountriesName = ({ data }: ICountriesName) => {

  const dispatch = useDispatch()

  return (
    <>
      <StyledLi>
        <StyledP
          className="country countryNameActive"
          onClick={(evt) => countryNameHandler(evt, data, dispatch)}>
          {data.name.common}
        </StyledP>
      </StyledLi>
    </>
  );
}

export default CountriesName;
