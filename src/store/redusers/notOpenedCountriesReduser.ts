import { INotOpenedCountries } from '../../types/redusersTypes';
import { Action, ActionTypes } from './../../types/actionsTypes';

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
