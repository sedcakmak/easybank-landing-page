import MainButton from "./MainButton";
import mockups from "../images/image-mockups.png";
import styled from "styled-components";
import BgDesktop from "../images/bg-intro-desktop.svg";
import BgMobile from "../images/bg-intro-mobile.svg";

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  background-image: url(${BgDesktop});
  background-repeat: no-repeat;
  background-position: top -200px right -300px;
  position: relative;
  padding: 20rem;
  flex-grow: 1;
  @media (max-width: 800px) {
    background-image: url(${BgMobile});
    padding: 10rem 0 9rem 15rem;
    margin-top: 1rem;
    background-size: 100%;
    width: 100%;
    background-position: 0%;
    overflow: hidden;
  }
`;

const Overflow = styled.div`
  overflow: hidden;
  width: 90%;
  height: 830px;
  @media (max-width: 800px) {
    height: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 53%;
  justify-content: center;
  padding-left: 10rem;

  @media (max-width: 800px) {
    padding-top: 0;
    width: 100%;
    text-align: center;
    align-items: center;
    padding-bottom: 2rem;
    padding-left: 0;
  }
`;

const H1 = styled.h1`
  padding: 1rem 12rem 0.5rem;
  font-size: 40px !important;
  margin: -180px;
  @media (max-width: 800px) {
    padding: 1rem 3rem 0.5rem;
    margin: 0;
  }
`;
const P = styled.p`
  padding: 12rem 1rem 2rem 0.5rem;

  @media (max-width: 800px) {
    padding: 1rem 1rem 3rem;
  }
`;

const Mockup = styled.img`
  position: absolute;
  bottom: -14rem;
  left: 16rem;
  width: 85%;

  @media (max-width: 800px) {
    bottom: -1.5rem;
    right: 0;
    left: 0;
    margin: auto;
    width: 90%;
  }
`;

export default function Header() {
  return (
    <>
      <WrapperHeader>
        <TextWrapper>
          <H1>Next generation digital banking</H1>
          <P>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </P>
          <MainButton />
        </TextWrapper>
        <Overflow>
          <ImageWrapper>
            <Mockup
              src={mockups}
              alt="phone mockups"
            />
          </ImageWrapper>
        </Overflow>
      </WrapperHeader>
    </>
  );
}
