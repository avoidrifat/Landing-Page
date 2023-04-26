import styled from "styled-components";

export const WorksContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  height: 214px;
  margin-top: 104px;
  display: flex;
  position: relative;
`;

export const WorksLeft = styled.div`
  width: 517px;
  height: 100%;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #00c2ff;
    margin-bottom: 32px;
  }
  p {
    margin: 0%;
    padding: 0%;
    width: 389px;
    height: 102px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    text-align: justify;
    color: rgba(255, 255, 255, 0.8);
  }
`;
export const WorksRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 517px;
  height: 90%;

  border: 6px solid #00c2ff;
  border-radius: 25px;
  img {
    width: 80px;
    height: 80px;
    position: absolute;
    top: -35px;
    left: 755px;
    border-radius: 50%;
    border-color: aqua;
  }

  p {
    margin-top: 26px;
    margin-bottom: 17px;
    width: 259px;
    height: 78px;
    font-family: "Inter";
    text-align: justify;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #ffffff;
  }
`;
