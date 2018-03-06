import React from 'react';

const Option = (props) => {
  const optionKey = props.optionKey;
  const content = props.content;

  return (
    <div key={optionKey}>
      <button 
        onClick={(e) => {
            props.handleDeleteSingleOption(props.content)
          }
        }
      >
        x
      </button>

      {props.content}
    </div>
  );
}

export default Option;