import { ActionTypes } from '../store/const';
import { IDataTypes } from './dataTypes';

interface IOriginalDataAction {
  type: ActionTypes.ORIGINAL_DATA;
  payload: IDataTypes[];
}

interface IPartDataAction {
  type: ActionTypes.PART_DATA;
  payload: IDataTypes[];
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

interface ISelectedCountryAction {
  type: ActionTypes.SELECTED_COUNTRY;
  payload: IDataTypes;
}

interface ICoincidencesTrueAction {
  type: ActionTypes.COINCIDENCE_TRUE;
}

interface ICoincidencesFalseAction {
  type: ActionTypes.COINCIDENCE_FALSE;
}

interface INotSortAction {
  type: ActionTypes.NOT_SORT;
  payload: IDataTypes[];
}

interface ISortAction {
  type: ActionTypes.SORT;
  payload: IDataTypes[];
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
  payload: IDataTypes[];
}

interface INotOpenedCountriesAction {
  type: ActionTypes.NOT_OPENED_COUNTRIES;
  payload: IDataTypes[];
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
  | ISelectedCountryAction
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
