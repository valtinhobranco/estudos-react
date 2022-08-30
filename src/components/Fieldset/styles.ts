import styled, { css } from "styled-components";

const Inputs = css`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 10px;
  outline: 0;
  transition: 0.3s;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Container = styled.fieldset`
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 0 20px;
  legend {
    padding: 0 10px;
  }

  input,
  textarea {
    ${Inputs}
  }
`;
