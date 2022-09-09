import { IOpenedCountries } from '../../types/redusersTypes';
import { Action, ActionTypes } from './../../types/actionsTypes';

const initialState: IOpenedCountries = {
  openedCountries: [],
}

export const openedCountriesReduser = (state = initialState, action: Action) : IOpenedCountries => {
  switch (action.type) {
    case ActionTypes.OPENED_COUNTRIES:
      return { openedCountries: action.payload }
    default:
    return state
  }
}
