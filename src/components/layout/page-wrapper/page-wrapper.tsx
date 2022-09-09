import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import fetch from '../../../fetch/fetch';
import useSelectors from '../../../hooks/useSelectors';
import Loader from '../../blocks/Loader/Loader';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Wrapper } from './styled';

const PageWrapper = () => {

  const { loading } = useSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Header />
        {loading ? <Loader /> : <Outlet />}
        <Footer />
      </Wrapper>
    </>
  );
}
export default PageWrapper;
