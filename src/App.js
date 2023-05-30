
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import './App.css';

import Test from './components/test';
import Display from './display';
import Auth from './components/auth';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="auth" element={<Auth />} />
          <Route path="display" element={<Display />} />
        </Routes>
        </CookiesProvider>
    </div>
  );
}

export default App;
