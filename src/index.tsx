import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/fonts.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { defaultTheme } from './common-styles/defaultTheme';
import  store  from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
