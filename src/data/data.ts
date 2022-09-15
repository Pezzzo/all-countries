import { Dispatch } from 'redux';
import { IDataTypes } from '../types/dataTypes';
import { Action } from '../types/actions';
import { shuffleArray } from '../util/util';
import { ActionTypes } from '../store/const';

const dispatchMultiple = (dispatch: Dispatch<Action>, countriesNameArr: IDataTypes[], flagsArr: IDataTypes[]) => {
  dispatch({ type: ActionTypes.NOT_SORT, payload: countriesNameArr });
  dispatch({ type: ActionTypes.SORT, payload: flagsArr });
};

// получить 25 стран из массива всех стран
export const getPartData = (dispatch: Dispatch<Action>, data: IDataTypes[]) => {

  const NUMBER_OF_PAGES = 25;

  let shuffleData = shuffleArray(data);
  let partData = shuffleData.splice(0, NUMBER_OF_PAGES);

  let sortData = partData.map((item) => item).sort(() => Math.random() - 0.5);

  dispatchMultiple(dispatch, partData, sortData);

  console.log(partData);
  console.log(sortData);

  dispatch({ type: ActionTypes.COINCIDENCE_FALSE });
  dispatch({ type: ActionTypes.EMPTY_ARRAY_FALSE });
  dispatch({ type: ActionTypes.ZERO_ATTEMPTS_FALSE });
  dispatch({ type: ActionTypes.STARTED_TRUE });
  dispatch({ type: ActionTypes.ATTEMPT_COUNTER_RESTART });
  dispatch({ type: ActionTypes.PART_DATA, payload: partData });
  dispatch({ type: ActionTypes.SORT_PART_DATA, payload: sortData });
  dispatch({ type: ActionTypes.ROUND_COUNTER });
  dispatch({ type: ActionTypes.SELECTED_COUNTRY, payload: {} as IDataTypes });
};

// получить сохранённые 25 стран с прошлого сеанса
export const getPartDataLocalStorage = (dispatch: Dispatch<Action>, countriesNameArr: IDataTypes[], flagsArr: IDataTypes[]) => {

  dispatchMultiple(dispatch, countriesNameArr, flagsArr);
  dispatch({ type: ActionTypes.SELECTED_COUNTRY, payload: {} as IDataTypes });
};
