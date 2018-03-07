import React from 'react';

const Option = (props) => {
  const optionKey = props.optionKey;
  const content = props.content;

  return (
    <div key={optionKey}>
      {props.content}
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