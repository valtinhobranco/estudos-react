import { ReactNode } from "react";

//? styles
import * as Styles from "./styles";

interface MaxxxProps {
  children?: ReactNode;
}

function Maxxx({ children }: MaxxxProps) {
  return (
    <Styles.Container>
      <Styles.TituloQualquer>Max sangue bom</Styles.TituloQualquer>
      <Styles.ValtinhoLindo>é nois </Styles.ValtinhoLindo>
      <h1>Maxxx</h1>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          adignissimos eaque inventore, hic atque incidunt esse saepe quis
          alias!
        </p>
      </div>
    </Styles.Container>
  );
}

export default Maxxx;
