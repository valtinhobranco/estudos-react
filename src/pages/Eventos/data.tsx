import { ReactNode } from "react";
import { Container } from "./styles";

type listNameTwoProps = {
  data: {
    userName?: string;
    userLastName?: string;
    userNumber?: number;
    children?: ReactNode;
  };
};

function DataList({ data }: listNameTwoProps) {
  return (
    <>
      <Container>
        <h4>
          {data.userName} - {data.userLastName} - {data.userNumber} Anos
        </h4>
      </Container>
    </>
  );
}

export default DataList;
