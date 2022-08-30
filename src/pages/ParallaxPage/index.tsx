import { ReactNode, useRef } from "react";

//? styles
import * as Styles from "./styles";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Moon from "../../assets/images/moon.png";
import Land from "../../assets/images/land.png";
import Cat from "../../assets/images/cat.gif";
import Header from "../../components/Header";

function ParallaxPage() {
  const ref = useRef<any>();
  return (
    <>
      <Header>Redux</Header>
      <Styles.Container>
        <Parallax pages={4} ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${Moon})`,
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${Land})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0.9, end: 2.5 }}
            style={{ textAlign: "center" }}
          >
            <img src={Cat} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
          >
            <h1>Welcome to my website</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={2}
            onClick={() => ref.current.scrollTo(0)}
          >
            <h1>Hi Mom!</h1>
          </ParallaxLayer>
        </Parallax>
      </Styles.Container>
    </>
  );
}

export default ParallaxPage;
