import styled from "styled-components";

export const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 0 !important;
  margin: 0 auto;

  a {
    width: 48%;
    button {
      width: 100%;
      margin: 5px 0;

      &:nth-child(odd) {
        margin: 5px 5px 5px 0;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  border-bottom: 0 !important;
  h1 {
    margin-bottom: 30px;
  }
`;
