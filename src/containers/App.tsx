import { Component } from 'react';
import './App.css';
//Router import
import { BrowserRouter, } from "react-router-dom";
//Components import
import { AppRouter } from 'containers'

class App extends Component {

  render() {
    return (
      <div className='App'>
              <div className='background'>

          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </div>
</div>

    );
  }
}

export default App;
