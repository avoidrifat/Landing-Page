import styled from "styled-components";
import Image from "next/image";

export const AboutWrapper = styled.div`
  //
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  display: flex;
`;
export const AboutLeft = styled.div`
  text-align: center;
  width: 712px;
  height: 396px;
  h3 {
    text-align: left;
    width: 459px;
    height: 117px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }
  p {
    text-align: left;
    width: 372px;
    height: 174px;
    margin-top: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.85);
  }

  button {
    //
    float: left;
    width: 287px;
    height: 65px;
    background: #00c2ff;
    //
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-top: 16px;
    padding: 18px 64px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 4px 10px rgba(0, 194, 255, 0.4);
    }
  }
`;
export const AboutRight = styled.div`
margin-right: 26px;
`;

export const ImageUp = styled(Image)`
  /* position: absolute; */
  box-shadow: 23px 26px 0 0 #00C2FFB2;
;
  width: 712px;
  height: 370px;
`;
