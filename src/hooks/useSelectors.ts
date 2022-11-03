import { useTypedSelector } from './useTypedSelector';

const useSelectors = () => {
  const { attemptСount } = useTypedSelector(state => state.attempts);
  const { coincidence } = useTypedSelector(state => state.coincidence);
  const { started, ended } = useTypedSelector(state => state.startEnd);
  const { error, loading } = useTypedSelector(state => state.fetch);
  const { notOpenedCountries } = useTypedSelector(state => state.notOpenedCountries);
  const { notSort } = useTypedSelector(state => state.notSort);
  const { openedCountries } = useTypedSelector(state => state.openedCountries);
  const { originalData } = useTypedSelector(state => state.originalData);
  const { partData } = useTypedSelector(state => state.partData);
  const { sortPartData } = useTypedSelector(state => state.sortPartData);
  const { roundCount } = useTypedSelector(state => state.rounds);
  const { selectedCountry } = useTypedSelector(state => state.selectedCountry);
  const { sort } = useTypedSelector(state => state.sort);
  const { zeroAttempts } = useTypedSelector(state => state.zeroAttempts);
  const { emptyArray } = useTypedSelector(state => state.emptyArray);

  return {
    attemptСount,
    coincidence,
    started,
    ended,
    error,
    loading,
    notOpenedCountries,
    notSort,
    openedCountries,
    originalData,
    partData,
    sortPartData,
    roundCount,
    selectedCountry,
    sort,
    zeroAttempts,
    emptyArray,
  }
};

export { useSelectors };
