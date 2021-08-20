import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home.js';
import Login from '../src/components/login.js';
import MakeAppointments from '../src/components/appointments.js';
import Reset_Password from './components/ResetPassword.js';
import Register_Patient from './components/RegisterPatient.js';
import SideNavigation from './components/SideNavigation.js';
import DashboardUpload from './components/Dashboard_upload.js';
import Dashboard_heading from './components/Dashboard_heading.js';
import DashboardView from './components/Consultant_View_Post_dashboard';
import View_Index from './components/view_post_home.js';
import ViewOneRecord from './components/ViewData.js';
import QuestionViewConsultant from './components/Consultant_view_questions';
import Edit_Post from './components/Posts_Edit.js';
import QuestionViewConsultantByID from './components/QuestionViewConsultantByID.js';
import ReplyForm from './components/ReplyForm.js';

import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Router>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login/></Route>
          <Route path='/add' exact component = {DashboardUpload}/>
          <Route path='/view' exact component = {DashboardView}/>
          <Route path='/get/:id' exact component = {ViewOneRecord}/>
          <Route path ='/viewQuestions' exact component = {QuestionViewConsultant}/>
          <Route path='/viewQuestionByID' exact component = {QuestionViewConsultantByID}/>
          <Route path='/reply' exact component = {ReplyForm}/>

          <Route path="/makeAppointments"><MakeAppointments/></Route>
          <Route path="/reset"><Reset_Password/></Route>
          <Route path="/register"><Register_Patient/></Route>
          <Route path='/sideNavigation'><SideNavigation/></Route>
          <Route path='/dashboard_heading'><Dashboard_heading/></Route>
          <Route path='/view_index'><View_Index/></Route>
          <Route path='/ViewOneRecord/:id'><ViewOneRecord/></Route>
          <Route path='/Edit_Post/:id'><Edit_Post/></Route>

     </Router>
   </div>
  );
}

export default App;
