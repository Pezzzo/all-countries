import React from 'react';
import { GlobalStyle } from './styled';
import CountriesPage from '../pages/CountriesPage/CountriesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoute from '../../app-route/app-route';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import RulesPage from '../pages/RulesPage/RulesPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage';
import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={AppRoute.HOME} element={<PageWrapper />}>
            <Route index element={<HomePage />} />
            <Route path={AppRoute.COUNTRIES.replace(AppRoute.HOME, "")}
              element={<CountriesPage />} />
            <Route path={AppRoute.RULES.replace(AppRoute.HOME, "")}
              element={<RulesPage />} />
            <Route path={AppRoute.STATISTICS.replace(AppRoute.HOME, "")}
              element={<StatisticsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
