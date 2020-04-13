import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Bring in App Component
import App from './App/app';

class Wrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}


ReactDom.render(<Wrapper />, document.getElementById('app'))
