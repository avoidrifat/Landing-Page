import React, { useState } from "react";
import Image from "next/image";
import Accordion, {
  AccordionHeader,
  AccordionLeft,
  AccordionRight,
  HrLine,
} from "./Accordion";
import { ServiceDescription, ServiceTitle } from "./ServiceStyles";
import uiux from "../../public/Image/uiux.jpg";
import app from "../../public/Image/app.jpg";
import frontend from "../../public/Image/frontend.jpg";
import ios from "../../public/Image/ios.jpg";
import { BsArrowRight } from "react-icons/bs";

const ServicePage = () => {
  const [rotationState, setRotationState] = useState({});

  const handleClick = (iconKey) => {
    setRotationState((prevState) => ({
      ...prevState,
      [iconKey]: !prevState[iconKey],
    }));
  };
  const services = (handleClick) => [
    {
      title: (
        <AccordionHeader onClick={() => handleClick("icon1")}>
          <AccordionLeft>
            <span>01</span>
          </AccordionLeft>
          <AccordionRight>
            <p>UI / UX Design</p>
            <BsArrowRight
              id="UiIcon"
              className={`icon ${rotationState["icon1"] ? "rotate" : ""}`}
            />
          </AccordionRight>
        </AccordionHeader>
      ),
      content: (
        <>
          <ServiceTitle>
            <Image
              src={uiux}
              alt="app"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
              {/* <b id="description">Description</b> */}
              <p>
                Design Premium Quality Application UI And Build Your Dream
                Mobile Application
              </p>
            </ServiceDescription>
          </ServiceTitle>
        </>
      ),
    },
    {
      title: (
        <AccordionHeader onClick={() => handleClick("icon2")}>
          <AccordionLeft>
            <span>02</span>
          </AccordionLeft>

          <AccordionRight>
            <p>App Development</p>
            <BsArrowRight
              id="AppIcon"
              className={`icon ${rotationState["icon2"] ? "rotate" : ""}`}
            />
          </AccordionRight>
        </AccordionHeader>
      ),
      content: (
        <>
          <ServiceTitle>
            <Image
              src={app}
              alt="uiux"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
              {/* <b id="description">Description</b> */}
              <p>
                Create custom mobile applications with high-quality UI/UX design
                to meet your business needs.
              </p>
            </ServiceDescription>
          </ServiceTitle>
        </>
      ),
    },
    {
      title: (
        <AccordionHeader onClick={() => handleClick("icon3")}>
          <AccordionLeft>
            <span>03</span>
          </AccordionLeft>

          <AccordionRight>
            <p>Front-End Development</p>
            <BsArrowRight
              id="FrondEndIcon"
              className={`icon ${rotationState["icon3"] ? "rotate" : ""}`}
            />
          </AccordionRight>
        </AccordionHeader>
      ),
      content: (
        <>
          <ServiceTitle>
            <Image
              src={frontend}
              alt="frontend"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
              {/* <b id="description">Description</b> */}
              <p>
                Build modern, responsive web applications with seamless user
                experiences and stunning visual designs.
              </p>
            </ServiceDescription>
          </ServiceTitle>
        </>
      ),
    },
    {
      title: (
        <AccordionHeader onClick={() => handleClick("icon4")}>
          <AccordionLeft>
            <span>04</span>
          </AccordionLeft>

          <AccordionRight>
            <p>Android / IOS Development</p>
            <BsArrowRight
              id="AndroidIcon"
              className={`icon ${rotationState["icon4"] ? "rotate" : ""}`}
            />
          </AccordionRight>
        </AccordionHeader>
      ),
      content: (
        <>
          <ServiceTitle>
            <Image
              src={ios}
              alt="uiux"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
              {/* <b id="description">Description</b> */}
              <p>
                Develop native mobile applications for both Android and iOS
                platforms, with exceptional UI/UX and performance.
              </p>
            </ServiceDescription>
          </ServiceTitle>
        </>
      ),
    },
  ];

  return (
    <>
      {services(handleClick).map((services, index) => (
        <>
          <Accordion
            key={index}
            title={services.title}
            content={services.content}
          />
          <HrLine />
        </>
      ))}
    </>
  );
};
export default ServicePage;
