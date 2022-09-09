import { Dispatch } from 'redux';
import { IDataTypes } from '../types/dataTypes';
import { Action, ActionTypes } from '../types/actionsTypes';
import { shuffleArray } from '../util/util';


const dispatchMultiple = (dispatch: Dispatch<Action>, data: IDataTypes[]) => {
  dispatch({ type: ActionTypes.NOT_SORT, payload: data });
  dispatch({ type: ActionTypes.SORT, payload: data.map((item: object) => item).sort(() => Math.random() - 0.5) });
};

// получить 25 стран из массива всех стран в localStorage
export const getPartData = (dispatch: Dispatch<Action>, data: IDataTypes[]) => {
  const NUMBER_OF_PAGES = 25;

  let shuffleData = shuffleArray(data);
  let partData = shuffleData.splice(0, NUMBER_OF_PAGES);

  dispatchMultiple(dispatch, partData);

  dispatch({ type: ActionTypes.ZERO_ATTEMPTS_FALSE });
  dispatch({ type: ActionTypes.STARTED_TRUE });
  dispatch({ type: ActionTypes.PART_DATA, payload: partData });
  dispatch({ type: ActionTypes.ATTEMPT_COUNTER_RESTART });
  dispatch({ type: ActionTypes.PART_DATA, payload: partData });
  dispatch({ type: ActionTypes.ROUND_COUNTER });
  dispatch({ type: ActionTypes.SELECTED_COUNTRY, payload: {} });

  console.log(data);
  console.log(partData);
};

// получить сохранённые 25 стран с прошлого сеанса в localStorage
export const getPartDataLocalStorage = (dispatch: Dispatch<Action>, data: IDataTypes[]) => {

  dispatchMultiple(dispatch, data);
    dispatch({ type: ActionTypes.SELECTED_COUNTRY, payload: {} });
};
