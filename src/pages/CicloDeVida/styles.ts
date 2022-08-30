import styled, { css } from "styled-components";
import colors from "../../styles/colors";

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
  width: calc(min(1200px, 100%) - 20px);
  margin: 0 auto;

  div {
    input,
    textarea {
      ${Inputs}
    }

    textarea {
      padding: 10px 10px 60px;
    }
  }
`;
