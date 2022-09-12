import { INotOpenedCountries } from '../../types/redusersTypes';
import { Action } from '../../types/actions';
import { ActionTypes } from '../const';

const initialState: INotOpenedCountries = {
  notOpenedCountries: [],
}

export const notOpenedCountriesReduser = (state = initialState, action: Action) : INotOpenedCountries => {
  switch (action.type) {
    case ActionTypes.NOT_OPENED_COUNTRIES:
      return { notOpenedCountries: action.payload }
    default:
    return state
  }
}
