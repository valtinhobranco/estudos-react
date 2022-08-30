import { ReactNode } from "react";
import { Level } from "../../helpers/imc";

//? styles
import * as Styles from "./styles";

//? icons

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

interface CardBoxImcProps {
  children?: ReactNode;
  item: Level;
}

function CardBoxImc({ children, item }: CardBoxImcProps) {
  return (
    <>
      <Styles.Container
        style={{
          background: item.color,
        }}
      >
        <p>{item.icon === "down" ? <FaThumbsDown /> : <FaThumbsUp />}</p>
        <h3 className="font-normal">{item.title}</h3>
        <h6>
          Seu calculo ficou entre {item.imc[0]} e {item.imc[1]}
        </h6>

        {item.yourImc && (
          <>
            <h4>Seu imc é de {item.yourImc}</h4>{" "}
          </>
        )}
      </Styles.Container>
    </>
  );
}

export default CardBoxImc;
