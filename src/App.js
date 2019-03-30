import React, { Component } from 'react';
import CalcPanel from './components/index'
import './App.css';
import HeaderCalc from './components/header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderCalc />
        <CalcPanel/>
      </div>
    );
  }
}

export default App;
