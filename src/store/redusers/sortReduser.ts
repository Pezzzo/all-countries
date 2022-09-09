import { IRedusersStates } from '../../types/redusersTypes';
import { Action, ActionTypes } from './../../types/actionsTypes';

const initialState: IRedusersStates = {
  sort: [],
}

export const sortReduser = (state = initialState, action: Action) : IRedusersStates => {
  switch (action.type) {
    case ActionTypes.SORT:
      return { sort: action.payload }
    default:
    return state
  }
}
