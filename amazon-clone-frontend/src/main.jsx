import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Create a Material-UI theme
const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    {/* Apply the Material-UI theme to your app */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
