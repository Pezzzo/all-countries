import { Action } from '../../types/actions';
import { IDataTypes } from '../../types/dataTypes';
import { ISelectedCountry } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

const initialState: ISelectedCountry = {
  selectedCountry: {} as IDataTypes,
}

export const selectedCountryReduser = (state = initialState, action: Action) : ISelectedCountry => {
  switch (action.type) {
    case ActionTypes.SELECTED_COUNTRY:
      return { selectedCountry: action.payload }
    default:
    return state
  }
}
