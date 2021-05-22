
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './containers/Home/Home';
import Signin from './containers/signin/Signin';
import Signup from './containers/signup/signup';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;
