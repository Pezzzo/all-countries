import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './common-styles/fonts';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { defaultTheme } from './common-styles/defaultTheme';
import { store } from './store/store';
import { GlobalStyle } from './common-styles/global';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
