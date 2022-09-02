import { Action, ActionTypes } from '../types/redusersTypes';
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
        localStorage.data = JSON.stringify(response.data);
        localStorage.openedCountriesCount = JSON.stringify(0);
        localStorage.attemptsCount = JSON.stringify(5);

        localStorage.openCountries = JSON.stringify([]);
        localStorage.openedCountries = JSON.stringify([]);
        localStorage.notOpenedCountries = JSON.stringify([]);

        dispatch({ type: ActionTypes.FETCH_SUCCESS });
        dispatch({ type: ActionTypes.ATTEMPT_COUNTER, payload: JSON.parse(localStorage.attemptsCount)});

        console.log(JSON.parse(localStorage.data));
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
