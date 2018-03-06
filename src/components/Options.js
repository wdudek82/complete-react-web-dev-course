import React from 'react';
import Option from './Option';


const Options = (props) => {
  let options = props.options.map(
    (option, ind) => {
      return (
        <Option
          key={`option-${ind}`}
          optionKey={`option-${ind}`}
          content={option}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
        />);
    });

  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
      >Remove All</button>
      <ol>
        {options.length ? options : <p>Please add option to get started!</p>}
      </ol>
    </div>
  );
}

export default Options;