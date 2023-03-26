import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  padding: 20px;
  justify-content: space-between;
`;
export const NavLogo = styled.div`
  width: 250px;
  height: 50px;
  h1{
    color: #BFC9CA;
  }
`;
export const NavContent = styled.div`
  display: flex;
  width: 550px;
  height: 50px;
  border: 1px solid #00c2ff;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  a {
    color: #A6ACAF;
    margin: 0 10px;
    text-decoration: none;
    padding: 0px 20px;
  }
`;
