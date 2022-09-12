import { Action } from '../../types/actions';
import { IPartData } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

const initialState: IPartData = {
  partData: [],
}

export const partDataReduser = (state = initialState, action: Action) : IPartData => {
  switch (action.type) {
    case ActionTypes.PART_DATA:
      return { partData: action.payload }
    default:
    return state
  }
}
