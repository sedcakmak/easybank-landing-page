import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Li = styled.li`
  color: var(--grayishBlue);
  padding: 0 1rem;
  font-size: 16px;
  /* font-weight: var(--fw-bold); */
  display: flex;
  flex-direction: column;
  &:after {
    content: "";
    width: 100%;
    height: 0.2rem;
    background: var(--greenToCyanGradient);
    margin-top: 1.8rem;
    transform: scale(0);
    transition: transform 0.2s ease-out;
  }
  &:hover {
    color: var(--darkBlue);
    cursor: pointer;
  }
  &:hover {
    &::after {
      transform: scale(1);
    }
  }
`;

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

export default function MainNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Ul>
        <Li>Home</Li>
        <Li>About</Li>
        <Li>Contact</Li>
        <Li>Blog</Li>
        <Li>Careers</Li>
      </Ul>
      <WrapperDiv>
        <HamburgerDiv
          open={open}
          onClick={() => setOpen(!open)}
        >
          <Hamburger />
        </HamburgerDiv>
        <CloseDiv open={open}>
          <Close />
        </CloseDiv>
      </WrapperDiv>
    </>
  );
}
