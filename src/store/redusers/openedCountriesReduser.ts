import { IOpenedCountries } from '../../types/redusersTypes';
import { Action } from '../../types/actions';
import { ActionTypes } from '../const';

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
