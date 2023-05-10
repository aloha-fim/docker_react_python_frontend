import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './components/auth';
//import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { createRoot } from 'react-dom/client';
//npm install cors

/*
const cors = require('cors');

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200
}
*/

const container = document.getElementById('root');
const root = createRoot(container);

//app.use(logger("dev"));
//app.use(cors(corsOptions));


function Router() {

  return (
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth/>} />
          <Route exact path="/movies" element={<App/>} />
        </Routes>
        </BrowserRouter>
        
      </CookiesProvider>
    </React.StrictMode>

  )
}
root.render(<Router />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
