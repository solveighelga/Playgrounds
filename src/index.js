import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.scss';
import App from './App';
import Map from './Components/Maps/Map';
import { ChakraProvider, theme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
      <ChakraProvider theme={theme}>
      <Map />
    </ChakraProvider>
  </React.StrictMode>
);