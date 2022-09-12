import { Action } from '../../types/actions';
import { IRedusersStates } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

const initialState: IRedusersStates = {
  loading: false,
  error: null,
}

export const fetchReduser = (state = initialState, action: Action): IRedusersStates => {
  switch (action.type) {
    case ActionTypes.FETCH:
      return { loading: true, error: null }
    case ActionTypes.FETCH_SUCCESS:
      return { loading: false, error: null }
    case ActionTypes.FETCH_ERROR:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
