import React from 'react';
import { getPartData } from './../localStorage/localStorage';
import { Action, ActionTypes } from '../types/actionsTypes';
import { IDataTypes } from "../types/dataTypes";
import { Dispatch } from 'redux';

const countryNameHandler = (
  evt: React.MouseEvent<HTMLParagraphElement>,
  data: IDataTypes,
  dispatch: Dispatch<Action>
): void => {

  let countryName = (evt.target as HTMLElement);

  dispatch({ type: ActionTypes.SELECTED_COUNTRY, payload: data });

  document.querySelectorAll('.country').forEach((item) => {
    item.classList.remove('countryNamePassive', 'currentCountry');
    item.classList.add('countryNameActive');
  });

  countryName.classList.add('countryNamePassive', 'currentCountry');
  countryName.classList.remove('countryNameActive');
};


const getLastCountry = (
  data: IDataTypes,
  oldPartData: IDataTypes[],
  oldOpenedCountries: IDataTypes[],
  dispatch: Dispatch<Action>): void => {

  let newPartData: IDataTypes[] = [...oldPartData];
  let newOpenedAllCountries: IDataTypes[] = [...oldOpenedCountries];

  for (let i = 0; i < newPartData.length; i++) {

    if (data.name.common === newPartData[i].name.common) {

      newOpenedAllCountries.push(newPartData[i]);
      newPartData.splice(i, 1);

      dispatch({ type: ActionTypes.PART_DATA, payload: newPartData });
      dispatch({ type: ActionTypes.OPENED_COUNTRIES, payload: newOpenedAllCountries });
      return;
    }
  }
};


const countryFlagHandler = (
  evt: React.MouseEvent<HTMLImageElement>,
  originalData: IDataTypes[],
  partData: IDataTypes[],
  attemptСount: number,
  selectedCountry: any,
  openedCountries: IDataTypes[],
  data: IDataTypes,
  dispatch: Dispatch<Action>): void => {

  let flag = (evt.target as HTMLElement);

  if (Object.keys(selectedCountry).length === 0) {
    return;
  }

  if (data.name.common === selectedCountry.name.common) {

    getLastCountry(selectedCountry, partData, openedCountries, dispatch);

    flag.classList.add('flagPassive');
    flag.classList.remove('flagActive');
    flag.classList.add('rightAnswer');

    dispatch({ type: ActionTypes.COINCIDENCE_TRUE });

    if (partData.length <= 0) {
      getPartData(dispatch, originalData);
    }
  }

  if (data.name.common !== selectedCountry.name.common) {

    if (attemptСount === 0) {
      return;
    }

    dispatch({ type: ActionTypes.ATTEMPT_COUNTER });
    dispatch({ type: ActionTypes.COINCIDENCE_FALSE });

    flag.classList.add('wrongAttempt');
    setTimeout(() => flag.classList.remove('wrongAttempt'), 500);
  }
};

export { countryNameHandler, countryFlagHandler }
