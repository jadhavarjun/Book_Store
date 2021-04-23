import './App.css';
import Dashboard from './components/LogInDashboard/dashboard';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Redirect path="/" to="/book-store" exact /> 
        <Route path ="/book-store" component={Dashboard}/>
      </Switch>
      
      </BrowserRouter>
        {/* <Login/> */}
    </div>
  );
}

export default App;
