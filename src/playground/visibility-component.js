class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibleToggle = this.handleVisibleToggle.bind(this);

    this.state = {
      isVisible: true
    };
  }

  handleVisibleToggle() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible }
      }
    );
  }

  render() {
    const msg = this.state.isVisible && "Toggle me!";

    return (
      <div>
        <h1>Hello!</h1>
        <button onClick={this.handleVisibleToggle}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
        <h2>{msg}</h2>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, root);
