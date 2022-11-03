import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton, ResetButton, RowWrapper } from '../../../common-styles/common';
import { ResetButtonWrapper } from './styled';
import { getPartData, getPartDataLocalStorage } from '../../../data/data';
import { clearLocalStorage } from '../../../util/util';
import { Error } from '../../blocks/Error/Error';
import { Button } from '../../ui/Button/Button';
import { useSelectors } from '../../../hooks/useSelectors';
import { ResultList } from '../../blocks/ResultList/ResultList';

const StatisticsPage: React.FC = () => {

  const {
    error,
    partData,
    sortPartData,
    started,
    originalData,
    openedCountries,
    notOpenedCountries
  } = useSelectors();

  const dispatch = useDispatch();

  return error ? <Error error={error} /> : (
    <>
      <RowWrapper>
        <Link to='/game'>
          <PlayButton type="button">
            {
              started ?
                <Button
                  clickHandler={() => getPartDataLocalStorage(dispatch, partData, sortPartData)}
                >continue</Button> :
                <Button
                  clickHandler={() => getPartData(dispatch, originalData)}
                >start</Button>
            }
          </PlayButton>
        </Link>
        <ResetButtonWrapper>
          <ResetButton type="button">
            <Button clickHandler={clearLocalStorage}>reset</Button>
          </ResetButton>
        </ResetButtonWrapper>
      </RowWrapper>
      <ResultList
        openedCountries={openedCountries}
        notOpenedCountries={notOpenedCountries} />
    </>
  );
}
export default StatisticsPage;
