import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>{title}</AccordionHeader>
      {isOpen && <AccordionContent>{content}</AccordionContent>}
    </AccordionContainer>
  );
};

export const AccordionContainer = styled.div`
  margin-bottom: 64px;
  margin-top: 92px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;


export const AccordionRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  p {
    font-family: "Inter",serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    text-decoration: none;
  }
  .icon {
    font-size: 32.57px;
    border: 2px solid #00c2ffb2;
    border-radius: 50%;
    color: rgba(217, 217, 217, 0.4);
  }
  #UiIcon{
    margin-left: 881px;
  }
  #AppIcon{
    margin-left: 825px;
  }
  #FrondEndIcon{
    margin-left: 732px;
  }
  #AndroidIcon{
    margin-left: 681px;
  }
`;

export const AccordionLeft = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: "Inter",serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #00c2ff;
  }
`;

export const AccordionContent = styled.div`

`;

export const HrLine = styled.hr`
  margin: 0 auto;
  border: 1px solid #00c2ff;

  :hover {
    color: #00C2FF;

  }
`;
export default Accordion;
