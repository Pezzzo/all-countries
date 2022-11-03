import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageWrapper } from '../layout/page-wrapper/page-wrapper';
import AppRoute from '../../app-routes/app-routes';
import CountriesPage from '../pages/CountriesPage/CountriesPage';
import RulesPage from '../pages/RulesPage/RulesPage';
import ResultsPage from '../pages/ResultsPage/ResultsPage';
import HomePage from '../pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoute.HOME} element={<PageWrapper />}>
            <Route index element={<HomePage />} />
            <Route path={AppRoute.COUNTRIES.replace(AppRoute.HOME, "")}
              element={<CountriesPage />} />
            <Route path={AppRoute.RULES.replace(AppRoute.HOME, "")}
              element={<RulesPage />} />
            <Route path={AppRoute.RESULTS.replace(AppRoute.HOME, "")}
              element={<ResultsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
