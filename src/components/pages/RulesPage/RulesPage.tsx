import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton } from '../../../common-styles/styled';
import { getPartDataLocalStorage } from '../../../localStorage/localStorage';
import Button from '../../ui/Button/Button';

const RulesPage = () => {
  const dispatch = useDispatch();
  let started = localStorage.getItem('started');

  return (
    <>
      {
        started !== null || undefined ?
          <Link to='/game'>
            <PlayButton>
              <Button clickHandler={() => getPartDataLocalStorage(dispatch)}>continue</Button>
            </PlayButton>
          </Link>
          :
          ''
      }

      <h4>
        при старте игры вам даётся список из 25-ти стран и их флагов

      </h4>
      <h4>
      вы должны правильно сопоставить название страны и флаг,
        для этого вам нужно:
      </h4>
        <p>
        выбрать название страны из списка

        </p>

      <p>
        далее выберать предпологаемый флаг страны, которую вы выбрали, и нажмать на него
      </p>

      <p>
        при совпадении названия и флага появится модальное окно с минимальными подробностями об этой стране
      </p>
      <p>
        у вас есть право на ошибку (всего их 5), в случае неудачи это колличество уменьшится на 1.
        а если это число станет равным 0 - бе
      </p>
    </>
  );
}
export default RulesPage;
