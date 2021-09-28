
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import '../styles/AddPatient.css';
import logo from '../images/logo.png';
import React, { useState, useEffect } from "react";

    export default function GetPatientDetails() {
        const [patientDetails, setPatientDetails] = useState([]); //gonna one item
      
        //get the all workshopproposals from database
        useEffect(() => {
          axios
            .get("https://icaf2021we36.herokuapp.com/conference/")
            .then((res) => {
              let Patient = [];
              console.log(Patient);
              res.data.forEach((item) => {
                let obj = {
                  id: item._id,
                  name: item.name,
                  patient_name:item.patient_name,
                  contactNo: item.contactNo,
                  email: item.email,
                  title: item.title,
                  question: item.question,
                   url: item.url,
                };
                Patient.push(obj);
              });
              setPatientDetails(Patient);
            });
        }, []);
      
        //Delete Method
        const Delete = (id) => {
          console.log(id);
          axios
            .post(
              "https://icaf2021we36.herokuapp.com/api/patientDetails/delete/" + id
            )
            .then((response) => {
              alert("Successfully Deleted !");
              window.location = "/patientDetails";
            });
        };
        const viewPdf = (url) => {
            window.location = url;
          }; 
          const onSubmit = (PatientDetails) => {
            const obj = {
                patient_name : PatientDetails.patient_name,
                contactNo : PatientDetails.contactNo,
                Email : PatientDetails.Email,
                title : PatientDetails.title,
                question : PatientDetails.question
                
            };
            console.log(obj);
          }
//get the view of table  
        return (
            <div id="main"> 
            <div className="container">

        <div>
        <div
     class='form-group w-25'
     className='shadow p-5'
     style={{ width: '96rem', height:'7rem',
     backgroundColor: "#c2c2d6",
     marginTop:1,
     marginLeft:-120,
    paddingTop: 50 }}
   >     

                <div class="logo">
                        <img src={logo} alt="logo"/>
                </div>
                <div className="dashboard1">
<h2 className = 'header1'> <screenLeft>PATIENT DASHBOARD</screenLeft></h2>
</div>
            <div className="list"
            className="shadow p-5"
            style={{ backgroundColor: "#F0F8FF",marginTop:100,width:900,marginLeft:500}}
          >
            <table className="table table-striped">
              <thead className="table-active">
                <tr>
                  <th> Patient Name</th>
                  <th> Contact No. </th>
                  <th> Email Address</th>
                  <th> Title </th>
                  <th> Question </th>
                  <th> View Pdf </th>
                  <th> Edit</th>
                  <th> Delete </th>
                </tr>
              </thead>

              {patientDetails.map((PatientDetails) => (
                <tr>
                  <td>{PatientDetails.patient_name}</td>
                  <td>{PatientDetails.contactNo}</td>
                  <td>{PatientDetails.Email}</td>
                  <td>{PatientDetails.title}</td>
                  <td>{PatientDetails.question}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => viewPdf(PatientDetails.url)}
                    >
                      <i className="fas fa-file-pdf"></i> View Pdf
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => onSubmit(PatientDetails)}
                    >
                      <i className="fas fa-edit"></i> EDIT
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => Delete(PatientDetails.id)}
                      style={{ color: "black" }}
                    >
                      <i className="fas fa-trash"></i> Decline
                    </button>
                  </td>
                </tr>
              ))}
            </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        );
              
              }
            
            
