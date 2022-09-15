import { startEndReduser } from './startEndReduser';
import { partDataReduser } from './partDataReduser';
import { zeroAttemptsReduser } from './zeroAttemptsReduser';
import { notOpenedCountriesReduser } from './notOpenedCountriesReduser';
import { openedCountriesReduser } from './openedCountriesReduser';
import { attemptsReduser } from './attempsReduser';
import { notSortReduser } from './notSortReduser';
import { sortReduser } from './sortReduser';
import { fetchReduser } from './fetchReduser';
import { coincidencesReduser } from './coincidencesReduser';
import { selectedCountryReduser } from './selectedCountryReduser';
import { combineReducers } from "redux";
import { roundCounterReduser } from './roundCounterReduser';
import { originalDataReduser } from './originalDataReduser';
import { emptyArrayReduser } from './emptyArrayReduser';
import { sortPartDataReduser } from './sortPartDataReduser';

export const rootReduser = combineReducers({
  fetch: fetchReduser,
  selectedCountry: selectedCountryReduser,
  coincidence: coincidencesReduser,
  sort: sortReduser,
  notSort: notSortReduser,
  attempts: attemptsReduser,
  rounds: roundCounterReduser,
  openedCountries: openedCountriesReduser,
  notOpenedCountries: notOpenedCountriesReduser,
  zeroAttempts:zeroAttemptsReduser,
  startEnd: startEndReduser,
  originalData: originalDataReduser,
  partData: partDataReduser,
  sortPartData: sortPartDataReduser,
  emptyArray: emptyArrayReduser
})

export type RootState = ReturnType<typeof rootReduser>
