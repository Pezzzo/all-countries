import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayButton } from '../../../common-styles/styled';
import { getPartData, getPartDataLocalStorage } from '../../../localStorage/localStorage';
import Button from '../../ui/Button/Button';

const HomePage = () => {

  const dispatch = useDispatch();
  let started = localStorage.getItem('started');

  return (
    <>
      <Link to='/game'>
        {
          started !== null || undefined ?
            <PlayButton>
              <Button clickHandler={() => getPartDataLocalStorage(dispatch)}>continue</Button>
            </PlayButton>
            :
            <PlayButton>
              <Button clickHandler={() => getPartData(dispatch)}>play</Button>
            </PlayButton>
        }
      </Link>
    </>
  );
}
export default HomePage;
