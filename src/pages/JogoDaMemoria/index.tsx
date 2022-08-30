import { useEffect, useState } from "react";
import ButtonBack from "../../components/ButtonBack";

import LogoImage from "../../assets/images/devmemory_logo.png";

//? styles
import * as Styles from "./styles";

//? icons
import Restart from "../../assets/images/svg/restart.svg";

//? components
import Button from "../../components/Button";
import InfoItem from "../../components/InfoItem";
import GridItems from "../../components/pages/JogoDaMemoria/GridItems";

//? data
import { items } from "../../data/pages/JogoDaMemoria";

//? type
import { GridItemProps } from "../../types/pages/JodoDaMemoria";
import { formatTimerElapsed } from "../../helpers/pages/JogoDaMemoria/TimerCount";
import Header from "../../components/Header";

function JogoDaMemoria() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemProps[]>([]);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter((item) => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          //* v1 - if both are equal, make every "shown" permanent

          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          //* v1 - if they are NOT equal, close all "shown"

          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);

          setMoveCount((moveCount) => moveCount + 1);
        }
      }
    }
  }, [shownCount, gridItems]);

  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((items) => items.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const resetGame = () => {
    //* ---- resetar o jogo ----

    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    //* ---- criar o grid ----

    let tmbGrid: GridItemProps[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      tmbGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }
    //* ---- preencher o grid ----

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmbGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmbGrid[pos].item = i;
      }
    }

    //* ---- jogar o grid no state ----

    setGridItems(tmbGrid);

    //* ---- começar o jogo ----
    setPlaying(true);

    console.log(items.length * 2);
  };

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (
        tmpGrid[index].permanentShown === false &&
        tmpGrid[index].shown === false
      ) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
    }
  };
  return (
    <>
      <Header>Jogo da Memoria</Header>
      <Styles.Container>
        <Styles.Content>
          <Styles.LeftSide>
            <Styles.Logo>
              <img src={LogoImage} width={200} alt="" />
            </Styles.Logo>
            <Styles.Info>
              <InfoItem label="Tempo" value={formatTimerElapsed(timeElapsed)} />
              <InfoItem label="Passe" value={moveCount.toString()} />
            </Styles.Info>
            <Button addIcon={Restart} onClick={resetGame}>
              Reiniciar
            </Button>
          </Styles.LeftSide>

          <Styles.RightSide>
            <Styles.Grid>
              {gridItems.map((item, index) => {
                return (
                  <GridItems
                    key={index}
                    item={item}
                    onClick={() => handleItemClick(index)}
                  />
                );
              })}
            </Styles.Grid>
          </Styles.RightSide>
        </Styles.Content>
      </Styles.Container>
    </>
  );
}

export default JogoDaMemoria;
