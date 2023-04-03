import Image from "next/image";
import React from "react";
import {
  FooterItems,
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroContentLeft,
  HeroContentRight,
  HeroFooter,
  HeroHeader,
  HeroHeaderLeft,
  HeroHeaderRight,
  HText,
} from "./HeroStyles";
import Star from "./Star";
import Hero from "/public/Image/Hero.jpg";
import { TiTick } from "react-icons/ti";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        <HeroHeaderLeft>
          <h3>
            Build Your Dream Mobile Application <br /> With Our Team of
            <span>&#x202F;&#x202F;Expert Developers</span>
          </h3>
        </HeroHeaderLeft>
        <HeroHeaderRight>
          <p>1000+ User Reviews</p>
          <Star />
        </HeroHeaderRight>
      </HeroHeader>

      <HeroContent>
        <HeroContentLeft>
          <Image
            src={Hero}
            alt="hero"
          />
        </HeroContentLeft>

        <HeroContentRight>
          <HText>
            <p>
              Welcome to our mobile app development company! We specialize in
              crafting high quality, user-friendly apps for iOS and Android
              devices. Our team of expert developers, designers, and project
              managers work closely with clients to understand their needs and
              create customized solutions that exceed expectations.
            </p>
          </HText>
          <HeroButton>Start Building</HeroButton>
        </HeroContentRight>
      </HeroContent>

      <HeroFooter>
        <FooterItems>
        <TiTick size={38.4} fill="#00C2FF" />
          <a href="#">Android + IOS</a>
        </FooterItems>
        <FooterItems>
          <TiTick size={38.4} fill="#00C2FF" />
          <a href="#">App Development</a>
        </FooterItems>
        <FooterItems>
          <TiTick size={38.4} fill="#00C2FF" />
          <a href="#">App Design</a>
        </FooterItems>
        <FooterItems>
          <TiTick size={38.4} fill="#00C2FF" />
          <a href="#">UI / UX Design</a>
        </FooterItems>
      </HeroFooter>
    </HeroContainer>
  );
};

export default HeroSection;
