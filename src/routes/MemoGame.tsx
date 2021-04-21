import React, { useState } from 'react';

import MainLayout from '../components/MainLayout';
import styled from 'styled-components';
import MemoGameComponent from '../components/MemoGameComponent';
import LinkButton from '../components/LinkButton';

const MyLayout = styled(MainLayout)`
    background-color: white;
        `;

function MemoGame() {
    const [state, setState] = useState<number>(0);
    function increaseCount(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault();
        setState(state +1);
    }
  return (
      <MyLayout>
          <div>
          {state}
          </div>
      <MemoGameComponent></MemoGameComponent>
      <LinkButton to={"/"}>Get me out of here</LinkButton>
      <button onClick={increaseCount}>lazy ugly increase button</button>
      </MyLayout>
  );
}

export default MemoGame;