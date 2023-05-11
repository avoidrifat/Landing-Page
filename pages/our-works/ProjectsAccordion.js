import React, { useState } from "react";
import Image from "next/image";
import Accordion, {
  AccordionHeader,
  AccordionLeft,
  AccordionRight,
  HrLine,
} from "../../Components/Service/Accordion";
import {
  ServiceDescription,
  ServiceTitle,
} from "../../Components/Service/ServiceStyles";
import uiux from "../../public/Image/uiux.jpg";
import { BsArrowRight } from "react-icons/bs";

const ProjectsPage = () => {
    const [rotationState, setRotationState] = useState({});

    const handleClick = (iconKey) => {
      setRotationState((prevState) => ({
        ...prevState,
        [iconKey]: !prevState[iconKey]
      }));
    };
  const services = (handleClick) => [
    {
      title: (
        <AccordionHeader>
          <AccordionLeft>
            <span>01</span>
          </AccordionLeft>
          <AccordionRight>
            <p id="projectName">Project Name</p>
            <BsArrowRight
              onClick={() => handleClick("icon1")}
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
              alt="uiux"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
                <h2>Projects Name</h2>
              <b id="description">Description</b>
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
        <AccordionHeader>
          <AccordionLeft>
            <span>02</span>
          </AccordionLeft>

          <AccordionRight>
            <p id="projectName">Project Name</p>
            <BsArrowRight
              onClick={()=>handleClick("icon2")}
              className={`icon ${rotationState["icon2"] ? "rotate" : ""}`}
            />
          </AccordionRight>
        </AccordionHeader>
      ),
      content: (
        <>
          <ServiceTitle>
            <Image
              src={uiux}
              alt="uiux"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
            <h2>Projects Name</h2>

              <b id="description">Description</b>
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
        <AccordionHeader>
          <AccordionLeft>
            <span>03</span>
          </AccordionLeft>

          <AccordionRight>
            <p id="projectName">Project Name</p>
            <BsArrowRight
              onClick={()=>handleClick("icon3")}
              className={`icon ${rotationState["icon3"] ? "rotate" : ""}`}
            />
          </AccordionRight>
        </AccordionHeader>
      ),
      content: (
        <>
          <ServiceTitle>
            <Image
              src={uiux}
              alt="uiux"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
              <h2>Projects Name</h2>

              <b id="description">Description</b>
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
        <AccordionHeader>
          <AccordionLeft>
            <span>04</span>
          </AccordionLeft>

          <AccordionRight>
            <p id="projectName">Project Name</p>
            <BsArrowRight
              onClick={()=>handleClick("icon4")}
              className={`icon ${rotationState["icon4"] ? "rotate" : ""}`}
            />
          </AccordionRight>
        </AccordionHeader>
      ),
      content: (
        <>
          <ServiceTitle>
            <Image
              src={uiux}
              alt="uiux"
              width={500}
              height={270}
              style={{ borderRadius: "50px" }}
            />
            <ServiceDescription>
            <h2>Projects Name</h2>
              <b id="description">Description</b>
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

export default ProjectsPage;
