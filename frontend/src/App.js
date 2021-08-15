import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home.js';
import Login from '../src/components/login.js';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login/></Route>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
