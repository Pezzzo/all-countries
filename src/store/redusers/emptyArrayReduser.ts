import { Action } from '../../types/actions';
import { IRedusersStates } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

const initialState: IRedusersStates = {
  emptyArray: false,
}

export const emptyArrayReduser = (state = initialState, action: Action): IRedusersStates => {
  switch (action.type) {
    case ActionTypes.EMPTY_ARRAY_TRUE:
      return { emptyArray: true }
    case ActionTypes.EMPTY_ARRAY_FALSE:
      return { emptyArray: false }
    default:
      return state
  }
}
