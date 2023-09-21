import React from 'react';

interface CounterState {
  count: number;
}

export default class Age extends React.Component<{value ?: null}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Umur saya adalah: {this.state.count} tahun</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

