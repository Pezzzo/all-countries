import { IRedusersStates, Action, ActionTypes } from './../../types/redusersTypes';

const initialState: IRedusersStates = {
  openedCountries: [],
}

export const openedCountriesReduser = (state = initialState, action: Action) : IRedusersStates => {
  switch (action.type) {
    case ActionTypes.OPENED_COUNTRIES:
      return { openedCountries: action.payload }
    default:
    return state
  }
}
