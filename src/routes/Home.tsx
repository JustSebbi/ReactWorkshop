import React from 'react';

import HelloWorld from '../components/helloWorld';
import MainLayout from '../components/MainLayout';
import LinkButton from '../components/LinkButton';


function Home() {
  return (
    <div className="App">
      <MainLayout>
          <HelloWorld></HelloWorld>
        <LinkButton to={"/game"}>Play a game</LinkButton>
      </MainLayout>
      
    </div>
  );
}

export default Home;