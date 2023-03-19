import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { useContext } from "react";
import { MobileContext } from "../App";
import ReactModal from "react-modal";
import NavMenu from "./NavMenu";

const WrapperDiv = styled.div`
  position: relative;
  display: flex;
`;
const HamburgerDiv = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;
const CloseDiv = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 800px) {
  }
`;

const Modal = styled(ReactModal)`
  position: absolute;
  inset: 71px 16px 0px;
  background: rgb(255, 255, 255);
  /* overflow: auto; */
  border-radius: 4px;
  outline: none;
  padding: 35px;
  height: 305px;
  width: 87%;
  font-size: 7px;
  margin: 0 auto;
`;

export default function MainNavBar() {
  const mobile = useContext(MobileContext);
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    //This function tell what should do when clicked open
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    setOpen(true);
  }
  function closeModal() {
    //This function tell what should do when clicked close
    setIsOpen(false);
  }

  return (
    <div>
      <NavMenu />
      {mobile && (
        <>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal} //what to do after modal open
            onRequestClose={closeModal}
            ariaHideApp={false}
            // style={{
            //   overlay: {
            //     background: "var(--grayishBlue)",
            //     opacity: 0.3,
            //   },
            // }}
          >
            <NavMenu />
          </Modal>
        </>
      )}
      <WrapperDiv>
        <HamburgerDiv
          open={open}
          onClick={openModal}
        >
          <Hamburger />
        </HamburgerDiv>
        <CloseDiv onClick={closeModal}>
          <Close />
        </CloseDiv>
      </WrapperDiv>
    </div>
  );
}
