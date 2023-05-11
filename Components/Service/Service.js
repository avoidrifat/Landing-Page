import React from "react";
import { ServiceContainer, ServiceItems, HeaderHr, ServiceHeader } from "./ServiceStyles";
import ServicePage from "./ServicePage";

const ServiceSection = () => {
  return (
    <ServiceContainer>
      <ServiceHeader>
      <h1>Our Service</h1>
      </ServiceHeader>

      <HeaderHr />
      <ServiceItems>
        <a href="#" className="all">All</a>
        <a href="#" className="ddu" >Design</a>
        <a href="#" className="ddu" >Develop</a>
        <a href="#" className="ddu" >UI/UX</a>
      </ServiceItems>

        <ServicePage />

    </ServiceContainer>

  );
};

export default ServiceSection;
