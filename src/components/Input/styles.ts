import styled from "styled-components";

export const Container = styled.input`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 10px;
  &:-webkit-outer-spin-button,
  &:-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
