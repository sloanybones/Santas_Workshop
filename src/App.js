import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import NoMatch from './pages/NotMatch';
import SantasHelpers from './pages/SantasHelpers';
import { Container } from 'semantic-ui-react';
import Toys from './toys/Toys';
import ToyForm from './toys/ToyForm';

function App() {
  return (
    <>
    <Container>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/santas-helpers" component = {SantasHelpers} />
        <Route exact path='/toys' component={Toys} />
        <Route component = {NoMatch} />
      </Switch>
    </Container>
    </>
  );
}

export default App;
