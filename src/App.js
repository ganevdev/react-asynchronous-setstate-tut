import React, { Component } from 'react';
import './App.css';

class AsyncSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someCount: 42,
    };
  }

  // async setState
  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { someCount: prevState.someCount + prevProps.increment };
      },
      () => console.log(this.state.someCount)
    );
  };

  // sync setState
  // handleClick = () => {
  //   this.setState({ someCount: this.state.someCount + 1 });
  // };

  render() {
    return (
      <div>
        <h1>Some Count: {this.state.someCount}</h1>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AsyncSet increment={1} />
      </div>
    );
  }
}

export default App;
