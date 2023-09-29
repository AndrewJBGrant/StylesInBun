import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import * as themes from "./theme/schema.json";
import { set_ToLS } from './utils/storage.js';


 set_ToLS("all-themes", themes.default);
//  console.log(themes.default, "here is a theme!")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
