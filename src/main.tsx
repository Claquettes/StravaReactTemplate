// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import CallbackComponent from './CallBack.tsx';
import './index.css';
import { AthleteProvider } from './AthleteContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AthleteProvider>
      <App />
      <CallbackComponent />
    </AthleteProvider>
  </React.StrictMode>,
);
