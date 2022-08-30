import { ReactNode } from "react";

//? styles
import * as Styles from "./styles";

type InfoItemProps = {
  label: string;
  value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <Styles.Container>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Value>{value}</Styles.Value>
    </Styles.Container>
  );
}

export default InfoItem;
