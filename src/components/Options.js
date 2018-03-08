import React from 'react';
import Option from './Option';


const Options = (props) => {
  let options = props.options.map(
    (option, ind) => {
      return (
        <Option
          key={`option-${ind}`}
          optionKey={`option-${ind}`}
          index={ind+1}
          content={option}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
        />);
    });

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your options</h3>
        <button
          className='btn btn--link'
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      <ol className="widget__list">
        {options.length ? options : <p className="widget__msg">Please add option to get started!</p>}
      </ol>
    </div>
  );
}

export default Options;