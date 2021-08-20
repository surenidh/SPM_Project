import React, { Component } from 'react';
import '../styles/dashboardView.css';
import {Link} from 'react-router-dom';
import { FaEdit , FaTrash , FaEye} from "react-icons/fa";
import axios from 'axios';


export default class TableRow extends Component {
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
                    <Link to={"/get/id" + this.props.obj._id} className="btn btn-danger"><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
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
