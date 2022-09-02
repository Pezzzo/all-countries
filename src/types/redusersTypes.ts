export interface IRedusersStates {
  loading?: boolean;
  error?: null | string;
  selectedCountry?: any;
  coincidence?: boolean;
  sort?: any[];
  notSort?: any[];
  openedCountryCount?: number;
  attemptsСount?: number;
  openedCountries?: any[];
  notOpenedCountries?: any[];
  zeroAttempts?: boolean;
}

export enum ActionTypes {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  COUNTRY = 'COUNTRY',
  COINCIDENCE_TRUE = 'VALUE_TRUE',
  COINCIDENCE_FALSE = 'VALUE_FALSE',
  SORT = 'SORT',
  NOT_SORT = 'NOT_SORT',
  OPEN_COUNTRY_COUNTER = 'OPEN_COUNTRY_COUNTER',
  ATTEMPT_COUNTER = 'ATTEMPT_COUNTER',
  OPENED_COUNTRIES = 'OPENED_COUNTRIES',
  NOT_OPENED_COUNTRIES = 'NOT_OPENED_COUNTRIES',
  ZERO_ATTEMPTS_TRUE = 'ZERO_ATTEMPTS_TRUE',
  ZERO_ATTEMPTS_FALSE = 'ZERO_ATTEMPTS_FALSE',
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
  type: ActionTypes.COUNTRY;
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

interface IOpenCountryAction {
  type: ActionTypes.OPEN_COUNTRY_COUNTER;
  payload: number;
}

interface IAttemptAction {
  type: ActionTypes.ATTEMPT_COUNTER;
  payload: number;
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

export type Action =
  IFetchAction
  | IFetchSuccessAction
  | IFetchErrorAction
  | ICountryAction
  | ICoincidencesTrueAction
  | ICoincidencesFalseAction
  | ISortAction
  | INotSortAction
  | IOpenCountryAction
  | IAttemptAction
  | IOpenedCountriesAction
  | INotOpenedCountriesAction
  | IZeroAttemptsTrueAction
  | IZeroAttemptsFalseAction
