import React from "react";
import {BsArrowRight} from "react-icons/bs";



const services = [

    {
        title: (
            <AccordionHeader >
                <AccordionLeft>
                    <span>01</span>
                </AccordionLeft>

                <AccordionRight className="icon-container" onClick={handleClick}>
                    <p>Project Name</p>

                    <BsArrowRight className={`icon ${rotate ? "rotate" : ""}`}/>
                </AccordionRight>
            </AccordionHeader>
        ),
        content:(<>
        {/* code */}
        </>)
    },

];

const ProjectsPage = () => {
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

export default ProjectsPage;
