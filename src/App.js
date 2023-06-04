
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import './App.css';

import Test from './components/test';
import Display from './display';
import Auth from './components/auth';
import Layout from './components/header/header';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Test />} />
            <Route path="auth" element={<Auth />} />
            <Route path="display" element={<Display />} />
          </Route>
        </Routes>
      </CookiesProvider>
    </div>
  );
}

export default App;
