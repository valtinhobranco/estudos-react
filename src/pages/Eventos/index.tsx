import React, { useState } from "react";

//? styles
import * as Styles from "./styles";

//? components

import Button from "../../components/Button";
import DataList from "./data";
import Tweet from "../../components/Tweet";
import Header from "../../components/Header";
import ContentBox from "../../components/ContentBox";

type listNameOneProps = {
  userName: string;
  userLastName: string;
  userNumber: number;
};

const Eventos = () => {
  //! ---------- Functions ----------

  //? ---------- Counter ----------
  const [count, setCount] = useState<number>(0);

  const addCountPlus = () => {
    setCount(count + 1);
    if (count >= 10) {
      setCount(0);
    }
  };
  const addCountMinus = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(10);
    }
  };
  const addCountClear = () => {
    setCount(0);
  };
  //? ---------- Form Target Value ----------

  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<number>();

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(+e.target.value);
  };

  //? ---------- Toggle Button ----------

  const [showButton, setShowButton] = useState<boolean>(false);

  const hideButton = () => {
    setShowButton(!showButton);
  };

  //? ---------- Select Button ----------

  const [selectButton, setSelectButton] = useState<
    "aprovar" | "recusar" | "erro" | ""
  >();

  const buttonAprovar = () => {
    setSelectButton("aprovar");
  };
  const buttonRejeitar = () => {
    setSelectButton("recusar");
  };
  const buttonErro = () => {
    setSelectButton("erro");
  };

  //! ---------- List Object ----------

  const listNameOne: listNameOneProps[] = [
    { userName: "Valter", userLastName: "Branco", userNumber: 33 },
    { userName: "Kinha", userLastName: "Branco", userNumber: 35 },
    { userName: "Carol", userLastName: "Branco", userNumber: 36 },
    { userName: "Sonia", userLastName: "Branco", userNumber: 66 },
  ];
  const listNameTwo = [
    { userName: "Sonia", userLastName: "Branco", userNumber: 66 },
    { userName: "Kinha", userLastName: "Branco", userNumber: 35 },
    { userName: "Valter", userLastName: "Branco", userNumber: 33 },
    { userName: "Carol", userLastName: "Branco", userNumber: 36 },
  ];

  const [tweets, setTweets] = useState<string[]>([
    "Ola",
    "Meu aaaaaaaa",
    "Brasil",
    "Brasileiro",
  ]);

  function createTweets() {
    setTweets([...tweets, `Salve`]);
  }

  return (
    <>
      <Header addHeaderButton>Eventos</Header>
      <Styles.Container>
        <ContentBox>
          {tweets.map((tweet, index) => {
            return <Tweet key={index} text={tweet} />;
          })}

          <Button onClick={createTweets}>Adicionar algo</Button>
        </ContentBox>

        <ContentBox>
          <h3>Aperte os botoes para acionar o contador: {count}</h3>
          <Styles.ButtonContainer>
            <Button onClick={addCountMinus}>Remover</Button>
            <Button onClick={addCountPlus}>Adicionar</Button>
            <Button onClick={addCountClear}>Zerar</Button>
          </Styles.ButtonContainer>
        </ContentBox>

        <ContentBox>
          <Styles.FormContainer>
            <h3>Preencha o formulário para ver o resultado</h3>

            <input
              type="text"
              value={name}
              onChange={changeName}
              placeholder="Digite seu nome"
            />
            <input
              type="text"
              value={lastName}
              onChange={changeLastName}
              placeholder="Digite seu sobrenome"
            />
            <input
              type="number"
              value={age}
              onChange={changeNumber}
              placeholder="Digite sua idade"
            />
            <h5>
              Ola {name} {lastName}, tudo bem? <br />
              Vc tem {age} anos
            </h5>
          </Styles.FormContainer>
        </ContentBox>
        <ContentBox>
          <h3>Utilizando a repetição de forma interna</h3>
          <Styles.Content>
            {listNameOne.map((item, index) => {
              return (
                <div key={index}>
                  <h5>
                    {item.userName} - {item.userLastName} - {item.userNumber}{" "}
                    Anos
                  </h5>
                </div>
              );
            })}
          </Styles.Content>
        </ContentBox>
        <ContentBox>
          <h3>Utilizando a repetição de forma externa</h3>

          <Styles.Content>
            {listNameTwo.map((item, index) => {
              return <DataList key={index} data={item} />;
            })}
          </Styles.Content>
        </ContentBox>
        <ContentBox>
          <h3>Criando o sistema de Toggle</h3>

          <Button onClick={hideButton}>
            {showButton ? "Ocultar" : "Mostrar"}
          </Button>
          {(showButton && (
            <section>
              <h3>Temos um conteúdo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                adipisci exercitationem numquam, aliquam ipsam laborum eaque
                delectus nisi, ipsa qui voluptatum ab, iste nostrum. Qui odit
                deserunt incidunt blanditiis quis?
              </p>
            </section>
          )) || (
            <section>
              <h4>Clique no botão acima para mostrar o conteúdo</h4>
            </section>
          )}
        </ContentBox>
        <ContentBox>
          <h3>Criando o sistema de Escolha de botão</h3>
          <Styles.ButtonContainer>
            <Button onClick={buttonAprovar}>Aprovar</Button>
            <Button onClick={buttonRejeitar}>Rejeitar</Button>
            <Button onClick={buttonErro}>Erro</Button>
          </Styles.ButtonContainer>

          {(selectButton === "aprovar" && (
            <section>
              <h3>Mensagem Aprovada</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                adipisci exercitationem numquam, aliquam ipsam laborum eaque
                delectus nisi, ipsa qui voluptatum ab, iste nostrum. Qui odit
                deserunt incidunt blanditiis quis?
              </p>
            </section>
          )) ||
            (selectButton === "recusar" && (
              <section>
                <h3>Mensagem Recusada</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  adipisci exercitationem numquam, aliquam ipsam laborum eaque
                  delectus nisi, ipsa qui voluptatum ab, iste nostrum. Qui odit
                  deserunt incidunt blanditiis quis?
                </p>
              </section>
            )) ||
            (selectButton === "erro" && (
              <section>
                <h3>Mensagem Erro</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  adipisci exercitationem numquam, aliquam ipsam laborum eaque
                  delectus nisi, ipsa qui voluptatum ab, iste nostrum. Qui odit
                  deserunt incidunt blanditiis quis?
                </p>
              </section>
            )) || (
              <section>
                <h4>Clique no botão acima para mostrar a mensagem do botão</h4>
              </section>
            )}
        </ContentBox>

        <div></div>
      </Styles.Container>
    </>
  );
};

export default Eventos;
