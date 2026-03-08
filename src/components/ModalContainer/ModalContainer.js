import React from "react";

import Modal from "@mui/material/Modal";

import "./ModalContainer.scss";

export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children } = props;

  return (
    <Modal
      open={isOpenModal}
      onClose={closeModal}
      className="modal-container"
      closeAfterTransition
    >
      {children}
    </Modal>
  );
}
