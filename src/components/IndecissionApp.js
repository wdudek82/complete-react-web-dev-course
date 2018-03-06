import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  componentDidMount() {
    const json = localStorage.getItem('options');

    try {
      const options = JSON.parse(json);

      if (json) {
        this.setState(() => ({ options }));
      }

    } catch (err) {
      console.log(err);
    }

  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  componentWillUnmount() {
    console.log('component will unmount!');
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => (
      { options: prevState.options.concat(option) }
    ));
  };

  handleDeleteSingleOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const pickIndex = Math.floor(
      Math.random() * this.state.options.length
    );
    const selectedOption = this.state.options[pickIndex];
    this.setState(() => ({ selectedOption }));
  };

  closeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          onRequestClose={this.closeModal}
        />
      </div>
    )
  };
}

IndecisionApp.defaultProps = {
  options: [
    'coffee',
    'tea',
    'milk'
  ]
};

export default IndecisionApp;