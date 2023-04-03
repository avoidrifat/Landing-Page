import styled from "styled-components";

export const NavContainer = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
`;
export const NavLogo = styled.div`
  width: 246px;
  height: 58px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
  }
`;

export const NavContent = styled.div`
  width: 650px;
  height: 54px;
  border: 3px solid #00c2ff;
  border-radius: 30px;
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  a {
    padding: 14px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);

  }
  #home {
      font-weight: 800;
      color: #00c2ff;
    }
`;
