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