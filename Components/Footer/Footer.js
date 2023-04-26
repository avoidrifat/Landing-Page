import React from "react";
import {
  FooterRight,
  FooterLeft,
  FooterWrapper,
  LeftTop,
  LeftBottom,
  EmailSystem,
  IconDiv,
} from "./FooterStyle";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLeft>
        <LeftTop>
          <h3>
            DO YOU HAVE ANY <span>PROJECT</span> <br /> IN MIND? DON’T WAIT ANY
            LONGER! <Link href="/contact" id="contact">CONTACT US</Link> TODAY <span>.</span>
          </h3>
          <p>Join Our Newsletter</p>
        </LeftTop>

        <LeftBottom>
          <EmailSystem>
            <input placeholder="Email Address" />
            <button>Submit</button>
          </EmailSystem>
          <IconDiv>
            <BsFacebook id="icons" size={30}/>
            <BsInstagram id="icons" size={30}/>
            <BsPinterest id="icons" size={30}/>
            <AiFillTwitterCircle id="icons" size={30}/>
            <BsLinkedin id="icons" size={30}/>
          </IconDiv>
        </LeftBottom>
      </FooterLeft>

      <FooterRight>
        <h2>BLULAB</h2>
        <button>Contact</button> <br />
        <button>Discuss</button>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
