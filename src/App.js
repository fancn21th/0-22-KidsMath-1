import React, { Component } from 'react';
import _ from 'lodash'
import Yuan from './components/presentaion/yuan';
import Jiao from './components/presentaion/jiao';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange = () => {
    this.setState({
      number: parseInt(this.textInput.value) || 0
    })
  }

  render() {
    return (
      <div className="App">
        <h3>
          <input
            type='text'
            ref={(input) => { this.textInput = input; }}
            onChange={this.onChange}
          />
          元 与 角
        </h3>
        <div>
          <Yuan number={this.state.number}/>
        </div>
        <div>
          {
            _.range(this.state.number * 10).map((val, idx) => {
              return <Jiao key={val}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
