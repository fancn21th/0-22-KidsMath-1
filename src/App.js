import React, { Component } from 'react';
import _ from 'lodash'
import Yuan from './components/presentaion/yuan';
import Jiao from './components/presentaion/jiao';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
      number2: 0
    }
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
  }

  onChange = () => {
    this.setState({
      number: parseInt(this.textInput.value) || 0
    })
  }

  onChange2 = () => {
    this.setState({
      number2: parseInt(this.textInput2.value) || 0
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
            value={this.state.number}
          />
          元
          <input
            type='text'
            ref={(input) => { this.textInput2 = input; }}
            onChange={this.onChange2}
            value={this.state.number2}
          />
          角 = {this.state.number * 10 + this.state.number2} 角
        </h3>
        <div>
          <Yuan number={this.state.number}/>
        </div>
        <div>
          {
            _.range(this.state.number * 10 + this.state.number2).map((val, idx) => {
              return <Jiao key={val}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
