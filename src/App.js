import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/ModalLogin';
import Category from './components/Category';
import CategoryPage from './components/CategoryPage';




class App extends Component {

  render() {


    return (
      <div className="App">

        <CategoryPage />
        {/* <Home />
        <Content />
        <Category /> */}
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <Register />
        <Login />

      </div>

    );
  }
}




export default App;
