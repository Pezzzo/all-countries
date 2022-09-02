import { IRedusersStates, Action, ActionTypes } from '../../types/redusersTypes';

const initialState: IRedusersStates = {
  coincidence: false,
}

export const coincidencesReduser = (state = initialState, action: Action): IRedusersStates => {
  switch (action.type) {
    case ActionTypes.COINCIDENCE_TRUE:
      return { coincidence: true }
    case ActionTypes.COINCIDENCE_FALSE:
      return { coincidence: false }
    default:
      return state
  }
}
