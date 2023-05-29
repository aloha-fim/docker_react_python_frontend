import React from 'react';
//import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import { ReactDOM } from 'react-dom/client';

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";

import App from './App';
import Auth from './components/auth';
//import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

//npm install cors if JS is serverside

/*
const cors = require('cors');

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200
}
*/

// const TokenContext = createContext(null)

//app.use(logger("dev"));
//app.use(cors(corsOptions));

//attempt to use react-router-v6
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth/>}/>
          <Route exact path="/moviemaker" element={<App/>}/>
        </Routes>  
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// export default function Router() {
//   return (
//     <React.StrictMode>
//       <CookiesProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Auth/>} />
//             <Route path="/moviemaker" element={<App/>} />
//           </Routes>
//         </BrowserRouter>
//       </CookiesProvider>
//     </React.StrictMode>
//   )
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Router/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
