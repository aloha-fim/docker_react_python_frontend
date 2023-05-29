import React from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css';
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";

import Test from './components/test';
import App from './App';
import Auth from './components/auth';
//import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/testing",
    element: <Test />,
  },  
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//serviceWorker.unregister();
