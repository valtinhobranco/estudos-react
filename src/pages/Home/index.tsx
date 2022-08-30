import { useContext } from "react";
import { Link } from "react-router-dom";

//? styles
import * as Styles from "./styles";

//? components
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Context } from "../../contexts/Context";
import ContentBox from "../../components/ContentBox";
import ContainerBox from "../../components/ContainerBox";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  const handleChangeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: "Valtinho",
      },
    });
  };

  return (
    <>
      <Header addFirstPage>
        Home | Bem vindo{" "}
        {state.user.name && `- ${state.user.name} ${state.user.lastName}`}
      </Header>
      <ContainerBox>
        <ContentBox>
          <Styles.ButtonGrid>
            <Link to="/eventos">
              <Button>Eventos</Button>
            </Link>

            <Link to="/estilos">
              <Button>Estilos</Button>
            </Link>

            <Link to="/ciclo-de-vida">
              <Button>Ciclo de vida</Button>
            </Link>

            <Link to="/produtos">
              <Button>Produtos</Button>
            </Link>
            <Link to="/reducers">
              <Button>Reducers</Button>
            </Link>
            <Link to="/redux">
              <Button>Redux</Button>
            </Link>
            <Link to="/lottie">
              <Button>Lottie</Button>
            </Link>
            <Link to="/parallax">
              <Button>Parallax</Button>
            </Link>
            <Link to="/parallax-move">
              <Button>Parallax Move</Button>
            </Link>
            <Link to="/max">
              <Button>Max</Button>
            </Link>
          </Styles.ButtonGrid>
        </ContentBox>
        <ContentBox>
          <Styles.HeaderContent>
            <h1>Projetos</h1>
          </Styles.HeaderContent>
          <Styles.ButtonGrid>
            <Link to="/calculo-imc">
              <Button>Calculo IMC</Button>
            </Link>

            <Link to="/jogo-da-memoria">
              <Button>Jogo da Memória</Button>
            </Link>
          </Styles.ButtonGrid>
        </ContentBox>
      </ContainerBox>
    </>
  );
};

export default Home;
