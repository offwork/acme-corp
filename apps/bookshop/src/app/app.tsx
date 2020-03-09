import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppShell } from '@acme-corp/ui';
import AppRouting from './app-routing';

import './app.scss';

export const App = () => {
  return (
    <div className="app">
      <AppShell>
        <BrowserRouter>
          <AppRouting />
        </BrowserRouter>
      </AppShell>
    </div>
  );
};

export default App;
