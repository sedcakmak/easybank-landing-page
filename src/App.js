import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Logo from "./components/Logo";
import MainButton from "./components/MainButton";
import MainNavBar from "./components/MainNavBar";
import Header from "./components/Header";
import MainText from "./components/MainText";
import Services from "./components/Services";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export const MobileContext = createContext();

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0 11rem 0 6rem;
  justify-content: space-around;
  @media (max-width: 800px) {
    justify-content: space-between;
    padding: 0 3rem 0 1rem;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const TextSection = styled.div`
  background-color: var(--lightGrayishBlue);
`;

function App() {
  const [mobile, setMobile] = useState(window.innerWidth <= 800);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ mobile, modalIsOpen, open }}>
      <GlobalStyle />
      <MainWrapper>
        <nav>
          <Navbar>
            <Logo />
            <MainNavBar mobile={mobile} />
            {!mobile && <MainButton />}
          </Navbar>
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <TextSection>
            <MainText mobile={mobile} />
            <Services />
          </TextSection>
          <section>
            <Articles mobile={mobile} />
          </section>
        </main>
      </MainWrapper>
      <footer>
        <Footer />
      </footer>
    </MobileContext.Provider>
  );
}

export default App;
