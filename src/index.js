import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import MainContextProvider from './MainContext';

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
