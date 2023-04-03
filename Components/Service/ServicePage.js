import React from "react";
import Image from "next/image";
import Accordion, {
    AccordionHeader,
    AccordionLeft,
    AccordionRight,
    HrLine,
} from "./Accordion";
import {ServiceDescription, ServiceTitle} from "./ServiceStyles";
import uiux from "../../public/Image/uiux.jpg";
import {BsArrowRight} from "react-icons/bs";

const services = [
    {
        title: (
            <AccordionHeader>
                <AccordionLeft>
                    <span>01</span>
                </AccordionLeft>

                <AccordionRight>
                    <p>UI / UX Design</p>
                    <BsArrowRight className="icon" id="UiIcon"/>
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
                        style={{borderRadius: "50px"}}
                    />
                    <ServiceDescription>
                        <b id="description">Description</b>
                        <p>
                            Design Premium Quality Application UI And Build Your Dream Mobile
                            Application
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
                    <p>App Development</p>
                    <BsArrowRight className="icon" id="AppIcon"/>
                </AccordionRight>
            </AccordionHeader>
        ),
        content: (
            <>
                <ServiceTitle>
                    <Image
                        src={uiux} alt="uiux" width={500}
                        height={270}
                        style={{borderRadius: "50px"}}
                    />
                    <ServiceDescription>
                        <b id="description">Description</b>
                        <p>
                            Create custom mobile applications with high-quality UI/UX design to meet your business
                            needs.
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
                    <p>Front-End Development</p>
                    <BsArrowRight className="icon" id="FrondEndIcon"/>
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
                        style={{borderRadius: "50px"}}
                    />
                    <ServiceDescription>
                        <b id="description">Description</b>
                        <p>
                            Build modern, responsive web applications with seamless user experiences and stunning visual
                            designs.
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
                    <p>Android / IOS Development</p>
                    <BsArrowRight className="icon" id="AndroidIcon"/>
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
                        style={{borderRadius: "50px"}}
                    />
                    <ServiceDescription>
                        <b id="description">Description</b>
                        <p>
                            Develop native mobile applications for both Android and iOS platforms, with exceptional
                            UI/UX and performance.
                        </p>
                    </ServiceDescription>
                </ServiceTitle>
            </>
        ),
    },

];

const ServicePage = () => {
    return (
        <>
            {services.map((services, index) => (
                <>
                    <Accordion
                        key={index}
                        title={services.title}
                        content={services.content}
                    />
                    <HrLine/>
                </>
            ))}
        </>
    );
};

export default ServicePage;
