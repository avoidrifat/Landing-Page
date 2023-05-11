import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 95px;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`;
export const FooterLeft = styled.div``;

export const LeftTop = styled.div`
  h3 {
    width: 497px;
    height: 117px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    #contact {
      color: #00c2ff;
      cursor: pointer;
      text-decoration: none;
    }
    span {
      color: #00c2ff;
      cursor: pointer;
    }
  }
  p {
    width: 191px;
    height: 24px;
    margin-top: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
`;
export const LeftBottom = styled.div`
  display: flex;
  margin-top: 16px;
  width: 387px;
  height: 46px;
  background: linear-gradient(266.62deg, #0085ff 25.14%, #00c2ff 96.23%);
  border-radius: 26px;
`;

export const EmailSystem = styled.div`
  display: flex;
  align-items: center;
  width: 387px;
  height: 46px;
  input {
    width: 233px;
    height: 38px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 26px;
    border: none;
    margin: 4px 32px 4px 4px;
    padding-left: 16px;
    ::placeholder {
      margin-left: 16px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
    }
  }

  button {
    height: 32px;
    background: #00c2ff;
    border-radius: 26px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    padding: 7px 27px 8px 28px;
    margin-right: 17px;
    cursor: pointer;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  #icons {
    margin-left: 25px;
    color: #ffffff;
    cursor: pointer;
  }
`;
export const BottomRight = styled.div`
  margin-left: 192px;
`;

export const FooterRight = styled.div`
  margin-left: 190px;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;
    color: #00c2ff;
    text-align: center;
  }
  button {
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    padding: 16px 96px;
    margin-top: 30px;
    background-color: transparent;
    cursor: pointer;
  }
  .LinkBtn{
    color: #ffffff;
    text-decoration: none;
  }
`;
