import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Topic from './pages/Topic'
import Post from './pages/Post'
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>

            <Route path="/:topic/:postID" component={Post}/>
            <Route path="/:topic" component={Topic} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
