import styled from "styled-components";

export default function NavMenu() {
  return (
    <Ul>
      <Li>Home</Li>
      <Li>About</Li>
      <Li>Contact</Li>
      <Li>Blog</Li>
      <Li>Careers</Li>
    </Ul>
  );
}

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Li = styled.li`
  color: var(--grayishBlue);
  padding: 0 1rem;
  font-size: 16px;
  /* font-weight: var(--fw-bold); */
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    color: black;
    text-align: center;
  }
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
