import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  background: #000;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.green};
    border-radius: 0px;
  }

  h1 {
    text-align: center;
    font-family: sans-serif;
    font-weight: 400;
    color: white;
    font-size: 10vw;
    text-shadow: -0.04em 0.04em 0 #000, 0.04em 0.04em 0 #000,
      0.04em -0.04em 0 #000, -0.04em -0.04em 0 #000;
  }

  img {
    width: 40%;
    margin: 0 auto;
  }
`;
