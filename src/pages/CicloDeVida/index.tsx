import { ChangeEvent, useEffect, useState } from "react";
import Lottie from "react-lottie";

//? styles
import * as Styles from "./styles";

//? components
import Button from "../../components/Button";
import { AddPostForm, PostItem } from "../../components/pages/CicloDeVida";

//? types
import { MoviesTypes, PostsTypes } from "../../types/pages/CicloDeVida";

//? api
import { api } from "../../api/pages/CicloDeVida";
import Header from "../../components/Header";
import ContentBox from "../../components/ContentBox";

import loadingAnimation from "../../assets/lottie/loading.json";

function CicloDeVida() {
  //? Lifecycle in the Form component

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  //? List Movie
  const [listMovies, setListMovies] = useState<MoviesTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //? List Posts
  const [listPost, setListPost] = useState<PostsTypes[]>([]);
  const [loadingPost, setLoadingPost] = useState<boolean>(false);

  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);

  //! Functions

  //? Lifecycle in the Form component

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const changeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  //? List Movie

  const loadMovies = async () => {
    try {
      setLoading(true);
      let json = await api.getAllMovies();
      setLoading(false);
      setListMovies(json);
    } catch (error) {
      setLoading(false);
      alert("ouve erro ao carregar a pagina");
      console.error(error);
    }
  };

  //? List Post
  const loadListPosts = async () => {
    try {
      setLoadingPost(true);
      let json = await api.getAllPosts();
      setLoadingPost(false);
      setListPost(json);
    } catch (error) {
      setLoadingPost(false);
      alert("ouve erro ao carregar a pagina");
      console.error(error);
    }
  };

  const HandleAddPosts = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    console.log(json);
    if (json.id) {
      alert("Post enviado com sucesso!");
    } else {
      alert("Ocorreu algum erro");
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
  };
  return (
    <>
      <Header>Ciclo de vida de um componente</Header>
      <Styles.Container>
        <ContentBox>
          {/* Ciclo de vida de um elemento com verificator */}
          <h3>
            Criando um ciclo de vida básico: onde ele tem um inicio e fim
          </h3>{" "}
          <br />
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={changeName}
          />
          <input
            type="text"
            placeholder="Digite seu sobrenome"
            value={lastName}
            onChange={changeLastName}
          />
          <p>Nome completo: {fullName}</p>
        </ContentBox>

        <ContentBox>
          {/* Requisição ao banco de dados no modo GET */}
          <h3>Utilizando requisição ao banco de dados no modo GET simples</h3>

          <Button onClick={loadMovies}>Clique para carregar</Button>

          {(!loading && listMovies.length > 0 && (
            <>
              <p className="mb-6">Quantidade de filmes: {listMovies.length}</p>
              <section className="grid grid-cols-6 gap-10">
                {listMovies.map((item, index) => {
                  return (
                    <article key={index}>
                      <img src={item.avatar} alt="" className="w-32 block" />
                      <h6 className="mt-2">{item.titulo}</h6>
                    </article>
                  );
                })}
              </section>
            </>
          )) ||
            (loading && (
              <Lottie options={defaultOptions} height={400} width={400} />
            ))}
        </ContentBox>

        <ContentBox>
          {/* Requisição ao banco de dados no modo GET JsonPlaceholder*/}
          <h3>
            Utilizando requisição ao banco de dados no modo GET JsonPlaceholder
          </h3>

          <Button onClick={loadListPosts}>Clique para carregar</Button>

          {(!loadingPost && listPost.length > 0 && (
            <>
              <p className="mb-6">Lista de posts: {listPost.length}</p>
              <section className="grid grid-cols-6 gap-10">
                {listPost.map((item, index) => {
                  return (
                    <article key={index}>
                      <h6 className="mb-2 mt-2">{item.title}</h6>
                      <small className="mt-2">
                        # {item.id} User {item.userId}
                      </small>{" "}
                      <p className="mt-2">
                        <small>
                          # {item.id} User {item.body}
                        </small>{" "}
                      </p>
                    </article>
                  );
                })}
              </section>
            </>
          )) ||
            (loadingPost && <p className="mb-6">Carregando ...</p>)}
        </ContentBox>

        <ContentBox>
          <h3>
            Utilizando requisição ao banco de dados e inserindo um novo post no
            modo Post JsonPlaceholder
          </h3>

          <AddPostForm onAdd={HandleAddPosts} />

          <Button onClick={loadListPosts}>Clique para carregar</Button>

          {(!loadingPost && listPost.length > 0 && (
            <>
              <p className="mb-6">Lista de posts: {listPost.length}</p>
              <section className="grid grid-cols-6 gap-10">
                {listPost.map((item, index) => {
                  return <PostItem key={index} data={item} />;
                })}
              </section>
            </>
          )) ||
            (loadingPost && <p className="mb-6">Carregando ...</p>)}
        </ContentBox>
      </Styles.Container>
    </>
  );
}

export default CicloDeVida;
