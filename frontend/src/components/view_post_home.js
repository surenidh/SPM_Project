import React, { Component } from 'react';
import '../styles/dashboardView.css';
import {Link} from 'react-router-dom';
import { FaEdit , FaTrash , FaEye} from "react-icons/fa";

export default class view_post_home extends Component {
    render() {
        return (
           <div className="uploadTableRow">
               <p>
                   {this.props.obj.title}
               </p>
               
               
           </div>
        )
    }
}
