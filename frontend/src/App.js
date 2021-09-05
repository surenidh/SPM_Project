import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home.js';
import Login from '../src/components/login.js';
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

import { useState } from 'react';

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
          <Route path ='/edit/:id' exact component = {Edit_Post}/>
          <Route path ='/update/:id' exact component = {Edit_Post}/>
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
     </Router>
   </div>
  );
}

export default App;
