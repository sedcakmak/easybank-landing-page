import { useContext } from "react";
import { MobileContext } from "../App";
import styled from "styled-components";

const TextWrapper = styled.div`
  padding: 0 10rem;

  @media (max-width: 800px) {
    padding: 1rem;
    text-align: center;
  }
`;

const H2 = styled.h1`
  padding: 0 0 1.5rem;

  @media (max-width: 800px) {
    padding: 5rem 2rem 2rem;
  }
`;
export default function MainText() {
  const mobile = useContext(MobileContext);
  return (
    <TextWrapper>
      <H2>Why choose Easybank?</H2>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub.{!mobile && <br />} Control your finances like never before.
      </p>
    </TextWrapper>
  );
}
