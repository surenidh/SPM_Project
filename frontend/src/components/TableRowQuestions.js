import React, { Component } from 'react';
import '../styles/dashboardView.css';
import {Link} from 'react-router-dom';
import { FaEdit , FaTrash , FaEye} from "react-icons/fa";
import axios from 'axios';


export default class TableRowQuestions extends Component {
    render() {
        return (
           <tr className="uploadTableRow">
               <td>
                   {this.props.obj.patientName}
               </td>
               <td>
               {this.props.obj.email}
               </td>
               <td>
                {this.props.obj.Question}
               </td>
               <td>
                    <Link to={"/get/id" + this.props.obj._id} className="btn btn-danger"><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
               </td>
               </tr>
        )
    }
}
