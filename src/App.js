import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import NoMatch from './pages/NotMatch';
import SantasHelpers from './pages/SantasHelpers';
import Deers from './deer/Deers.js';

function App() {
  return (
    <>
    <Switch>
     <Route exact path = "/" component = {Home} />
     <Route exact path = "/santas-helpers" component = {SantasHelpers} />
     <Route exact path = "/deer" component = {Deers} />
     <Route component = {NoMatch} />
    </Switch>
    </>
  );
}

export default App;
