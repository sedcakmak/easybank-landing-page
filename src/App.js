import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Logo from "./components/Logo";
import MainButton from "./components/MainButton";
import MainNavBar from "./components/MainNavBar";
import Header from "./components/Header";

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0 11rem 0 1rem;
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

function App() {
  //   const [mobile, setMobile] = useState(window.innerWidth <= 800);

  //   const handleWindowSizeChange = () => {
  //     setMobile(window.innerWidth <= 800);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("resize", handleWindowSizeChange);
  //     return () => {
  //       window.removeEventListener("resize", handleWindowSizeChange);
  //     };
  //   }, []);

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <nav>
          <Navbar>
            <Logo />
            <MainNavBar />
            <MainButton />
            {/* {mobile && <MobileNavBar />} */}
          </Navbar>
        </nav>
        <header>
          <Header />
        </header>
      </MainWrapper>
    </>
  );
}

export default App;
