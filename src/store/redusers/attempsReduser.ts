import { IRedusersStates, Action, ActionTypes } from '../../types/redusersTypes';

const initialState: IRedusersStates = {
  attemptsСount: 5,
}

export const attemptsReduser = (state = initialState, action: Action): IRedusersStates => {
  switch (action.type) {
    case ActionTypes.ATTEMPT_COUNTER:
      return { attemptsСount: action.payload}
    default:
      return state
  }
}
