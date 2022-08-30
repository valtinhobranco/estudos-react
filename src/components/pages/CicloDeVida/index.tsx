import { ChangeEvent, useState } from "react";

//? styles
import * as Styles from "./styles";
import Button from "../../Button";
import { PostsTypes } from "../../../types/pages/CicloDeVida";

type AddPostFormProps = {
  onAdd: (title: string, body: string) => void;
};

type PostItemProps = {
  data: PostsTypes;
};

export const AddPostForm = ({ onAdd }: AddPostFormProps) => {
  //? List Add Posts
  const [addTitlePost, setAddTitlePost] = useState<string>("");
  const [addBodyPost, setAddBodyPost] = useState<string>("");

  const getTitlePost = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitlePost(e.target.value);
  };

  const getBodyPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyPost(e.target.value);
  };

  const AddPosts = async () => {
    if (addTitlePost && addBodyPost) {
      onAdd(addTitlePost, addBodyPost);
    } else {
      alert("Preencha os dados para postar");
    }

    setAddTitlePost("");
    setAddBodyPost("");
  };
  return (
    <>
      <Styles.Container>
        {/* Requisição ao banco de dados no modo GET JsonPlaceholder*/}
        <fieldset>
          <legend>Adicionar um novo post</legend>
          <input
            type="text"
            placeholder="Digite o titulo do post"
            value={addTitlePost}
            onChange={getTitlePost}
          />

          <textarea
            placeholder="Digite o conteúdo do post"
            value={addBodyPost}
            onChange={getBodyPost}
          ></textarea>
          <Button onClick={AddPosts}>Adicionar</Button>
        </fieldset>
      </Styles.Container>
    </>
  );
};

export const PostItem = ({ data }: PostItemProps) => {
  return (
    <article>
      <h6 className="mb-2 mt-2">{data.title}</h6>
      <small className="mt-2">
        # {data.id} User {data.userId}
      </small>{" "}
      <p className="mt-2">
        <small>
          # {data.id} User {data.body}
        </small>{" "}
      </p>
    </article>
  );
};
