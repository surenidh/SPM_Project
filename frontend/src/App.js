import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home.js';
import Login from '../src/components/login.js';
<<<<<<< HEAD
import SideNavigation from './components/SideNavigation.js';
import DashboardUpload from './components/Dashboard_upload.js';
import Dashboard_heading from './components/Dashboard_heading.js';
import DashboardView from './components/Consultant_View_Post_dashboard';
import View_Index from './components/PostViewOneRecord.js';
import ViewOneRecord from './components/ViewData.js';
import QuestionViewConsultant from './components/Consultant_view_questions';
import Edit_Post from './components/Posts_Edit.js';
import QuestionViewConsultantByID from './components/QuestionViewConsultantByID.js';
import ReplyForm from './components/ReplyForm.js';
import viewByID from './components/ViewByIdPost.js'
import viewAppointmentsConsultant from './components/Consultant_view_appointments.js';
import viewAppointmentsConsultantID from './components/ConsultantViewAppointmnetsByID.js';
import ReplyAppointments from './components/ReplyAppointments.js';
import LOgoutConsultant from './components/LogoutConsultant.js';
import ConsultantPdf from './components/ConsultantPdf.js';

import { useState } from 'react';

//import MakeAppointments from '../components/appointments.js';
//import Register_Patient from './components/Register_Patient.js';

//sanduni
import AddPatientDetails from './components/Patient_Add_Questions';
import GetPatientDetails from './components/view_patients';
import Reset_Password from './components/ResetPassword';
import EditPatientDetails from './components/Patient_Edit_Question';

=======
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
>>>>>>> origin/sanduni

function App() {
  return (
    <div className="App">
     <Router>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login/></Route>

          <Route path='/add' exact component = {DashboardUpload}/>
          <Route path='/view' exact component = {viewByID}/>
          <Route path ='/viewQuestions' exact component = {QuestionViewConsultant}/>
          <Route path ='/view/:id' exact component = {View_Index}/>
          <Route path ='/viewByID' exact component = {viewByID}/>
          <Route path ='/editPost/:id' exact component = {Edit_Post}/>
          <Route path ='/updatepost/:id' exact component = {Edit_Post}/>
          <Route path='/viewQuestionsByID/:id' exact component = {QuestionViewConsultantByID}/>
          <Route path='/reply' exact component = {ReplyForm}/>
          <Route path='/reply/:id' exact component = {ReplyForm}/>
          <Route path='/replyAppointments' exact component = {ReplyAppointments}/>
          <Route path='/replyAppointments/:id' exact component = {ReplyAppointments}/>
          <Route path='/sideNavigation'><SideNavigation/></Route>
          <Route path='/dashboard_heading'><Dashboard_heading/></Route>
          <Route path='/ViewOneRecord/:id'><ViewOneRecord/></Route>
          <Route path='/viewAppointmentsConsultant' exact component = {viewAppointmentsConsultant}/>
          <Route path='/appointmentsByID/:id' exact component = {viewAppointmentsConsultantID}/>
          <Route path='/LOgoutConsultant' exact component = {LOgoutConsultant}/>
          <Route path='/ConsultantPdf' exact component = {ConsultantPdf}/>
{/* 
          <Route path="/makeAppointments"><MakeAppointments/></Route>
          <Route path="/register"><Register_Patient/></Route>
<<<<<<< HEAD
            <Route path="/register"><Register_Patient/></Route>
 */}
          <Route path='/sideNavigation'><SideNavigation/></Route>

        
=======
<<<<<<< Updated upstream
          <Route path='/sideNavigation'><SideNavigation/></Route>
=======
          <Route path="/register"><Register_Patient/></Route>
>>>>>>> origin/sanduni

          {/* //Sanduni */}
          <Route path="/AddQuestion"><AddPatientDetails/></Route>
          <Route path="/ViewPatients"><GetPatientDetails/></Route>
          <Route path="/reset"><Reset_Password/></Route>
<<<<<<< HEAD
          <Route exact path='/edit/:id' exact component = {EditPatientDetails}/>

=======
          <Route exact path='/edit/:id' component = {EditPatientDetails}/>
>>>>>>> Stashed changes
       </Switch>
>>>>>>> origin/sanduni
     </Router>
   </div>
  );
}

export default App;
