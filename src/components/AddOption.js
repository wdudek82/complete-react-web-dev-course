import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }))

    this.removeError();

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  removeError() {
    setTimeout(() => {
      this.setState(() => ({ error: undefined }))
    }, 1000);
  };

  render() {
    const errorStyle = {
      padding: '10px',
      background: '#ffcece',
      border: '1px solid red',
      borderRadius: '5px',
      width: '200px',
      textAlign: 'center'
    }
    const errorTag = this.state.error && <p style={errorStyle}>{this.state.error}</p>;

    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="new option" />
          <button class="button">Add Option</button>
        </form>
        {errorTag}
      </div>
    )
  };
}

export default AddOption;