import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Topic from './pages/Topic'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/:topic" component={Topic} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
