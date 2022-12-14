import { Action } from '../../types/actions';
import { IAttemptsCounterStates } from '../../types/redusersTypes';
import { ActionTypes } from '../const';

const initialState: IAttemptsCounterStates = {
  attemptСount: 5,
}

export const attemptsReduser = (state = initialState, action: Action): IAttemptsCounterStates => {
  switch (action.type) {
    case ActionTypes.ATTEMPT_COUNTER:
      return { ...state ,attemptСount: state.attemptСount - 1 }
    case ActionTypes.ATTEMPT_COUNTER_RESTART:
      return { ...state ,attemptСount: 5}
    default:
      return state
  }
}
