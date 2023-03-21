import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroFooter,
  HeroHeader,
  HeroHeaderLeft,
  HeroHeaderRight,
  HeroHeaderRightText,
} from "./HeroStyles";
import Star from "./Star";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        <HeroHeaderLeft>
          <h2>
            Build Your Dream Mobile Application With Our Team of Expert
            Developers
          </h2>
        </HeroHeaderLeft>
        <HeroHeaderRight>
          <HeroHeaderRightText>1000+ User Reviews</HeroHeaderRightText>
          <Star />
        </HeroHeaderRight>
      </HeroHeader>
      <HeroContent>Content</HeroContent>
      <HeroFooter>Footer</HeroFooter>
    </HeroContainer>
  );
};

export default HeroSection;
