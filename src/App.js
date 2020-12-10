import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import NoMatch from './pages/NotMatch';
import SantasHelpers from './pages/SantasHelpers';
import Elves from "./elves/Elves";
import Elf from "./elves/Elf";

function App() {
  return (
    <>
    <Switch>
     <Route exact path = "/" component = {Home} />
     <Route exact path = "/santas-helpers" component = {SantasHelpers} />
     <Route exact path = "/elf-land" component = {Elves} />
     <Route exact path="/elf/:id" component={Elf} />
     <Route component = {NoMatch} />
    </Switch>
    </>
  );
}

export default App;
