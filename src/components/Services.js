import styled from "styled-components";
import { ReactComponent as Api } from "../images/icon-api.svg";
import { ReactComponent as Onboarding } from "../images/icon-onboarding.svg";
import { ReactComponent as Budgeting } from "../images/icon-budgeting.svg";
import { ReactComponent as Online } from "../images/icon-online.svg";

export default function Services() {
  return (
    <Ul>
      <Li>
        <Online />
        <H3>Online Banking</H3>
        <P>
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </P>
      </Li>
      <Li>
        <Budgeting />
        <H3>Simple Budgeting</H3>
        <P>
          See exactly where your money goes each month. Receive notifications
          when you're close to hitting your limits.
        </P>
      </Li>
      <Li>
        <Onboarding />
        <H3>Fast Onboarding</H3>
        <P>
          We don't do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </P>
      </Li>
      <Li>
        <Api />
        <H3>Open API</H3>
        <P>
          Manage your savings, investments, pension, and much more from one
          account. Tracking money has never been easier.
        </P>
      </Li>
    </Ul>
  );
}
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 6rem 10rem;
  @media (max-width: 800px) {
    padding: 1rem;
    text-align: center;
    flex-direction: column;
  }
`;
const Li = styled.li`
  margin: 0 2.3rem 0 0;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const H3 = styled.h3`
  padding: 2rem 0;
`;

const P = styled.p`
  font-size: 16px;
  @media (max-width: 800px) {
    margin-bottom: 2rem;
    padding-left: 1rem;
  }
`;
