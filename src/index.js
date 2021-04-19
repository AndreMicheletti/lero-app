import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import App from './App';
import theme from './theme';

import { Provider } from 'react-redux'

import configureStore from './store'
import particleConfig from './assets/particles.json'

const store = configureStore();

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(function (registration) {
        // Registration was successful
        //console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function (err) {
        // registration failed :(
        //console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}

registerServiceWorker()

console.log(particleConfig)
particlesJS('particles-js', particleConfig, function() {
  console.log('callback - particles.js config loaded');
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
