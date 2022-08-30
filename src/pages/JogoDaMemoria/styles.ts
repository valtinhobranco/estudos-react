import { ButtonGrid } from "./../Home/styles";
import styled, { css } from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: calc(min(1200px, 100%) - 20px);
  margin: 0 auto;

  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
`;

const SameContent = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 50px 0;
`;

export const HeaderContent = styled.div`
  ${SameContent}
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
  ${SameContent}

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const Logo = styled.a``;

export const Info = styled.div`
  margin: 10px 0;
  width: 100%;
  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  width: 100%;

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Grid = styled.div`
  width: min(500px, 100%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  margin: 10px;
`;

export const GridItem = styled.div`
  background: ${colors.purple};
  margin: 10px;
  height: 20px;
  width: 20px;
`;
