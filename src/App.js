import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Logo from "./components/Logo";
import MainButton from "./components/MainButton";
import MainNavBar from "./components/MainNavBar";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const [mobile, setMobile] = useState(window.innerWidth <= 800);

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: ${mobile ? "space-between" : "space-around"};
    align-items: baseline;
    padding: 2rem 1rem;
  `;

  return (
    <>
      <GlobalStyle />
      <nav>
        <Navbar>
          <Logo />
          <MainNavBar />
          <MainButton />
          {mobile && <MobileNavBar />}
        </Navbar>
      </nav>
      <header></header>
    </>
  );
}

export default App;
