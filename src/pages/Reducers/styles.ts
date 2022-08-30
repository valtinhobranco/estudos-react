import styled, { css } from "styled-components";

export const Content = styled.div`
  h2 {
    font-size: 30px;
  }

  ul {
    width: 100%;
    margin-top: 30px;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      margin-bottom: 15px;
      button {
        svg {
          margin: 0 20px 0 0;
          path {
            color: ${(props) => props.theme.colors.text};
            transition: 0.3s;
          }
          &:hover {
            path {
              color: ${(props) => props.theme.colors.primary};
            }
          }
        }
      }
    }
  }
`;
