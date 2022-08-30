//? styles
import ContainerBox from "../../components/ContainerBox";
import ContentBox from "../../components/ContentBox";
import Header from "../../components/Header";
import * as Styles from "./styles";

import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";

function ParallaxMouseMove() {
  const { scrollY } = useViewportScroll();
  const { scrollX } = useViewportScroll();
  console.log(scrollX);
  const y1 = useTransform(scrollY, [0, 300], [0, 500]);
  const y2 = useTransform(scrollY, [0, 300], [0, -500]);
  const x2 = useTransform(scrollX, [350, 500], [350, 600]);
  return (
    <>
      <Header>Parallax Move</Header>
      <ContainerBox>
        <ContentBox>
          <Styles.Container>
            <motion.div className="box" style={{ y: y1, x: 250 }} />
            <motion.div
              className="box"
              style={{ y: y2, x: 350, background: "salmon" }}
            />
          </Styles.Container>
        </ContentBox>
      </ContainerBox>
    </>
  );
}

export default ParallaxMouseMove;
