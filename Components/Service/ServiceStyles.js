import styled from "styled-components";

export const ServiceContainer = styled.div`
  /* background-color: #79797b; */
  /* background-color: #80acc9; */
  /* background-color: #90e0ef; */

  margin-top: 104px;
`;

export const ServiceHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    width: 370px;
    height: 77px;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    color: #ffffff;
  }
`;

export const HeaderHr = styled.hr`
  width: 650px;
  margin: 24px auto;
  border: 1px solid #00c2ff;
  :hover {
    color: #00c2ff;
  }
`;

export const ServiceItems = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: center;
  a {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 25px;
    padding: 7px 30px;
    margin: 0 38px;
  }
  .all {
    background-color: #00c2ff;
    color: #ffffff;
  }
  .ddu {
    /* margin-left: 40px; */
  }
`;

export const ServiceTitle = styled.div`
  display: flex;
  margin-top: 67px;
  margin-bottom: 64px;
`;
export const ServiceDescription = styled.div`
  margin-left: 64px;
 #description{
    width: 176px;
    height: 39px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #00c2ff;
  }
  p {
    margin-top: 16px;
    width: 542px;
    height: 58px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    text-align: justify;
  }
`;
export const DevService = styled.div`
  margin-top: 40px;
`;
