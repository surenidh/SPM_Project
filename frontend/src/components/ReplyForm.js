import React, { Component, useState } from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaReply, FaSave } from 'react-icons/fa';
import axios from 'axios';
import {Link , useHistory} from 'react-router-dom'


function ReplyForm() {

    const history =useHistory();

     

    const handleData = () =>{
        const subject = document.getElementById("subject").value;
        const description = document.getElementById("description").value; 
        if(subject == "" && description==""){
            alert("Please enter Subject and Description to message")

        }else{
            alert("Message successfully sent")
            history.push("/view");


        }
    }
    

        return (
            <div className="container">
            <Dashboard_heading/>
            <div className="heading">
                    <h2>Consultant Dashboard</h2>
                </div>
            <div className="content">
                <div className="sidebar">
                    <SideNavigation/>
                </div>
            <div className="container">
                <form >
                    <h3>REPLY TO CUSTOMERS</h3>
                    <div className="form-group">
                        <label htmlFor="title">TO:</label>
                        <input type="text" className="form-control" id="title" value="kamani@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Subject</label>
                        <input type="text" className="form-control" id="subject"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Message</label>
                        <textarea className="form-control" id="description" placeholder="Type Message"></textarea>
                    </div>
                    <br/>
                    <br/>
                    
                    <button onClick={handleData} className="btn btn-danger"><i className="fa fa-reply" aria-hidden="true"></i><FaReply/>SEND</button>

</form>
    </div></div>
            </div>
            
        )
    }

    export default ReplyForm;
