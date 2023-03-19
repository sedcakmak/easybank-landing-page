import Logo from "../components/Logo";
import styled from "styled-components";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import MainButton from "./MainButton";

const Li = styled.li`
  padding-right: 1rem;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  background-color: var(--darkBlue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 7rem 2rem 7rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Menu = styled.ul`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 104px;
  padding: 1rem 0;
  padding-right: 24rem;
  @media (max-width: 800px) {
    flex-wrap: nowrap;
    height: 200px;
    width: 300px;
    padding: 1rem 3rem 1rem 0;
    text-align: center;
  }
`;
const SocialMedia = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  @media (max-width: 800px) {
    margin-top: 2rem;
  }
`;
const Mli = styled.ul`
  color: white;
  margin-right: 6rem;
  font-size: 12px;
  line-height: 2;
  @media (max-width: 800px) {
    font-weight: var(--fw-light);
  }
  &:hover {
    cursor: pointer;
    color: var(--limeGreen);
  }
`;
const Double = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: var(--white);

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const CopyrightText = styled.p`
  font-size: 12px;
  width: 215px;
  margin-top: 2rem;
  padding-right: 2rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Double>
        <Logo />
        <SocialMedia>
          <Li>
            <Facebook className="social-media" />
          </Li>
          <Li>
            <Youtube className="social-media" />
          </Li>
          <Li>
            <Twitter className="social-media" />
          </Li>
          <Li>
            <Pinterest className="social-media" />
          </Li>
          <Li>
            <Instagram className="social-media" />
          </Li>
        </SocialMedia>
      </Double>
      <div>
        <Menu>
          <Mli>About Us</Mli>
          <Mli>Contact</Mli>
          <Mli>Blog</Mli>
          <Mli>Careers</Mli>
          <Mli>Support</Mli>
          <Mli>Privacy Policy</Mli>
        </Menu>
      </div>
      <Double>
        <MainButton />
        <CopyrightText> &copy; Easybank. All Rights Reserved </CopyrightText>
      </Double>
    </FooterWrapper>
  );
}
