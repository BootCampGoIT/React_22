import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Components/App';
import './index.module.css';




export const {Provider, Consumer} = createContext("Theme");
const store = {
  tasks: [{id: "hfukhjshkvf", task: 'bdhbcjs,dc'}],
  users: [],
  filter: '',
  isVisible: true,
  getContact(contact){
    this.contacts = [...this.contacts, contact] 
  }
}



ReactDOM.render(
  <Provider value={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

console.dir(window)

