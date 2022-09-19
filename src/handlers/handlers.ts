import React from 'react';
import { getPartData, getPartDataLocalStorage } from '../data/data';
import { Action } from '../types/actions';
import { IDataTypes } from "../types/dataTypes";
import { Dispatch } from 'redux';
import { ActionTypes } from '../store/const';

const countryNameHandler = (
  evt: React.MouseEvent<HTMLParagraphElement>,
  data: IDataTypes,
  dispatch: Dispatch<Action>
): void => {

  let countryName = (evt.target as HTMLElement).closest('.country');

  dispatch({ type: ActionTypes.SELECTED_COUNTRY, payload: data });

  document.querySelectorAll('.country').forEach((item) => {
    item.classList.remove('countryNamePassive', 'currentCountry');
    item.classList.add('countryNameActive');
  });

  countryName?.classList.add('countryNamePassive', 'currentCountry');
  countryName?.classList.remove('countryNameActive');
};

// удаление отгаданной страны из списка раунда
// и добавление её в список открытых стран
const getLastCountry = (
  data: IDataTypes,
  actualPartData: IDataTypes[],
  actualSortPartData: IDataTypes[],
  actualOpenedCountries: IDataTypes[],
  dispatch: Dispatch<Action>): void => {

  let newPartData: IDataTypes[] = [...actualPartData];
  let newSortPartData: IDataTypes[] = [...actualSortPartData];
  let newOpenedAllCountries: IDataTypes[] = [...actualOpenedCountries];

  for (let i = 0; i < newSortPartData.length; i++) {

    if (data.name.common === newSortPartData[i].name.common) {
      newSortPartData.splice(i, 1);

      dispatch({ type: ActionTypes.SORT_PART_DATA, payload: newSortPartData });
    }
  }

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
  sortPartData: IDataTypes[],
  attemptСount: number,
  selectedCountry: IDataTypes,
  openedCountries: IDataTypes[],
  data: IDataTypes,
  dispatch: Dispatch<Action>): void => {

  let flag = (evt.target as HTMLElement);

  if (Object.keys(selectedCountry).length === 0) {
    return;
  }

  if (data.name.common === selectedCountry.name.common) {

    getLastCountry(selectedCountry, partData, sortPartData, openedCountries, dispatch);

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

// закрыть модальное окно
const closeModal = (dispatch: Dispatch<Action>, countriesNameArr: IDataTypes[], flagsArr: IDataTypes[]) => {
  const currentFlag = document.querySelector('.rightAnswer');
  const currentName = document.querySelector('.currentCountry');
  const modalWrapper = document.querySelector('.modal-wrapper');

  modalWrapper?.classList.remove('closed');
  modalWrapper?.classList.add('open');
  setTimeout(() => {
    currentFlag?.classList.add('rightAnswerAnimation');
    currentName?.classList.add('rightAnswerAnimation');
  }, 200);
  if (countriesNameArr.length === 0) {
    setTimeout(() => dispatch({ type: ActionTypes.EMPTY_ARRAY_TRUE }), 850);
  }
  setTimeout(() => dispatch({ type: ActionTypes.COINCIDENCE_FALSE }), 200);
  setTimeout(() => getPartDataLocalStorage(dispatch, countriesNameArr, flagsArr), 850);
};

const closeModalMouseHandler = (
  evt: React.MouseEvent<HTMLDivElement>,
  dispatch: Dispatch<Action>,
  countriesNameArr: IDataTypes[],
  flagsArr: IDataTypes[]
  ) => {

  const modal = (evt.target as HTMLElement).closest('.modal');
  const modalCloseButton = (evt.target as HTMLElement).closest('.closeButton');

  if (!modal || modalCloseButton) {
    closeModal(dispatch, countriesNameArr, flagsArr);
  }
};

const setOpenedCountriesVisibility = () => {

  document.querySelector('.opened-countries')?.classList.remove('closed');
  document.querySelector('.result-botton-opened')?.classList.add('result-botton-active');
  document.querySelector('.result-botton-not-opened')?.classList.remove('result-botton-active');
  document.querySelector('.not-opened-countries')?.classList.add('closed');
};

const setNotOpenedCountriesVisibility = () => {

  document.querySelector('.result-botton-opened')?.classList.remove('result-botton-active');
  document.querySelector('.result-botton-not-opened')?.classList.add('result-botton-active');
  document.querySelector('.opened-countries')?.classList.add('closed');
  document.querySelector('.not-opened-countries')?.classList.remove('closed');
};

export {
  countryNameHandler,
  countryFlagHandler,
  closeModal,
  closeModalMouseHandler,
  setOpenedCountriesVisibility,
  setNotOpenedCountriesVisibility
}
