import React, { useState } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";

import "./SendTweet.scss";

export default function SendTweet() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer
        isOpenModal={isOpenModal}
        closeModal={closeModal}
      >
        <FormSendTweet />
      </ModalContainer>
    </div>
  );
}
