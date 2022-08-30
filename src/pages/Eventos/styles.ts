import styled from "styled-components";

export const Container = styled.section`
  width: calc(min(1200px, 100%) - 20px);
  margin: 0 auto;
  padding: 0 0 100px 0;
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  input {
    margin: 10px 5px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 10px;
    &:-webkit-outer-spin-button,
    &:-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
