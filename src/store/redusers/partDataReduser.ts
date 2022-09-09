import { Action, ActionTypes } from '../../types/actionsTypes';
import { IPartData } from '../../types/redusersTypes';

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
