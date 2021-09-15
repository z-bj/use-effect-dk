import React, { Component } from "react";

class ClassCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `you have clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default ClassCount;
