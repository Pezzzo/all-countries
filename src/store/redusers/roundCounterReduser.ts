import { Action, ActionTypes } from '../../types/actionsTypes';
import { IRoundsCounterStates } from '../../types/redusersTypes';

const initialState: IRoundsCounterStates = {
  roundCount: 0,
}

export const roundCounterReduser = (state = initialState, action: Action): IRoundsCounterStates => {
  switch (action.type) {
    case ActionTypes.ROUND_COUNTER:
      return { roundCount: state.roundCount + 1}
    default:
      return state
  }
}
