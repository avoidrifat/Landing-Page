import styled from "styled-components";
import Image from "next/image";
export const HireUsContainer = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
    span{
      color: #00c2ff;
      cursor: pointer;
    }
    .LinkBtn{
      color: #00c2ff;
    text-decoration: none;
  }
  }
  p {
    width: 463px;
    /* height: 104px; */
    margin-top: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: rgba(255, 255, 255, 0.85);
  }
`;
export const HireUsImages = styled.div`
margin-top: 40px;
`;
export const ImageOne = styled(Image)`
width: 412px;
height: 198px;
border-radius: 20px;
cursor: pointer;
`;
export const ImageTwo = styled(Image)`
margin-left: 40px;
width: 413px;
height: 198px;
border-radius: 20px;
cursor: pointer;
`;
export const ImageThree = styled(Image)`
margin-left: 39px;
width: 412px;
height: 198px;
border-radius: 20px;
cursor: pointer;
`;