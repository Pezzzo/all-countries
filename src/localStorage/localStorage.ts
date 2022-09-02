import { Dispatch } from 'redux';
import { IDataTypes } from '../types/dataTypes';
import { Action, ActionTypes } from '../types/redusersTypes';
import { shuffleArray } from '../util/util';

const dispatchData = (dispatch: Dispatch<Action>, data: IDataTypes[]) => {
  dispatch({ type: ActionTypes.NOT_SORT, payload: data });
  dispatch({ type: ActionTypes.SORT, payload: data.map((item: object) => item).sort(() => Math.random() - 0.5) });
};

// получить 25 стран из массива всех стран в localStorage
export const getPartData = (dispatch: Dispatch<Action>) => {

  const NUMBER_OF_PAGES = 25;

  // let notOpenedCountries = JSON.parse(localStorage.notOpenedCountries);
  let data = shuffleArray(JSON.parse(localStorage.data));
  let partData = data.splice(0, NUMBER_OF_PAGES);
  localStorage.setItem('started', 'true');
  localStorage.setItem('finished', 'true');

  dispatchData(dispatch, partData);
  dispatch({ type: ActionTypes.ZERO_ATTEMPTS_FALSE });
  dispatch({ type: ActionTypes.COUNTRY, payload: {} });

  localStorage.partData = JSON.stringify(partData);
  localStorage.data = JSON.stringify(data);

  console.log(data);
  console.log(partData);
};

// получить сохранённые 25 стран с прошлого сеанса в localStorage
export const getPartDataLocalStorage = (dispatch: Dispatch<Action>) => {

  if (localStorage.getItem('partData') !== null || undefined) {

    let partData = JSON.parse(localStorage.partData);
    let data = JSON.parse(localStorage.data);

    dispatchData(dispatch, partData);
    dispatch({ type: ActionTypes.COUNTRY, payload: {} });

    console.log(data);
    console.log(partData);
  }
};

// получить все открытые страны
export const getOpenedCountries = (dispatch: Dispatch<Action>) => {

  if (localStorage.getItem('openedCountries') !== null || undefined) {

    let openedCountries = JSON.parse(localStorage.openedCountries);
    dispatch({ type: ActionTypes.OPENED_COUNTRIES, payload: openedCountries});
  }
};

export const getNotOpenedCountries = (dispatch: Dispatch<Action>) => {
  if (localStorage.getItem('notOpenedCountries') !== null || undefined) {

    let notOpenedCountries = JSON.parse(localStorage.notOpenedCountries);
    dispatch({ type: ActionTypes.NOT_OPENED_COUNTRIES, payload: notOpenedCountries});
  }
};

export const setNumberOpenedCountries = (dispatch: Dispatch<Action>) => {
  let openedCountry = JSON.parse(localStorage.openedCountriesCount);
  openedCountry++;
  localStorage.openedCountriesCount = JSON.stringify(openedCountry);
  dispatch({ type: ActionTypes.OPEN_COUNTRY_COUNTER, payload: openedCountry});
};

export const setNumberAttempts = (dispatch: Dispatch<Action>) => {
  let attempt = JSON.parse(localStorage.attemptsCount);
  attempt--;
  localStorage.attemptsCount = JSON.stringify(attempt);
  dispatch({ type: ActionTypes.ATTEMPT_COUNTER, payload: attempt});
};
