import { Action, ActionTypes } from '../types/actionsTypes';
import axios, { AxiosError } from 'axios';
import { IDataTypes } from '../types/dataTypes';
import { Dispatch } from 'redux';

const fetch = (): any => {

  return async (dispatch: Dispatch<Action>) => {

    if (localStorage.getItem('loaded') === null || undefined) {

      try {

        dispatch({ type: ActionTypes.FETCH });

        const response = await axios.get<IDataTypes[]>('https://restcountries.com/v3.1/all');

        localStorage.setItem('loaded', 'true');

        dispatch({ type: ActionTypes.ORIGINAL_DATA, payload: response.data });
        dispatch({ type: ActionTypes.FETCH_SUCCESS });
      }

      catch (e: unknown) {
        const error = e as AxiosError;
        dispatch({ type: ActionTypes.FETCH_ERROR, payload: error.message });
      }

    } else {
      return;
    }

  };
};

export default fetch;
