import React from "react";
import { ServiceContainer, UiUxImage, ServiceItems, UiUxDescription } from "./ServiceStyles";
import Image from "next/image";
import uiux from "../../public/Image/uiux.jpg"

const ServiceSection = () => {
  return (
    <ServiceContainer>
      <h1>Our Service</h1>
      <hr />
      <ServiceItems>
        <a href="#" className="all">All</a>
        <a href="#" className="ddu" >Design</a>
        <a href="#" className="ddu" >Develop</a>
        <a href="#" className="ddu" >UI/UX</a>
      </ServiceItems>
      <h2><span>01</span>UI / UX Design</h2>
      <UiUxImage>
      <Image
          src={uiux}
          alt="uiux"
          width={500}
          height={270}
          style={{ borderRadius: "15px" }}
        />
        <UiUxDescription>
          <h3>Description</h3>
          <p>Design Premium Quality Application UI And Build Your Dream Mobile Application</p>
        </UiUxDescription>
        </UiUxImage>
    </ServiceContainer>

  );
};

export default ServiceSection;
