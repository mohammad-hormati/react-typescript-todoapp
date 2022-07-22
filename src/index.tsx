import { createTheme, ThemeProvider } from '@mui/material';
import { lightBlue, teal } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
    },
    secondary: {
      light: teal[300],
      main: teal[500],
      dark: teal[900],
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
