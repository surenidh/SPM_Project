import React, { Component } from 'react'
import Dashboard_heading from './Dashboard_heading';
import '../styles/dashboardView.css';
import axios from 'axios';
import TableRowQuestions from './TableRowQuestions.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { FaEye} from "react-icons/fa";


export default class Consultant_view_questions extends Component {
    constructor(props){
        super(props);
        this.state = {uploads : [],
        searchField:''};

    }

    componentDidMount(){
        axios.get('http://localhost:3001/posts/viewQuestions').then(response =>{
            this.setState({uploads: response.data});
        }).catch(function(error){
            console.log(error);
        })
    };


    tabRow(){

        return this.state.uploads.map(function(object, i){
            return <TableRowQuestions obj = {object} key={i}/>
        });
    }

    render() {

    return (
        <div className="container">
            <Dashboard_heading/>
            <div className="heading">
                <h2>Consultant Dashboard</h2>
            </div>
            <div className="content">
                <div className="sideNavigation">
                    <nav className="nav_sideNavigation">
                        <ul className="ul_SideNavigation">
                            <li ><a  href="/add" >POSTS</a></li>
                            <li ><a className="current" href="/view">VIEW UPLOADS</a></li>
                            <li className=""><a href="/viewQuestions">VIEW QUESTIONS</a></li>
                            <li className=""><a href="#">VIEW APPOINTMENTS</a></li>
                            <li className=""><a href="#">SERVICES</a></li>
                            <li className=""><a href="#">LOGOUT</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="viewtable">
                    <h3>Patients Questions List</h3>
                    <table className="table table-striped">
                        <thread className="dataThread">
                            <tr className="tablerow">
                                <th scope="col">Patient Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Question</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thread>
                        <tbody>
                        <tr className="uploadTableRow">
               <td className="data1">
                   Kamani Perera
               </td>
               <td className="data1">
                   kamani@gmail.com
               </td>
               <td className="data1">
                What Are the heart..
               </td>
               <td className="data1">
                    <Link to="/viewQuestionByID" className="btn btn-danger"><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
               </td>
               </tr>
               <tr className="uploadTableRow">
               <td className="data1">
                   Nadeesha Silva
               </td>
               <td className="data1">
                   Nadees@gmail.com
               </td>
               <td className="data1">
                Can You Explain ...
               </td>
               <td className="data1">
                    <Link to="/viewQuestionByID" className="btn btn-danger"><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
               </td>
               </tr>
                </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
    }
}
