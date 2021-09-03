import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class TableRow extends Component {
  // create table two component to get the patient details into a table

  viewPdf(url) {
    if (url) {
      window.location = url;
    } else{
        alert("There is no PDF to view");
    }
  }

  //Delete Method
    Delete = (id) => {
      console.log(id);
      axios
        .post(
          "http://localhost:3001/patient/delete/" + id
        )
        .then((response) => {
          alert("Successfully Deleted !");
          window.location = "/ViewPatients";
        });
    };
  render() {
    return (
      <tr>
        <td>{this.props.obj.patient_name}</td>
        <td>{this.props.obj.contactNo}</td>
        <td>{this.props.obj.Email}</td>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.question}</td>
        <td>
          <Link
            to={"/edit/" + this.props.obj._id}
            className="btn btn-warning btn-sm"
          >
            <i className="fas fa-edit">EDIT</i>
          </Link>
        </td>
        <td>
          <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.Delete(this.props.obj.id)}
                      style={{ color: "black" }}
                    >
                      <i className="fas fa-trash"></i> DELETE
                    </button>
        </td>

        <td>
          <button
            className="btn btn-info btn-sm"
            onClick={() => this.viewPdf(this.props.obj.url)}
          >
            <i className="fas fa-file-pdf"></i> VIEW PDF
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
