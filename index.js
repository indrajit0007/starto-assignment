import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store";
//import { render } from "react-dom";
//import Gallery from "react-photo-gallery";
//import {photos} from "./photos";




store.subscribe(function(){
  console.log("redux state changed");
  console.log(store.getState());
 // console.log(`the count value is now ${store.getState().count}`);
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}  >
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);




/* popout the browser and maximize to see more columns! -> */



/* popout the browser and maximize to see more columns! -> */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
