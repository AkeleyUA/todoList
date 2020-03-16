import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from '@material-ui/core';
import { cyan, grey, red } from '@material-ui/core/colors';

import { modalControlerAction } from '../reducers/UI/action';

const MyModal = ({ modalControler, modalIsOpen }) => {
  const closeModal = () => {
    modalControler(false);
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modalIsOpen}
      onClose={closeModal}
    >
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '30%',
        width: 600,
        height: 100,
        background: grey[50],
        border: '2px solid #000',
        padding: 20,
      }}
      >
        <h2 id="simple-modal-title" style={{ color: red[500] }}>Empty task name</h2>
        <p id="simple-modal-description">
          Your are tring close your task without name, enter the title and try again!
        </p>
        <Button
          style={{
            color: cyan[500],
            position: 'absolute',
            bottom: 15,
            right: 15,
          }}
          onClick={closeModal}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

MyModal.propTypes = {
  modalControler: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  modalIsOpen: state.UI.modalIsOpen,
});

const mapDispathToProps = (dispatch) => ({
  modalControler: bindActionCreators(modalControlerAction, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(MyModal);
