import React, { Component, useState,useEffect} from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaReply, FaBan } from 'react-icons/fa';
import axios from 'axios';
import {Link, useParams,useHistory } from 'react-router-dom'
import '../styles/consultantEdit.css';

const ReplyForm = () => {

    const history =useHistory();
    const {id} = useParams();
    const [questions , setQuestions] = useState([
        {
            patient_name:"",
            Email:"",
            question:"",
        },
    ]);
    
const {patient_name, Email, question} = questions;

const onInputChange = e =>{
    setQuestions({...questions,[e.target.name]: e.target.value});
};

useEffect(()=>{
    loadEmail();
   
},[]);
        const loadEmail = async() =>{
            const result = await axios.get(`http://localhost:3001/patients/reply/${id}`);
          
            setQuestions(result.data);
        }
     

    const handleData = () =>{
        const subject = document.getElementById("subject").value;
        const description = document.getElementById("description").value; 
        if(description==""){
            alert("Please enter Description to message")
            history.push('#');
        }else{
            alert("Message successfully sent")
            history.push("/view");


        }
    }
    
    const moveView = () =>{
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
                    <SideNavigation/>
                </div>
            <div className="container">
                <form >
                    <h3>REPLY TO CUSTOMERS</h3>
                    <div className="form-group">
                        <label htmlFor="title">TO:</label>
                        <input type="text" className="form-control" id="title" value={Email} onChange={e => onInputChange(e)} disabled/>
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
                    <button onClick={moveView} className="btn btn-danger"><i className="fa fa-edit" aria-hidden="true"></i><FaBan/>CANCEL</button>
</form>
    </div></div>
            </div>
            
        )
    }

    export default ReplyForm;
