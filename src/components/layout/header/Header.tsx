import React, { useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getPartDataLocalStorage, getOpenedCountries } from '../../../localStorage/localStorage';
import CustomLink from '../../ui/CustomLink/CustomLink';
import { StyledHeader, NavWrapper, CounterWrapper, StyledP, StyledSpanAttempts } from './styled';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../types/redusersTypes';

const Header = () => {

  const { loading } = useTypedSelector(state => state.fetch);
  const { attemptsСount } = useTypedSelector(state => state.attempts);

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
        {
          loading ? '' :
            <CounterWrapper>
              <StyledP>
                attempts: <StyledSpanAttempts>{attemptsСount}</StyledSpanAttempts>
              </StyledP>
            </CounterWrapper>
        }
      </StyledHeader>
    </>
  );
}
export default Header;
