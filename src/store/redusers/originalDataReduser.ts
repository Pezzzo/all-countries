import { Action } from '../../types/actions';
import { IOriginalData } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

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
