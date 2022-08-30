import React, { ReactNode } from "react";

//? styles
import * as Styles from "./styles";

//? components
import Header from "../../components/Header";
import ContainerBox from "../../components/ContainerBox";
import ContentBox from "../../components/ContentBox";
import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";

//? redux

import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setName, setAge } from "../../redux/reducers/useReducers";

interface ReduxProps {
  children?: ReactNode;
}

function Redux({ children }: ReduxProps) {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);

  const changeName = (newName: string) => dispatch(setName(newName));
  const changeAge = (newAge: number) => dispatch(setAge(newAge));

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAge(+e.target.value);
  };
  return (
    <>
      <Header>Redux</Header>
      <ContainerBox>
        <ContentBox>
          Olá meu nome é {user.name} e eu tenho {user.age} anos.
          <Fieldset>
            <legend>Meu ovo</legend>
            Nome completo:
            <input
              type="text"
              placeholder="Digite seu nome"
              value={user.name}
              onChange={handleNameInput}
            />
            <input
              type="text"
              placeholder="Digite seu nome"
              value={user.age}
              onChange={handleAgeInput}
            />
          </Fieldset>
        </ContentBox>
        <ContentBox>
          <Button>Switch Theme</Button>
        </ContentBox>
      </ContainerBox>
    </>
  );
}

export default Redux;
