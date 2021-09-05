import {React,Component } from 'react';
import Dashboard_heading from './Dashboard_heading';
import '../styles/dashboardView.css';
import axios from 'axios';
import TableRow from './TableRow.js';
import 'bootstrap/dist/css/bootstrap.css';
import ColumnFilter from './ColumnFilter';


class Consultant_View_Post_dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {uploads : [],
        searchField:''};

    }

    componentDidMount(){
        axios.get('http://localhost:3001/posts/view').then(response =>{
            this.setState({uploads: response.data});
        }).catch(function(error){
            console.log(error);
        })
    };


    tabRow(){

        return this.state.uploads.map(function(object, i){
            return <TableRow obj = {object} key={i}/>
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
                            <li className=""><a href="viewAppointmentsConsultant">VIEW APPOINTMENTS</a></li>
                            <li className=""><a href="#">LOGOUT</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="viewtable">
                    <h3>Uploaded Post List</h3>
                    <table className="table table-striped">
                        <thread className="dataThread">
                            <tr className="tablerow">
                                <th scope="col">Title</th>
                                <th scope="col">Image Path</th>
                                <th scope="col">Description</th>
                                <th scope="col">Video path</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thread>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
    }
}
export default Consultant_View_Post_dashboard;