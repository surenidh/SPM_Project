import axios from 'axios';
import React, { Component } from 'react'
import { FaEdit , FaTrash , FaEye} from "react-icons/fa";
import {Link} from 'react-router-dom';
import Dashboard_heading from './Dashboard_heading.js';
import { useEffect, useState } from 'react';
import '../styles/dashboardView.css';
import 'bootstrap/dist/css/bootstrap.css';



function Consultant_view_Questions(){

    const [questions , setQuestions] = useState([
        {
            patient_name:"",
            Email:"",
            question:"",
        },
    ]);

    useEffect(()=> {
        fetch('http://localhost:3001/patients/viewQuestions').then((res) =>{
            if (res.ok){
                return res.json();
                //alert("success");
            }
        }).then((jsonRes) => setQuestions(jsonRes))
    }, [questions]);



function viewQuestions(id){
    axios.get('http://localhost:3001/patients/viewQuestionsByID/' + id).then((res) =>{

    
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
                            <li ><a className="current" href="/viewQuestions">VIEW QUESTIONS</a></li>
                            <li className=""><a href="viewAppointmentsConsultant">VIEW APPOINTMENTS</a></li>
                            <li className=""><a href="#">LOGOUT</a></li>
                        </ul>
                    </nav>
                </div>                </div>
                <div className ="list">
                <table className="table table-striped">
                <thead className="thead-dark">
                                        <tr className="tablerow">
                                            <th scope="col">Patient Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Question</th>
                                            <th colSpan="2">Action</th>
                                        </tr></thead>
                    {questions && questions.map(que => {
                        return(
                            <div key={que._id}>
                              
                                  
                              <tbody className="tableBody">
                                <tr scope="row">
                                    <td>
                                    {que.patient_name}
                                    </td>
                                    <td>
                                    {que.Email}
                                    </td>
                                    <td>{que.question}</td>
                                    <td>
                                    <Link to={`/viewQuestionsByID/${que._id}`} className="btn btn-danger" onClick={() =>  viewQuestions(que._id)} ><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
                                    
                                    
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

export default Consultant_view_Questions;