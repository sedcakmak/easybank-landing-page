import { useState, useEffect } from "react";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";
import MainNavBar from "./MainNavBar";

export default function MobileNavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  useEffect(() => {
    console.log("click working");
  }, [isNavBarOpen]);
  return (
    <>
      <Hamburger onClick={() => setIsNavBarOpen(true)} />
      {isNavBarOpen && <Close />}
    </>

    // <>
    //   {isNavBarOpen ? (
    //     <Hamburger onClick={openMenu} />
    //   ) : (
    //     <Close onClick={closeMenu} />
    //   )}
    // </>
  );
}
