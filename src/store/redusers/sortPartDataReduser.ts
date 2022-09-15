import { Action } from '../../types/actions';
import { ISortPartData } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

const initialState: ISortPartData = {
  sortPartData: [],
}

export const sortPartDataReduser = (state = initialState, action: Action) : ISortPartData => {
  switch (action.type) {
    case ActionTypes.SORT_PART_DATA:
      return { sortPartData: action.payload }
    default:
    return state
  }
}
