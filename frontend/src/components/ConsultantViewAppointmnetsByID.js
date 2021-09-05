import axios from 'axios';
import React, { Component } from 'react'
import { FaEdit , FaBan, FaReply} from "react-icons/fa";
import {Link, useParams} from 'react-router-dom';
import Dashboard_heading from './Dashboard_heading.js';
import { useEffect, useState } from 'react';
import '../styles/consultantEdit.css';
import 'bootstrap/dist/css/bootstrap.css';
import img from '../images//reset.jpg';
import SideNavigation from './SideNavigation';


const ConsultantViewAppointmnetsByID = () => {

    const [appointments , setAppointments] = useState([
        {
            name:"",
            date:"",
            type:"",
            contactnumber:"",
            email:"",
        },
    ]);

  const {id} = useParams();
 
  useEffect(()=>{
    loadAppointments();
    
},[]);
   const loadAppointments = async () =>{
 
       const res = await axios.get(`http://localhost:3001/appointmentRouter/appointmentsByID/${id}`);
      
       setAppointments(res.data);
   };

     return (
            <div className="container">
                <Dashboard_heading/>
                <div className="heading">
                        <h2>Consultant Dashboard</h2>
                </div>
                <div className="content">
                    <div className="sidebar">
                    <div className="sideNavigation">
                    <nav className="nav_sideNavigation">
                        <ul className="ul_SideNavigation">
                            <li ><a  href="/add" >POSTS</a></li>
                            <li ><a className="" href="/view">VIEW UPLOADS</a></li>
                            <li ><a href="/viewQuestions">VIEW QUESTIONS</a></li>
                            <li className=""><a className="current" href="viewAppointmentsConsultant">VIEW APPOINTMENTS</a></li>
                            <li className=""><a href="#">LOGOUT</a></li>
                        </ul>
                    </nav>
                </div>                
                    </div>
                    <div className="containerViewByIDQuestion">
                        <h4>{appointments.name}</h4>  
                        <p><b>Date:</b> {appointments.date}</p> 
                        <p><b>Type:</b> {appointments.type}</p>
                        <p><b>Contact No:</b> {appointments.contactnumber}</p>
                        <p><b>Email: </b>{appointments.email}</p>
                        
                        <div className="btnClass">
                            <Link to={'/replyAppointments/'+ id} onClick="" className="btn btn-danger"><i className="fa fa-reply" aria-hidden="true"></i><FaReply/>REPLY</Link>
                            <Link to="/view" onClick="" className="btn btn-danger"><i className="fa fa-edit" aria-hidden="true"></i><FaBan/>CANCEL</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default  ConsultantViewAppointmnetsByID;