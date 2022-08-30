import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  height: 300vh;
  background-color: #3b6fe0;

  padding-top: 320px;

  .box {
    width: 150px;
    height: 150px;
    border-radius: 1em;
    background-color: #f9f07e;
  }
`;
