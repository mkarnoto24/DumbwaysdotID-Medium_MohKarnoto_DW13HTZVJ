import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Modal from './component/Modal';



// end variabel
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
      </div>
    );
  }*/
  }
}
class Header extends Component {
  render() {

    return (
      <div>
        <h1>This is Header</h1>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <p>Welcome To DumbWays.id</p>
        <Modal>
        </Modal>

      </div>

    );
  }
}




export default App;
