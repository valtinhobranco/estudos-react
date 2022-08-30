import { ChangeEvent, useState, useContext } from "react";

//? styles
import * as Styles from "./styles";

//? components
import Header from "../../components/Header";
import ContainerBox from "../../components/ContainerBox";
import ContentBox from "../../components/ContentBox";
import Button from "../../components/Button";

//? reducer

import { ListPeopleReducer } from "../../reducers/pages/ListPeople";

import { Context } from "../../contexts/Context";

//? icon

import { FaTimes } from "react-icons/fa";
import Fieldset from "../../components/Fieldset";

function Reducers() {
  const [list, listDispatch] = ListPeopleReducer();

  const [addName, setAddName] = useState<string>("");
  const [addFormName, setAddFormName] = useState<string>("");
  const [addFormLastName, setAddFormLastName] = useState<string>("");
  const [addFormAge, setAddFormAge] = useState<number>(0);
  const { state, dispatch } = useContext(Context);

  const handleAddButton = () => {
    if (addName) {
      listDispatch({
        type: "ADD",
        payload: {
          name: addName,
        },
      });
      setAddName("");
    }
  };

  const handleAddName = (e: ChangeEvent<HTMLInputElement>) => {
    setAddName(e.target.value);
  };

  const handleDelName = (id: string) => {
    listDispatch({
      type: "DEL",
      payload: {
        id,
      },
    });
  };
  const handleOrderButton = () => {
    listDispatch({
      type: "ORDER",
    });
  };

  const handleFormName = (e: ChangeEvent<HTMLInputElement>) => {
    setAddFormName(e.target.value);
  };
  const handleAddFormLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setAddFormLastName(e.target.value);
  };
  const handleAddFormAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAddFormAge(+e.target.value);
  };
  const handleAddFormButton = () => {
    if (addFormName) {
      dispatch({
        type: "CHANGE_NAME",
        payload: {
          name: addFormName,
        },
      });
      setAddFormName("");
    }

    if (addFormLastName) {
      dispatch({
        type: "CHANGE_LASTNAME",
        payload: {
          lastName: addFormLastName,
        },
      });
      setAddFormLastName("");
    }
    if (addFormAge) {
      dispatch({
        type: "CHANGE_AGE",
        payload: {
          age: addFormAge,
        },
      });
      setAddFormAge(0);
    }
  };

  return (
    <>
      <Header>Reducers</Header>
      <ContainerBox>
        <ContentBox>
          <Styles.Content>
            <h2>Contador: {state.count.count}</h2>
            <div className="flex">
              <Button onClick={() => dispatch({ type: "ADD" })}>
                Adicionar
              </Button>
              <Button onClick={() => dispatch({ type: "REMOVE" })}>
                Remover
              </Button>
              <Button onClick={() => dispatch({ type: "CLEAR" })}>
                Limpar
              </Button>
            </div>
          </Styles.Content>
        </ContentBox>
        <ContentBox>
          <Styles.Content>
            <Fieldset>
              <legend>Insira o nome da pessoa</legend>
              <input
                type="text"
                placeholder="Digite um nome"
                value={addName}
                onChange={handleAddName}
              />
              <Button onClick={handleAddButton}>Adicionar</Button>
            </Fieldset>
            <Button onClick={handleOrderButton}>Ordenar</Button>
            <h2>Lista de pessoas:</h2>
            <ul>
              {list.map((item, index) => {
                return (
                  <li key={index}>
                    {item.name}{" "}
                    <button onClick={() => handleDelName(item.id)}>
                      <FaTimes width={15} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Styles.Content>
        </ContentBox>
        <ContentBox>
          <Styles.Content>
            <Fieldset>
              <legend>Preencha o Formulário </legend>
              <input
                type="text"
                placeholder="Digite um nome"
                value={addFormName}
                onChange={handleFormName}
              />
              <input
                type="text"
                placeholder="Digite um sobrenome"
                value={addFormLastName}
                onChange={handleAddFormLastName}
              />
              <input
                type="text"
                placeholder={"Digite sua idade"}
                value={addFormAge > 0 ? addFormAge : ""}
                onChange={handleAddFormAge}
              />
              <Button onClick={handleAddFormButton}>Enviar</Button>
            </Fieldset>

            <h2>Dados do formulário:</h2>

            <p>Nome: {state.user.name}</p>
            <p>Sobrenome: {state.user.lastName}</p>
            <p>Idade: {state.user.age ? state.user.age : ""}</p>
          </Styles.Content>
        </ContentBox>
      </ContainerBox>
    </>
  );
}

export default Reducers;
