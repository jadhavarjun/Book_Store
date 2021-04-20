import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import UserForm from './Component/UserForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/userform' exact component={UserForm}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
