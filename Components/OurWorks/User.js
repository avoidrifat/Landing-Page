import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Star from "../Hero/Star";
import User from "../../public/Image/user.jpg";

const UserReview = () => {
  return (
    <UserDiv>
      <Image src={User} alt="User" />

      <p>“They Never Fail To Impress Me”</p>
      <Star id="star"/>
    </UserDiv>
  );
};

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  width: 384px;
  height: 133px;
  border: 6px solid #00c2ff;
  border-radius: 25px;
  position: relative;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    position: absolute;
    top: -35px;
    left: -30px;
  }

  p {
    width: 162px;
    height: 48px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    margin: 23px 111px 8px 111px;
  }
  #star{
    margin-left: 100px;
 border: 3px solid #ffffff;
  }
`;
export default UserReview;
