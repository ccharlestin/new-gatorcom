import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Chat from './components/Chat.js'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" exact component={Home}/>  
          <Route path="/Chatroom" component={Chat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
