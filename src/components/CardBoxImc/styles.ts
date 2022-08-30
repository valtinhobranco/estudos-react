import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;

  h3 {
    margin: 10px;
  }
  h6 {
    font-size: 14px;
  }
  p {
    svg {
      font-size: 40px;
    }
  }
`;
