import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton, RowWrapper } from '../../../common-styles/styled';
import useSelectors from '../../../hooks/useSelectors';
import { getPartDataLocalStorage } from '../../../localStorage/localStorage';
import Button from '../../ui/Button/Button';

const RulesPage = () => {

  const dispatch = useDispatch();

  const {partData, started} = useSelectors();

  return (
    <>
      {
        started &&
        <RowWrapper>
          <Link to='/game'>
            <PlayButton type="button">
              <Button clickHandler={() => getPartDataLocalStorage(dispatch, partData)}>continue</Button>
            </PlayButton>
          </Link>
        </RowWrapper>
      }

      <div>
        <h3>
          Игра состоит из 10 раундов
        </h3>
        <h3>
          в начале раунда выдаётся список из 25-ти стран и их флагов
        </h3>
        <h3>
          вы должны сопоставить название страны и флаг,
          для этого нужно:
        </h3>
        <h4>
          1. Выбрать название страны из списка
        </h4>
        <h4>
          2. Далее выберать предпологаемый флаг страны, которую вы выбрали, и нажать на него
        </h4>
      </div>

      <div>
        <p>
          При правильном сопоставлении появится окно с минимальными подробностями об этой стране
        </p>
        <p>
          у вас есть определенное количество возможных промахов (право на ошибку).
          За один раунд можно ошибиться только 5 раз, после этого он закончится.
        </p>
        <p>
          текущие результы вы можете посмотреть на странице - статистика
        </p>
      </div>
    </>
  );
}
export default RulesPage;
