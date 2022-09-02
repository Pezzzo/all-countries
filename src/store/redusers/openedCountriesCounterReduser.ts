import { IRedusersStates, Action, ActionTypes } from '../../types/redusersTypes';

const initialState: IRedusersStates = {
  openedCountryCount: 0,
}

export const openedCountriesCounterReduser = (state = initialState, action: Action): IRedusersStates => {
  switch (action.type) {
    case ActionTypes.OPEN_COUNTRY_COUNTER:
      return { openedCountryCount: action.payload}
    default:
      return state
  }
}
