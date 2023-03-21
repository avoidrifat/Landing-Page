import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 30px 70px;
  padding: 20px;
  border: 1px solid yellow;
  color: #BFC9CA;
`
export const HeroHeader = styled.div`
display: flex;
/* justify-content:end; */
justify-content: space-between;
/* align-items: center; */
h2{
  width: 500px;
  height: 80px;
}
`
export const HeroHeaderLeft = styled.div`
`
export const HeroHeaderRight = styled.div`
/* width: 420px; */
`
export const HeroHeaderRightText = styled.p`
  margin-right: 10px;
`;

export const HeroContent = styled.div`

`
export const HeroFooter = styled.div`

`
export const StarButton = styled.button`
  font-size: 20px;
  color: gray;
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: orange;
  }
`;
