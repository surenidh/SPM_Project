import React, { Component } from 'react';
import axios from 'axios';
import heartImage from '../images/heart image.jpg';
import { FaEdit, FaFilePdf, FaHome, FaReply } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/viewData_consultant.css';

export default class QuestionViewConsultantByID extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get("http://localhost:3001/posts/get/${id}").then(()=>{
            alert("Data Saved Successfully")

        })
    }

    render() {
        
        const {title, image, description,url} = this.state.posts;
        return (
            <div className="container_viewQuestions">
                <form className="form-group">
                <h4>What Are the Heart attack symptoms available</h4>
                <pre>Kamani Perera<br/>
                kamani@gmail.com<br/>
                0775003869</pre>

                <Link to="/reply" className="btn btn-danger"><i className="fa fa-reply" aria-hidden="true"></i><FaReply/>REPLY
                </Link>
                
                </form>
            </div>
        )
    }
}
