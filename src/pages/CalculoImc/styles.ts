import styled, { css } from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: calc(min(1200px, 100%) - 20px);
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  svg {
    margin-right: 15px;
  }
`;

export const SideBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Content = css`
  width: calc(50% - 40px);
`;

export const LeftSide = styled.div`
  ${Content}
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 25px;
    font-weight: normal;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
  }

  input {
    margin: 10px 5px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 10px;
    outline: 0;
    transition: 0.3s;
    &:disabled {
      opacity: 0.5;
    }
  }
`;

export const RightSide = styled.div`
  ${Content}
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const CardBoxContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const CardBoxContainerBig = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CardBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  p {
    svg {
      font-size: 40px;
      margin: 10px;
    }
  }
`;
