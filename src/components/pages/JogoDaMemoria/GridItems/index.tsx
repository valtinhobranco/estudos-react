import { ReactNode } from "react";
import { GridItemProps } from "../../../../types/pages/JodoDaMemoria";

//? styles
import * as Styles from "./styles";

//? images
import B7Svg from "../../../../assets/images/svg/b7.svg";

import { items } from "../../../../data/pages/JogoDaMemoria";

type Props = {
  item: GridItemProps;
  onClick: () => void;
};

function GridItems({ item, onClick }: Props) {
  return (
    <Styles.Container
      onClick={onClick}
      backgroundCard={item.permanentShown || item.shown}
    >
      {(!item.permanentShown && !item.shown && (
        <Styles.Icon src={B7Svg} alt="" />
      )) ||
        ((item.permanentShown || item.shown) && item.item !== null && (
          <Styles.Icon
            src={items[item.item].icon}
            alt={items[item.item].name}
          />
        ))}
    </Styles.Container>
  );
}

export default GridItems;
