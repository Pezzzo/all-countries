import { Action } from '../../types/actions';
import { IStartEnd } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

const initialState: IStartEnd = {
  started: false,
  ended: false,
}

export const startEndReduser = (state = initialState, action: Action): IStartEnd => {
  switch (action.type) {
    case ActionTypes.STARTED_TRUE:
      return { started: true, ended: false }
      case ActionTypes.ENDED_TRUE:
        return { started: true, ended: true }
    default:
      return state
  }
}
