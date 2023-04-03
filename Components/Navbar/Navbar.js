import React from "react";
import { NavContainer, NavContent, NavLogo } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo>
        <h1>BluLab</h1>
      </NavLogo>
      <NavContent>
        <a href="#" id="home" >Home</a>
        <a href="#" >Contact</a>
        <a href="#" >About Us</a>
        <a href="#" >Hire Us</a>

      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
