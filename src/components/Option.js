import React from 'react';

const Option = (props) => {
  const optionKey = props.optionKey;
  const content = props.content;

  return (
    <div key={optionKey} className="option">
      <p className="option__text">
        {props.index}. {props.content}
      </p>
      <button 
        className="btn btn--link"
        onClick={(e) => {
            props.handleDeleteSingleOption(props.content)
          }
        }
      >
        remove
      </button>
    </div>
  );
}

export default Option;