import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ProviderContext } from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProviderContext>
  </React.StrictMode>
);


