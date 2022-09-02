import { IRedusersStates, Action, ActionTypes } from './../../types/redusersTypes';

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
