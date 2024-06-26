import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css'
import './components/language/i18n'
import DarkModeProvider from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DarkModeProvider>
      <App />
     </DarkModeProvider>
);

