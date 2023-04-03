import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-top: 91px;
`;
export const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 177px;
`;
export const HeroHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 650px;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    color: #ffffff;
    span {
      color: #00c2ff;
    }
  }
`;
export const HeroHeaderRight = styled.div`
  width: 420px;
  border: 6px solid #00c2ff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 248px;
    height: 29px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin: 58px 86px 0px 86px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  margin-top: 45px;
  justify-content: space-between;
`;
export const HeroContentLeft = styled.div`
  width: 733px;
  height: 430px;
  img {
    border-radius: 40px;
    width: 100%;
    height: 100%;
  }
`;
export const HeroContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HText = styled.div`
  margin-bottom: 70px;
  width: 471px;
  height: 307px;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: justify;
    color: rgba(255, 255, 255, 0.75);
  }
`;
export const HeroButton = styled.button`
  width: 245px;
  height: 54px;
  background: #00c2ff;
  border-radius: 25px;
  border-width: 0;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  :hover {
    transform: scale(1.015);
  }
`;
export const HeroFooter = styled.div`
  margin-top: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterItems = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
`;
export const StarButton = styled.button`
  margin: 8px;
  background: #d9d9d9;
  border: 0px;
  height: 0;
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: orange;
  }
`;
