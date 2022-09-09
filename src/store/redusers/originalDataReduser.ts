import { Action, ActionTypes } from '../../types/actionsTypes';
import { IOriginalData } from '../../types/redusersTypes';

const initialState: IOriginalData = {
  originalData: [],
}

export const originalDataReduser = (state = initialState, action: Action) : IOriginalData => {
  switch (action.type) {
    case ActionTypes.ORIGINAL_DATA:
      return { originalData: action.payload }
    default:
    return state
  }
}
