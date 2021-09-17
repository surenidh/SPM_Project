import React, { Component, useState,useEffect} from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaReply, FaBan, FaAngleRight } from 'react-icons/fa';
import axios from 'axios';
import {Link, useParams,useHistory } from 'react-router-dom'
import '../styles/consultantEdit.css';

const LOgoutConsultant = () => {
    const history =useHistory();
    const homepage = () =>{
        history.push("/");
    }

    const dashbordConsultant = () =>{
        history.push("/view");
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
                                <li ><a href="/view">VIEW UPLOADS</a></li>
                                <li className=""><a href="/viewQuestions">VIEW QUESTIONS</a></li>
                                <li className=""><a href="/viewAppointmentsConsultant">VIEW APPOINTMENTS</a></li>
                                <li className=""><a className="current"  href="/LOgoutConsultant">LOGOUT</a></li>
                            </ul>
                        </nav>
                    </div>   
                </div>
            <div className="container">
                <form >
                    <h3>LOGOUT</h3>
                    <div className="form-group">
                        <label htmlFor="title">Do You Want To Logout Now?.....</label>
                    </div>
                   
                    <br/>
                    <br/>
                    
                    <button onClick={homepage} className="btn btn-danger"><i className="fa fa-" aria-hidden="true"></i><FaAngleRight/>YES</button>
                    <button onClick={dashbordConsultant} className="btn btn-danger"><i className="fa fa-edit" aria-hidden="true"></i><FaBan/>NO</button>
</form>
    </div></div>
            </div>
            
        )
    }

    export default LOgoutConsultant;
