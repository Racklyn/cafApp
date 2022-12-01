import React from 'react';
import './App.css';
import { MainContextProvider } from './contexts/main';
import Routes from './Routes';

function App() {
  return (
    <MainContextProvider>
      <Routes />
    </MainContextProvider>
  );
}

export default App;
