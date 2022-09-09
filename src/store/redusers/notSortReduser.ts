import { IRedusersStates } from '../../types/redusersTypes';
import { Action, ActionTypes } from './../../types/actionsTypes';

const initialState: IRedusersStates = {
  notSort: [],
}

export const notSortReduser = (state = initialState, action: Action) : IRedusersStates => {
  switch (action.type) {
    case ActionTypes.NOT_SORT:
      return { notSort: action.payload }
    default:
    return state
  }
}
