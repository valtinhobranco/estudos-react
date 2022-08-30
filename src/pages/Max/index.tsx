import { ReactNode } from "react";
import Button from "../../components/Button";

import { Container } from "./styles";

interface MaxProps {
  children?: ReactNode;
}

export function Max({ children }: MaxProps) {
  return (
    <Container>
      <Button > Salve Jhow</Button>
    </Container>
  );
}
