import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

// export class Counter extends Component {
export class Counter extends Component<CounterProps, CounterState> {
  state = { count: 0 };

  handleBtnClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    // Without types: Property 'count' does not exist on type 'Readonly<{}>'
  };

  render() {
    return (
      <div>
        <button onClick={this.handleBtnClick}>Increment</button>
        <div>
          {this.props.message} {this.state.count}
          {/*  Without types - Property 'message' does not exist on type 'Readonly<{}>' */}
        </div>
      </div>
    );
  }
}

export default Counter;
