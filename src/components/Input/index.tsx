import { ReactNode } from "react";

//? styles
import * as Styles from "./styles";

interface InputProps {
  children?: ReactNode;
}

function Input({ children }: InputProps) {
  return <Styles.Container />;
}

export default Input;
