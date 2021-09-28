import React, { Component } from "react";
import axios from "axios";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
import SideNavigation from "./PatientSideNavBar";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";

export default class GetPatientDetails extends Component {
  // get editor conference details in this component

  constructor(props) {
    super(props);
    this.state = { patient: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/patient/") // get the conference details from mongo db
      .then((response) => {
        let patient = [];
        //  this.setState({patient : response.data});
        let pDetails = response.data;
        let count;
        console.log(pDetails);
        axios.get("http://localhost:3001/patient/getPdf").then((res) => {
          console.log(res.data);
          let pdfDetails = res.data;
          count = 0;

          pDetails.forEach((item) => {
              count =0;
            pdfDetails.forEach((i) => {
              count++;
              if (item.Email === i.email) {
                let object = {
                  patient_name: item.patient_name,
                  contactNo: item.contactNo,
                  Email: item.Email,
                  title: item.title,
                  question: item.question,
                  url: i.url,
                };
                patient.push(object);
              } else if(count === pdfDetails.length) {
                patient.push(item);
              }
            });
          });
          this.setState({ patient: patient });
          console.log(pdfDetails);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.patient.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  //get the view of table
  render() {
    return (
      <div id="main">
        <div className="container">
          <div
            class="form-group w-25"
            className="shadow p-5"
            style={{
              width: "96rem",
              height: "7rem",
              backgroundColor: "#c2c2d6",
              marginTop: 1,
              marginLeft: -120,
              paddingTop: 50,
            }}
          >
            <div class="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="dashboard1">
              <h2 className="header1">
                {" "}
                <screenLeft>PATIENT DASHBOARD</screenLeft>
              </h2>
              {/* <SideNavigation/> */}
            </div>
            <div>
              <h3 align="center" className="header2">
                {" "}
                PATIENTS LIST{" "}
              </h3>
              <div
                className="shadow p-5"
                style={{ backgroundColor: "#F0F8FF" }}
              >
                <table class="table table-hover">
                  <thead className="table-active">
                    <tr>
                      <th> Patient Name</th>
                      <th> Contact No. </th>
                      <th> Email Address</th>
                      <th> Title </th>
                      <th> Question </th>
                      <th> EDIT </th>
                      <th> DELETE </th>
                      <th> VIEW PDF </th>
                    </tr>
                  </thead>
                  <tbody>{this.tabRow()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
