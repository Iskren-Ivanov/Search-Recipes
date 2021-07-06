import React from 'react';

import CustomRouter from './CustomRouter/Router';
import { NotificationContainer } from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <CustomRouter />
        <NotificationContainer />
      </header>
    </div>
  );
}

export default App;
