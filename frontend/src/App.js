import './App.css';
import Dash from './Component/SignInDashboard/Dash'
import Order from './Component/Order/Order'
import Cart from './Component/Cart/Cart'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './Component/DashBoard/DashBoard'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>
          <Redirect path="/" to="/bookstore/login" exact />
          <Route path="/bookstore" component={Dash}/>
          <Route path="/dashBoard" component={Dashboard}/>
          <Route path="/order" component={Order}/>
          <Route path="/cart" component={Cart}/>
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
