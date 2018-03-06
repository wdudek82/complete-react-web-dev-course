import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    color: 'purple',
    background: '#999',
    textAlign: 'center',
    margin: '0 auto',
    width: '200px',
    height: '150px',
    borderRadius: '0',
  }
}

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Title"
    // onAfterOpen={}
    onRequestClose={props.onRequestClose}
    style={customStyles}
  >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.onRequestClose}>Ok</button>
  </Modal>
);

export default OptionModal;