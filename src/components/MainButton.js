import styled from "styled-components";

const Button = styled.button`
  background: var(--greenToCyanGradient);
  color: var(--white);
  font-weight: var(--fw-bold);
  border-radius: 2rem;
  padding: 0.8rem 1.7rem;
  border: none;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default function MainButton() {
  return <Button>Request Invite</Button>;
}
