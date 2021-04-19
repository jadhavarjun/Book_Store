import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import SignUp from './Component/SignUp/signup'

function App() {
  return (
    <div className="App">
      app page
      <BrowserRouter>
        <Switch>
          <Route path='/signup' exact component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
