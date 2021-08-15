import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home.js';
import Login from '../src/components/login.js';
import MakeAppointments from '../src/components/appointments.js';
import Reset_Password from './components/Reset_Password.js';
import Register_Patient from './components/Register_Patient.js';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/makeAppointments"><MakeAppointments/></Route>
          <Route path="/reset"><Reset_Password/></Route>
          <Route path="/register"><Register_Patient/></Route>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
