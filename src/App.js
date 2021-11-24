import React, { Component } from 'react';
import Navb from './Component/Navbar';
import Midcon from './Component/midcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App" >
        <Navb />
        <Midcon />
      </div>
    );
  }
}
export default App;
