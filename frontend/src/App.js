import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home.js';
import Login from '../src/components/login.js';
import MakeAppointments from '../src/components/appointments.js';
import Register_Patient from './components/Register_Patient.js';
<<<<<<< Updated upstream
import SideNavigation from './components/SideNavigation.js';
=======
//sanduni
import AddPatientDetails from './components/Patient_Add_Questions';
import GetPatientDetails from './components/view_patients';
import Reset_Password from './components/Reset_Password';
import EditPatientDetails from './components/Patient_Edit_Question';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/makeAppointments"><MakeAppointments/></Route>
          <Route path="/register"><Register_Patient/></Route>
<<<<<<< Updated upstream
          <Route path='/sideNavigation'><SideNavigation/></Route>
=======
          <Route path="/register"><Register_Patient/></Route>

          {/* //Sanduni */}
          <Route path="/AddQuestion"><AddPatientDetails/></Route>
          <Route path="/ViewPatients"><GetPatientDetails/></Route>
          <Route path="/reset"><Reset_Password/></Route>
          <Route exact path='/edit/:id' component = {EditPatientDetails}/>
>>>>>>> Stashed changes
       </Switch>
     </Router>
   </div>
  );
}

export default App;
