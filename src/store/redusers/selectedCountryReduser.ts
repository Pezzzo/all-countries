import { Action, ActionTypes } from '../../types/actionsTypes';
import { IRedusersStates } from '../../types/redusersTypes';

const initialState: IRedusersStates = {
  selectedCountry: {},
}

export const selectedCountryReduser = (state = initialState, action: Action) : IRedusersStates => {
  switch (action.type) {
    case ActionTypes.SELECTED_COUNTRY:
      return { selectedCountry: action.payload }
    default:
    return state
  }
}
