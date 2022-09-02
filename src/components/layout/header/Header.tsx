import React, { useEffect } from 'react';
import { getPartDataLocalStorage, getOpenedCountries } from '../../../localStorage/localStorage';
import CustomLink from '../../ui/CustomLink/CustomLink';
import { StyledHeader, NavWrapper } from './styled';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../types/redusersTypes';

const Header = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionTypes.ATTEMPT_COUNTER, payload: localStorage.getItem('attemptsCount')});
  }, [dispatch]);

  return (
    <>
      <StyledHeader>
        <NavWrapper>
          <CustomLink to='/'>
            home
          </CustomLink>
          <CustomLink to='/game' clickHandler={() => getPartDataLocalStorage(dispatch)}>
            game
          </CustomLink>
          <CustomLink to='/rules'>
            rules
          </CustomLink>
          <CustomLink to='/statistics' clickHandler={() => getOpenedCountries(dispatch)}>
            statistics
          </CustomLink>
        </NavWrapper>
      </StyledHeader>
    </>
  );
}
export default Header;
