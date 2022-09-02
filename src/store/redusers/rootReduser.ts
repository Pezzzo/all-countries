import { zeroAttemptsReduser } from './zeroAttemptsReduser';
import { notOpenedCountriesReduser } from './notOpenedCountriesReduser';
import { openedCountriesReduser } from './openedCountriesReduser';
import { attemptsReduser } from './attempsReduser';
import { openedCountriesCounterReduser } from './openedCountriesCounterReduser';
import { notSortReduser } from './notSortReduser';
import { sortReduser } from './sortReduser';
import { fetchReduser } from './fetchReduser';
import { coincidencesReduser } from './coincidencesReduser';
import { selectedCountryReduser } from './selectedCountryReduser';
import { combineReducers } from "redux";

export const rootReduser = combineReducers({
  fetch: fetchReduser,
  selectedCountry: selectedCountryReduser,
  coincidence: coincidencesReduser,
  sort: sortReduser,
  notSort: notSortReduser,
  openedCountryCounter: openedCountriesCounterReduser,
  attempts: attemptsReduser,
  openedCountries: openedCountriesReduser,
  notOpenedCountries: notOpenedCountriesReduser,
  zeroAttempts:zeroAttemptsReduser
})

export type RootState = ReturnType<typeof rootReduser>
