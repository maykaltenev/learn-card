import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { DictionaryProvider } from './context/DictionaryContext.js'; // Import the DictionaryProvider



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <DictionaryProvider>
    <App />
  </DictionaryProvider>

);

