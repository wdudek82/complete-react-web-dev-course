class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleDecrementCounter = this.handleDecrementCounter.bind(this);
    this.handleIncrementCounter = this.handleIncrementCounter.bind(this);
    this.handleResetCounter = this.handleResetCounter.bind(this);

    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    const strCount = localStorage.getItem('count');
    const count = parseInt(strCount, 10);
    
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
      console.log(this.state.count);
    }
  }

  handleIncrementCounter() {
    this.setState(prevState => (
        { count: prevState.count + 1 }
      )
    );
  }

  handleDecrementCounter() {
    this.setState(prevState => (
        { count: prevState.count - 1 }
      )
    );
  }

  handleResetCounter() {
    this.setState(() => ({ count: 0 }));

    // Old syntax
    // this.setState({count: 0});
  }

  showState() {
    this.state.count;
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleDecrementCounter}>-</button>
        <button onClick={this.handleResetCounter}>Reset</button>
        <button onClick={this.handleIncrementCounter}>+</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// }


ReactDOM.render(<Counter />, root);
