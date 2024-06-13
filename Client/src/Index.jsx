import react from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter } from 'react-router-dom' ;


ReactDom.render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
,document.querySelector("#root")
