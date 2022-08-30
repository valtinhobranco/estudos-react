import styled from "styled-components";
import colors from "../../../../styles/colors";

type ContainerProps = {
  backgroundCard: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  background: ${(props) =>
    props.backgroundCard ? colors.purpleLight : colors.purple};
`;

export const Icon = styled.img`
  height: 60px;
  width: 60px;
`;
