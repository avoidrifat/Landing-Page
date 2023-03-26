import styled from "styled-components";

export const ServiceContainer = styled.div`
  /* border: 1px solid #00C2FF; */
  padding: 20px;
;

  h1 {
    color: white;
    text-align: center;
    margin: 10px 0px 20px 0px;
  }
  hr{
    width: 420px;
    margin: 15px auto;
    color: #00C2FF;

  }
  h2{
    margin: 20px 0px;
    span{
      color: #00C2FF;
      font-size: 18px;
      margin: 10px 5px;
    }
  }
`;

export const ServiceItems = styled.div`
display: flex;
justify-content: center;
a {
    color: #1E1E1E;
    margin: 10px;
    text-decoration: none;
    padding: 5px 15px;
    border: 1px solid #00C2FF;
    border-radius: 20px;
  }
  .all{
      background-color: #00C2FF;
    }
    .ddu{
      margin-left: 40px;
    }


`;

export const UiUxImage = styled.div`
display: flex;
`
export const UiUxDescription = styled.div`
margin-left: 50px;
h3{
color: #00C2FF;
padding:  0 10px;
}
p{
  width: 350px;
padding: 10px;

}
`