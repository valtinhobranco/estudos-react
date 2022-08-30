import React, { ReactNode, useState } from "react";

//* styles
import * as Styles from "./styles";

//* icons

import { FaWeight, FaArrowLeft } from "react-icons/fa";
import Button from "../../components/Button";

//* imports

import { levels, calculoImc, Level } from "../../helpers/imc";
import CardBoxImc from "../../components/CardBoxImc";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";
import ContentBox from "../../components/ContentBox";

interface CalculoImcProps {
  children?: ReactNode;
}

function CalculoImc({ children }: CalculoImcProps) {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [resultFinal, setResultFinal] = useState<Level | null>(null);

  const getAltura = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAltura(parseFloat(e.target.value));
  };
  const getPeso = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeso(parseFloat(e.target.value));
  };

  const calcularImc = () => {
    if (altura && peso) {
      setResultFinal(calculoImc(peso, altura));
    } else {
      alert("Esta faltando preencher");
    }
  };

  const limparCalculador = () => {
    setResultFinal(null);
    setAltura(0);
    setPeso(0);
  };

  return (
    <>
      <Header>
        <Styles.HeaderContainer>
          <FaWeight fontSize={30} />
          <h1>Calculando o IMC</h1>
        </Styles.HeaderContainer>
      </Header>
      <Styles.Container>
        <ContentBox>
          <Styles.SideBox>
            <Styles.LeftSide>
              <h2>Calcule seu imc</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eos aliquid debitis non.
              </p>

              <input
                type="number"
                placeholder="Digite sua altura em metros"
                value={altura > 0 ? altura : ""}
                onChange={getAltura}
                disabled={resultFinal ? true : false}
              />
              <input
                type="number"
                placeholder="Digite Peso"
                value={peso > 0 ? peso : ""}
                onChange={getPeso}
                disabled={resultFinal ? true : false}
              />

              <Button
                onClick={calcularImc}
                addOutlineButton
                disabled={resultFinal ? true : false}
              >
                Calcular
              </Button>
            </Styles.LeftSide>
            <Styles.RightSide>
              {(!resultFinal && (
                <Styles.CardBoxContainer>
                  {levels.map((item, index) => {
                    return <CardBoxImc key={index} item={item} />;
                  })}
                </Styles.CardBoxContainer>
              )) ||
                (resultFinal && (
                  <Styles.CardBoxContainerBig>
                    <div className="close-btn" onClick={limparCalculador}>
                      <FaArrowLeft fontSize={70} />
                    </div>
                    <CardBoxImc item={resultFinal} />
                  </Styles.CardBoxContainerBig>
                ))}
            </Styles.RightSide>
          </Styles.SideBox>
        </ContentBox>
      </Styles.Container>
    </>
  );
}

export default CalculoImc;
