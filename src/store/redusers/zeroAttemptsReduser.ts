import { Action, ActionTypes } from '../../types/actionsTypes';
import { IRedusersStates } from '../../types/redusersTypes';

const initialState: IRedusersStates = {
  zeroAttempts: false,
}

export const zeroAttemptsReduser = (state = initialState, action: Action): IRedusersStates => {
  switch (action.type) {
    case ActionTypes.ZERO_ATTEMPTS_TRUE:
      return { zeroAttempts: true }
    case ActionTypes.ZERO_ATTEMPTS_FALSE:
      return { zeroAttempts: false }
    default:
      return state
  }
}
