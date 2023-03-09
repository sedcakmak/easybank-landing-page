import styled from "styled-components";

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

export default function MainNavBar() {
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
