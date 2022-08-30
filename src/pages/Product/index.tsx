import { ReactNode } from "react";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";

import { Container } from "./styles";

interface ProductProps {
  children?: ReactNode;
}

function Product({ children }: ProductProps) {
  return (
    <>
      <Header>
        <h1>Product</h1>
      </Header>
      <Container>{children}</Container>
    </>
  );
}

export default Product;
