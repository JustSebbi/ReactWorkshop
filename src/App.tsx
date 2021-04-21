import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './routes/Home';
import MemoGame from './routes/MemoGame';


function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={MemoGame} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
