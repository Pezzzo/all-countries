import { setNumberOpenedCountries, setNumberAttempts, getPartData, getPartDataLocalStorage } from './../localStorage/localStorage';
import { Action, ActionTypes } from './../types/redusersTypes';
import { IDataTypes } from "../types/dataTypes";
import { Dispatch } from 'redux';

const ATTEMPTS = 5;

const countryNameHandler = (
  evt: React.MouseEvent<HTMLParagraphElement>,
  data: IDataTypes,
  dispatch: Dispatch<Action>
): void => {

  let countryName = (evt.target as HTMLElement);

  dispatch({ type: ActionTypes.COUNTRY, payload: data });

  document.querySelectorAll('.country').forEach((item) => {
    item.classList.remove('countryNamePassive');
    item.classList.remove('currentCountry');
    item.classList.add('countryNameActive');
  });

  document.querySelectorAll('.disabled').forEach((item) => {
    item.classList.remove('countryNameActive');
    item.classList.remove('countryNamePassive');
  });

  countryName.classList.add('countryNamePassive');
  countryName.classList.add('currentCountry');
  countryName.classList.remove('countryNameActive');
};


const getLastCountry = (data: IDataTypes) => {

  let openCountriesCounter = JSON.parse(localStorage.openCountries);
  let partData = JSON.parse(localStorage.partData);
  let openedAllCountries = JSON.parse(localStorage.openedCountries);

  for (let i = 0; i < partData.length; i++) {

    if (data.name.common === partData[i].name.common) {

      openedAllCountries.push(partData[i]);
      openCountriesCounter.push(partData[i]);
      partData.splice(i, 1);

      localStorage.openedCountries = JSON.stringify(openedAllCountries);
      localStorage.openCountries = JSON.stringify(openCountriesCounter);
      localStorage.partData = JSON.stringify(partData);
      return;
    }
  }
};


const countryFlagHandler = (
  evt: React.MouseEvent<HTMLImageElement>,
  country: any,
  data: IDataTypes,
  dispatch: Dispatch<Action>): void => {

  let partData = JSON.parse(localStorage.partData);
  let notOpenedCountries = JSON.parse(localStorage.notOpenedCountries);
  let flag = (evt.target as HTMLElement);

  if (Object.keys(country).length === 0) {
    return;
  }

  if (data.name.common === country.name.common) {

    setNumberOpenedCountries(dispatch);
    getLastCountry(country);

    flag.classList.add('flagPassive');
    flag.classList.remove('flagActive');
    flag.classList.add('rightAnswer');

    dispatch({ type: ActionTypes.COINCIDENCE_TRUE });

    let partData = JSON.parse(localStorage.partData);

    if (partData.length <= 0) {
      getPartData(dispatch);
    }
  }

  if (data.name.common !== country.name.common) {

    setNumberAttempts(dispatch);

    flag.classList.remove('wrongAttempt');
    flag.classList.add('wrongAttempt');

    dispatch({ type: ActionTypes.COINCIDENCE_FALSE });
    setTimeout(() => flag.classList.remove('wrongAttempt'), 1000);

    let attempt = JSON.parse(localStorage.attemptsCount);
    if (attempt < 1) {
      dispatch({ type: ActionTypes.ZERO_ATTEMPTS_TRUE });
      dispatch({ type: ActionTypes.ATTEMPT_COUNTER, payload: ATTEMPTS });
      notOpenedCountries = notOpenedCountries.concat(partData);
      localStorage.notOpenedCountries = JSON.stringify(notOpenedCountries);
      localStorage.attemptsCount = JSON.stringify(ATTEMPTS);
    }
  }
};

const closeModal = (dispatch: Dispatch<Action>) => {
  const currentFlag = document.querySelector('.rightAnswer');
  const currentName = document.querySelector('.currentCountry');

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      dispatch({ type: ActionTypes.COINCIDENCE_FALSE });
      dispatch({ type: ActionTypes.COUNTRY, payload: {} });
      currentFlag?.classList.add('rightAnswerAnimation');
      currentName?.classList.add('rightAnswerAnimation');
      setTimeout(() => getPartDataLocalStorage(dispatch), 1000);
    }
  });
};

const closeModalHandler = (evt: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch<Action>) => {

  const modal = (evt.target as HTMLElement).closest('.modal');
  const modalCloseButton = (evt.target as HTMLElement).closest('.closeButton');
  const currentFlag = document.querySelector('.rightAnswer');
  const currentName = document.querySelector('.currentCountry');

  if (!modal || modalCloseButton) {
    dispatch({ type: ActionTypes.COINCIDENCE_FALSE });
    dispatch({ type: ActionTypes.COUNTRY, payload: {} });
    currentFlag?.classList.add('rightAnswerAnimation');
    currentName?.classList.add('rightAnswerAnimation');
    setTimeout(() => getPartDataLocalStorage(dispatch), 1000);
  }
};

export { countryNameHandler, countryFlagHandler, closeModal, closeModalHandler }
