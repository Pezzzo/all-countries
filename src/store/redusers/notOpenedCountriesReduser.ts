import { IRedusersStates, Action, ActionTypes } from './../../types/redusersTypes';

const initialState: IRedusersStates = {
  notOpenedCountries: [],
}

export const notOpenedCountriesReduser = (state = initialState, action: Action) : IRedusersStates => {
  switch (action.type) {
    case ActionTypes.NOT_OPENED_COUNTRIES:
      return { notOpenedCountries: action.payload }
    default:
    return state
  }
}
