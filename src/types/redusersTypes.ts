import { IDataTypes } from "./dataTypes";

export interface IRedusersStates {
  loading?: boolean;
  error?: null | string;
  coincidence?: boolean;
  sort?: IDataTypes[];
  notSort?: IDataTypes[];
  zeroAttempts?: boolean;
  emptyArray?: boolean;
}

export interface ISelectedCountry {
  selectedCountry: IDataTypes;
}

export interface IAttemptsCounterStates {
  attemptСount: number;
}

export interface IRoundsCounterStates {
  roundCount: number;
}

export interface IOriginalData {
  originalData: IDataTypes[];
}

export interface IPartData {
  partData: IDataTypes[];
}

export interface ISortPartData {
  sortPartData: IDataTypes[];
}

export interface IOpenedCountries {
  openedCountries: IDataTypes[];
}

export interface INotOpenedCountries {
  notOpenedCountries: IDataTypes[];
}

export interface IStartEnd {
  started: boolean;
  ended: boolean;
}
