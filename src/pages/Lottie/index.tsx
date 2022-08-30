import React from "react";

import Lottie from "react-lottie";

import { Container } from "./styles";
import animatedCat from "../../assets/lottie/cat.json";
import cart from "../../assets/lottie/shopping-cart.json";
import Header from "../../components/Header";

const LottiePage: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedCat,
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: cart,
  };

  return (
    <>
      <Header>Lottie</Header>
      <Container>
        <Lottie options={defaultOptions} height={400} width={400} />
        <Lottie options={defaultOptionsTwo} height={400} width={400} />
      </Container>
    </>
  );
};

export default LottiePage;
