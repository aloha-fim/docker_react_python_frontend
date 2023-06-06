
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import './App.css';

import LandingPage from './components/landed';
import Display from './display';
import Auth from './components/auth';
import Layout from './components/layout';
import Index from './components/Index';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="landing" element={<LandingPage />} />
          </Route>
          <Route path="auth" element={<Auth />} />
          <Route path="display" element={<Display />} />
        </Routes>
      </CookiesProvider>
    </div>
  );
}

export default App;
