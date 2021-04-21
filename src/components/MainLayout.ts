import { deflateRaw } from "node:zlib";
import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rebeccapurple;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;

export default MainLayout;
