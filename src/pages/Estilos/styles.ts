import styled from "styled-components";
import colors from "../../styles/colors";

type ContainerProps = {
  bgColor?: string;
};

export const Container = styled.section<ContainerProps>`
  width: calc(min(1200px, 100%) - 20px);
  margin: 0 auto;
  background: ${(props) => props.bgColor};
`;
