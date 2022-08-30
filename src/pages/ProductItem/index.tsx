import { ReactNode } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";

import { Container } from "./styles";

interface ProductItemProps {
  children?: ReactNode;
}

function ProductItem({ children }: ProductItemProps) {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <h1>Produto {params.slug}</h1>
      </Header>
      <Container>
        <ButtonBack />
      </Container>
    </>
  );
}

export default ProductItem;
