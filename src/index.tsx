import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { AuthProvider } from './context/AuthContext';
import { FormProvider } from './context/FormContext';
import { AppRouter } from './routes/AppRouter';

// Async init
const prepare = async () => {
  if (process.env.REACT_APP_USE_MOCK === 'true') {
    const { setupMockApi } = await import('./api/mock');
    setupMockApi();
  }
};

prepare().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <ThemeProvider theme={theme}>
      <FormProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </FormProvider>
    </ThemeProvider>,
  );

  reportWebVitals();
});
