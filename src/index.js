import React from 'react';
import  ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

// connect react app to dom
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App />
      {/* ye actually use those routes    */}
     </BrowserRouter> 

);