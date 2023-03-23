import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 30px 70px;
  padding: 20px;
  border: 1px solid yellow;
  color: #bfc9ca;
`;
export const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeroHeaderLeft = styled.div`
  h3 {
    color: #bfc9ca;
    padding: 25px 0px;
    width: 500px;
    height: 80px;
    font-size: 25px;
    span {
      color: #00c2ff;
    }
  }
`;
export const HeroHeaderRight = styled.div`
  border: 3px solid #00c2ff;
  border-radius: 10px;
  padding: 25px 70px;
`;
export const HeroHeaderRightText = styled.p`
  margin: 0px 0px 20px 0px;
  align-items: center;
  font-size: 18px;
`;

export const HeroContent = styled.div`
  display: flex;
  margin: 30px 0px;
  flex-direction: row;
`;
export const HeroContentLeft = styled.div``;
export const HeroContentRight = styled.div`
  margin: 10px 0px 0px 155px;
  flex-direction: column;
`;
export const HeroText = styled.p`
  text-align: justify;
  width: 380px;
  font-size: 18px;
  line-height: 30px;
`;
export const HeroButton = styled.button`
  background: #00c2ff;
  border-radius: 25px;
  border-width: 0;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Arial, sans-serif;
  font-size: 1em;
  height: 35px;
  padding: 0 25px;
  transition: all 200ms;
  margin: 110px 0px 0px 110px;
  :hover {
    background-color: #81c8e8;
    transform: scale(1.05);
  }
`;
export const HeroFooter = styled.div``;
export const StarButton = styled.button`
  margin-left: 12px;
  font-size: 20px;
  color: gray;
  border: 0px;
  width: 10;
  height: 0;
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: orange;
  }
`;
