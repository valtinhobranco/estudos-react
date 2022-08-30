import { ReactNode } from "react";
import ButtonBack from "../../components/ButtonBack";
import ContentBox from "../../components/ContentBox";
import Header from "../../components/Header";

//? styles
import * as Styles from "./styles";

interface EstilosProps {
  children?: ReactNode;
}

function Estilos({ children }: EstilosProps) {
  return (
    <>
      <Header>Estilos</Header>
      <Styles.Container>
        <ContentBox>
          <h1>Estilos</h1>
        </ContentBox>
      </Styles.Container>
    </>
  );
}

export default Estilos;
