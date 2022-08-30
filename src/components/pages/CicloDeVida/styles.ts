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

export const Container = styled.div`
  input,
  textarea {
    ${Inputs}
  }

  textarea {
    padding: 10px 10px 60px;
  }

  fieldset {
    margin: 50px 0;
    border: 1px solid ${(props) => props.theme.colors.text};
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    legend {
      padding: 0 10px;
    }
  }
`;
