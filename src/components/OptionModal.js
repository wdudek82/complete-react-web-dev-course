import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Title"
    // onAfterOpen={}
    closeTimeoutMS={200}
    onRequestClose={props.onRequestClose}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button
      className="btn"
      onClick={props.onRequestClose}
    >
      Ok
    </button>
  </Modal>
);

export default OptionModal;