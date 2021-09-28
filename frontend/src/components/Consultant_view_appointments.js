import axios from 'axios';
import React from 'react'
import { FaEdit , FaTrash , FaEye} from "react-icons/fa";
import {Link} from 'react-router-dom';
import Dashboard_heading from './Dashboard_heading.js';
import { useEffect, useState } from 'react';
import '../styles/dashboardView.css';
import 'bootstrap/dist/css/bootstrap.css';



function Consultant_view_appointments(){

    const [consultantAppointments , setConsultantAppointments] = useState([
        {
            name:"",
            date:"",
            type:"",
            contactnumber:"",
        },
    ]);

    useEffect(()=> {
        fetch('http://localhost:3001/appointmentRouter/viewAppointmentsConsultant').then((res) =>{
            if (res.ok){
               return res.json();
            }
        }).then((jsonRes) => setConsultantAppointments(jsonRes))
    }, [consultantAppointments]);



function viewAppointments(id){
    axios.get('http://localhost:3001/appointmentRouter/appointmentsByID/' + id).then((res) =>{

    
    }) 
}


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
                            <li ><a  href="/viewQuestions">VIEW QUESTIONS</a></li>
                            <li className=""><a className="current" href="/viewAppointmentsConsultant">VIEW APPOINTMENTS</a></li>
                            <li className=""><a href="#">LOGOUT</a></li>
                        </ul>
                    </nav>
                </div>               
                 </div>
                <div className ="list">
                <table className="table table-striped">
                <thead className="thead-dark">
                                        <tr className="tablerow">
                                            <th scope="col">Patient Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Type</th>
                                            <th colSpan="2">Action</th>
                                        </tr></thead>
                    {consultantAppointments && consultantAppointments.map(appointments => {
                       
                        return(
                            <div key={appointments._id}>
                           
                                  
                              <tbody className="tableBody">
                                <tr scope="row">
                                    <td>
                                    {appointments.name}
                                    </td>
                                    <td>
                                    {appointments.date}
                                    </td>
                                    <td>{appointments.type}</td>
                                    <td>
                                    <Link to={`/appointmentsByID/${appointments._id}`} className="btn btn-danger" ><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
                                    
                                    </td>
                                </tr>                               
                                </tbody>
                                </div>
                              
                            
                        );
                    })}
                      </table>
                </div>
            </div>
            </div>
    );
}

export default Consultant_view_appointments;