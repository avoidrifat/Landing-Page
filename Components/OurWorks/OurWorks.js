import React from "react";
import { WorksContainer, WorksLeft, WorksRight } from "./WorkStyles";
import Star from "../Hero/Star";
import Image from "next/image";
import User from "../../public/Image/user.jpg"
const OurWorks = () => {
  return (
    <WorksContainer>

      <WorksLeft>
        <h2>OUR WORKS</h2>
        <p>
          We Build Apps For All Clients From Established Business to Startups, We
          Build Them All
        </p>
      </WorksLeft>
      <WorksRight>
      <Image src={User} alt="User"  />

        <p>“They Never Fail To Impress Me”</p>
        <Star />

      </WorksRight>
    </WorksContainer>
  );
};

export default OurWorks;
