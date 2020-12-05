import { Component } from 'react';
import './App.css';
//Router import
import { BrowserRouter, } from "react-router-dom";
//Components import
import { AppRouter, Header } from 'containers'

class App extends Component {

  render() {
    return (
      <div className='App'>
          <BrowserRouter>
            <Header />
            <AppRouter />
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
