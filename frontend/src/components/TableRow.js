
import '../styles/dashboardView.css';

import { FaEdit , FaTrash , FaEye} from "react-icons/fa";
import axios from 'axios';
/* 

export default class TableRow extends Component {
     id =this.props.obj.id;
    render() {
        return (
           <tr className="uploadTableRow">
               <td>
                   {this.props.obj.title}
               </td>
               <td>
               {this.props.obj.image}
               </td>
               <td>
                 {this.props.obj.description}
               </td>
               <td>
                {this.props.obj.url}
               </td>
               <td>
                    <Link to={"/view/"+ this.props.obj._id} className="btn btn-danger"><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
               </td>
               <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-danger"><i className="fa fa-edit"  aria-hidden="true" ></i><FaEdit/></Link>
               </td>
               <td>
               <Link to={"/delete/" + this.props.obj._id} className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i><FaTrash/></Link>               </td>
           </tr>
        )
    }
}
======= */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component{ // create table two component to get the patient details into a table
    render(){
        return (
            <tr>
                <td>
                    {this.props.obj.patient_name}
                </td>
                <td>
                    {this.props.obj.contactNo}
                </td>
                <td>
                    {this.props.obj.Email}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.question}
                </td>
                <td>

                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-warning btn-sm"><i className="fas fa-edit">Edit</i></Link>
                </td>
                
            </tr>
        );
    }
}

export default TableRow;

