import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className="container">
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Redirect to='/' />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
