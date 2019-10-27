import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Mypage from './Mypage'

class App extends React.Component {
  render(){
  return (
      <BrowserRouter>
        <Route path="/:id" component={Mypage}/>
      </BrowserRouter>
    )
  }
}

export default App;
