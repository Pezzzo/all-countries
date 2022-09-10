import { Action, ActionTypes } from './../types/actionsTypes';
import { Dispatch } from 'redux';
import { IDataTypes } from '../types/dataTypes';
import { getPartDataLocalStorage } from '../localStorage/localStorage';

// очистить хранилище
const clearLocalStorage = () => {
  window.location.reload();
  localStorage.clear();
};

// перемешать массив
const shuffleArray = (data: IDataTypes[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1));
    [data[i], data[index]] = [data[index], data[i]];
  }
  return data;
};

// получить валюты
const getCurrencies = (data: IDataTypes) => {

  if (data.currencies === undefined || null) {
    return '';
  }

  const arrayOfArrays: any[] = Object.entries(data.currencies);
  let firstArray = arrayOfArrays[0];
  let objectCurrencies = firstArray[firstArray.length - 1];
  let currencies: string[] = [];

  for (const value in objectCurrencies) {
    currencies.push(objectCurrencies[value]);
  }
  return currencies.join(', ');
};

// получить языки
const getLanguages = (data: IDataTypes) => {

  if (data.languages === undefined || null) {
    return '';
  }

  let languages: string[] = [];
  for (const lang in data.languages) {
    languages.push(data.languages[lang]);
  }
  return languages.join(', ');
};

// получить часовые пояса
const getTimezones = (data: IDataTypes) => {
  let timeZones: string[] = [];
  data.timezones.forEach((item) => {
    timeZones.push(item);
  });
  return timeZones.join(', ');
};

// удалить 'display-none' у элемента
const deleteSelector = (selector: string) => {
  let element = document.querySelector(selector);
  element?.classList.remove('display-none');
};

// завершить раунд
const completeRound = (
  originalData: IDataTypes[],
  partData: IDataTypes[],
  attemptСount: number,
  oldNotOpenedCountries: IDataTypes[],
  dispatch: Dispatch<Action>) => {

  if (attemptСount < 1) {

    let newNotOpenedCountries: IDataTypes[] = [...oldNotOpenedCountries];

    setTimeout(() => {
      if (originalData.length === 0) {
        dispatch({ type: ActionTypes.ENDED_TRUE });
      }
      dispatch({ type: ActionTypes.ZERO_ATTEMPTS_TRUE });
      newNotOpenedCountries = newNotOpenedCountries.concat(partData);
      dispatch({ type: ActionTypes.NOT_OPENED_COUNTRIES, payload: newNotOpenedCountries });
    }, 500);
  }
};

export { clearLocalStorage, shuffleArray, getLanguages, getTimezones, getCurrencies, deleteSelector, completeRound }
