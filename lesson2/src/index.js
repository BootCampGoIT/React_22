import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Components/App';
import './index.module.css';


export const store = {
  tasks: [],
  isLoading: false,
  isOpen: true,
}

export const { Provider, Consumer } = createContext('text');


ReactDOM.render(

    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  ,
  document.getElementById('root')
);



