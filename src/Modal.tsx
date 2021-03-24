import React, { useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import styled from "@emotion/styled";
import "./modal-style.css";

const Container = styled.div`
  position: absolute;
  border-radius: 7px;
  max-width: 568px;
  min-height: 300px;
  max-height: 614px;
  background-color: whitesmoke;
  z-index: 2020;
  transform: translate(-50%, -55%);
  -webkit-box-shadow: 3px 5px 15px 1px #e1e1e1;
  box-shadow: 3px 5px 15px 1px #e1e1e1;

  padding-left: 20px;
  padding-right: 20px;
`;

interface IProps {
  // children whill be here
  modalHeader?: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  modalWillClosed: boolean;
}

const ModalWrapper: React.FC<IProps> = ({ modalWillClosed, onClose }) => {
  return (
    <Container className={`${modalWillClosed ? "grow-down" : "grow-up"}`}>
      <div className="modal-header">
        <IconButton
          className="modal-close-button"
          color="inherit"
          onClick={onClose}
        >
          <CloseRounded className="modal-close" />
        </IconButton>
      </div>
      <h1>Modal Contents will be here</h1>
      <h2>lorem ipsum dolor lorem imsum</h2>
    </Container>
  );
};

export default ModalWrapper;
