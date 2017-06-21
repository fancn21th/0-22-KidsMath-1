import React, { Component } from 'react';
import Yuan from './components/presentaion/yuan'
import Jiao from './components/presentaion/jiao'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>
          元 与 角
        </h3>
        <div>
          <Yuan />
        </div>
        <div>
          {
            [1,2,3,4,5,6,7,8,9,10,11,12].map((val, idx) => {
              return val % 6 === 0 ? <br/> : <Jiao />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
