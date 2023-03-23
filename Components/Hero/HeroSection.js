import Image from "next/image";
import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroContentLeft,
  HeroContentRight,
  HeroFooter,
  HeroHeader,
  HeroHeaderLeft,
  HeroHeaderRight,
  HeroHeaderRightText,
  HeroText,
} from "./HeroStyles";
import Star from "./Star";
import Hero from "/public/Image/Hero.jpg";

const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Hero Section Header */}
      <HeroHeader>
        <HeroHeaderLeft>
          <h3>
            Build Your Dream Mobile Application With Our Team of &nbsp;
            <span>Expert Developers</span>
          </h3>
        </HeroHeaderLeft>
        <HeroHeaderRight>
          <HeroHeaderRightText>1000+ User Reviews</HeroHeaderRightText>
          <Star />
        </HeroHeaderRight>
      </HeroHeader>

      {/* Hero Section Content */}
      <HeroContent>
          <Image src={Hero} alt="hero" width={690} height={400} style={{borderRadius:"15px"}} />
        <HeroContentRight>
          <HeroText>Welcome to our mobile app development company! We specialize in crafting high quality, user-friendly apps for iOS and Android devices. Our team of expert developers, designers, and project managers work closely with clients to understand their needs and create customized solutions that exceed expectations.</HeroText>
          <HeroButton>Start Building</HeroButton>
        </HeroContentRight>
      </HeroContent>
      <HeroFooter>Hero Footer</HeroFooter>
    </HeroContainer>
  );
};

export default HeroSection;
