export enum ActionTypes {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  ORIGINAL_DATA = 'ORIGINAL_DATA',
  PART_DATA = 'PART_DATA',
  SELECTED_COUNTRY = 'COUNTRY',
  COINCIDENCE_TRUE = 'VALUE_TRUE',
  COINCIDENCE_FALSE = 'VALUE_FALSE',
  SORT = 'SORT',
  NOT_SORT = 'NOT_SORT',
  ATTEMPT_COUNTER = 'ATTEMPT_COUNTER',
  ATTEMPT_COUNTER_RESTART = 'ATTEMPT_COUNTER_RESTART',
  ROUND_COUNTER = 'ROUND_COUNTER',
  OPENED_COUNTRIES = 'OPENED_COUNTRIES',
  NOT_OPENED_COUNTRIES = 'NOT_OPENED_COUNTRIES',
  ZERO_ATTEMPTS_TRUE = 'ZERO_ATTEMPTS_TRUE',
  ZERO_ATTEMPTS_FALSE = 'ZERO_ATTEMPTS_FALSE',
  STARTED_TRUE = 'STARTED_TRUE',
  ENDED_TRUE = 'ENDED_TRUE',
}

interface IOriginalDataAction {
  type: ActionTypes.ORIGINAL_DATA;
  payload: any[];
}

interface IPartDataAction {
  type: ActionTypes.PART_DATA;
  payload: any[];
}

interface IFetchAction {
  type: ActionTypes.FETCH;
}

interface IFetchSuccessAction {
  type: ActionTypes.FETCH_SUCCESS;
}

interface IFetchErrorAction {
  type: ActionTypes.FETCH_ERROR;
  payload: string;
}

interface ICountryAction {
  type: ActionTypes.SELECTED_COUNTRY;
  payload: object;
}

interface ICoincidencesTrueAction {
  type: ActionTypes.COINCIDENCE_TRUE;
}

interface ICoincidencesFalseAction {
  type: ActionTypes.COINCIDENCE_FALSE;
}

interface INotSortAction {
  type: ActionTypes.NOT_SORT;
  payload: any[];
}

interface ISortAction {
  type: ActionTypes.SORT;
  payload: any[];
}

interface IAttemptAction {
  type: ActionTypes.ATTEMPT_COUNTER;
}

interface IAttemptRestartAction {
  type: ActionTypes.ATTEMPT_COUNTER_RESTART;
}

interface IRoundAction {
  type: ActionTypes.ROUND_COUNTER;
}

interface IOpenedCountriesAction {
  type: ActionTypes.OPENED_COUNTRIES;
  payload: any[];
}

interface INotOpenedCountriesAction {
  type: ActionTypes.NOT_OPENED_COUNTRIES;
  payload: any[];
}

interface IZeroAttemptsTrueAction {
  type: ActionTypes.ZERO_ATTEMPTS_TRUE;
}

interface IZeroAttemptsFalseAction {
  type: ActionTypes.ZERO_ATTEMPTS_FALSE;
}

interface IStartedAction {
  type: ActionTypes.STARTED_TRUE;
}

interface IEndAction {
  type: ActionTypes.ENDED_TRUE;
}

export type Action =
  IOriginalDataAction
  | IPartDataAction
  | IFetchAction
  | IFetchSuccessAction
  | IFetchErrorAction
  | ICountryAction
  | ICoincidencesTrueAction
  | ICoincidencesFalseAction
  | ISortAction
  | INotSortAction
  | IAttemptAction
  | IAttemptRestartAction
  | IRoundAction
  | IOpenedCountriesAction
  | INotOpenedCountriesAction
  | IZeroAttemptsTrueAction
  | IZeroAttemptsFalseAction
  | IStartedAction
  | IEndAction
