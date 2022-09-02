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
    </>
  );
}
export default RulesPage;
