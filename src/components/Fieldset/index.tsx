import { ReactNode } from "react";

//? styles
import * as Styles from "./styles";

interface FieldsetProps {
  children?: ReactNode;
}

function Fieldset({ children }: FieldsetProps) {
  return <Styles.Container>{children}</Styles.Container>;
}

export default Fieldset;
