import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2020;

  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const useModal = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalWillClosed, setModalWillClosed] = useState<boolean>(false);

  const openModal = () => {
    setModalWillClosed(false);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalWillClosed(true);
    setTimeout(() => {
      return setModalOpened(false);
    }, 500);
  };

  interface IProps {
    children: React.ReactNode;
  }

  const ModalPortal: React.FC<IProps> = ({ children }) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      if (document && document.querySelector("#root-modal")) {
        ref.current = document.querySelector("#root-modal");
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <Container tabIndex={-1}>{children}</Container>,
        ref.current
      );
    }

    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
    modalWillClosed
  };
};

export default useModal;
