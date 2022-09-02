import { IRedusersStates, Action, ActionTypes } from '../../types/redusersTypes';

const initialState: IRedusersStates = {
  selectedCountry: {},
}

export const selectedCountryReduser = (state = initialState, action: Action) : IRedusersStates => {
  switch (action.type) {
    case ActionTypes.COUNTRY:
      return { selectedCountry: action.payload }
    default:
    return state
  }
}
