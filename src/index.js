import React, { StrictMode } from 'react';
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
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';


  
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
      <StrictMode>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Auth />} />
                <Route path="store" element={<App />} />
              <Route path="test" element={<Test />} />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </StrictMode>
  );
  


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Auth />,
//   },
//   {
//     path: "store",
//     element: <App />,
//   }, 
//   {
//     path: "test",
//     element: <Test />,
//   }, 
// ]);

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//     <StrictMode>
//       <CookiesProvider>
//         <RouterProvider router={router} />
//       </CookiesProvider>
//     </StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//serviceWorker.unregister();
