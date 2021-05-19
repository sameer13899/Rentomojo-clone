import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Posts from './screens/Posts';
import Details from './screens/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
