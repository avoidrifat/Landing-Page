import React from "react";
import { NavContainer, NavContent, NavLogo, StyledLink } from "./NavbarStyles";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <NavLogo>
        <h1>BLULAB</h1>
      </NavLogo>
      <NavContent>
        <StyledLink href="/" id="home" isActive={router.pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink
          href="/contact"
          id="contact"
          isActive={router.pathname === "/contact"}
        >
          Contact
        </StyledLink>
        <StyledLink
          href="/about"
          id="about"
          isActive={router.pathname === "/about"}
        >
          About Us
        </StyledLink>
        <StyledLink
          href="/our-works"
          id="ourworks"
          isActive={router.pathname === "/our-works"}
        >
          Our Works
        </StyledLink>
        <StyledLink
          href="/hire-us"
          id="hireus"
          isActive={router.pathname === "/hire-us"}
        >
          Hire Us
        </StyledLink>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
