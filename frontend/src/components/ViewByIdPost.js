import axios from 'axios';
import React, { Component } from 'react'
import { FaEdit , FaTrash , FaEye} from "react-icons/fa";
import {Link} from 'react-router-dom';
import Dashboard_heading from './Dashboard_heading.js';
import { useEffect, useState } from 'react';
import '../styles/dashboardView.css';
import 'bootstrap/dist/css/bootstrap.css';


function ViewByIdPost(){

    const [posts , setPosts] = useState([
        {
            title:"",
            image:"",
            description:"",
            url:""
        },
    ]);

    useEffect(()=> {
        fetch('http://localhost:3001/posts/view').then((res) =>{
            if (res.ok){
                return res.json();
            }
        }).then((jsonRes) => setPosts(jsonRes))
    }, [posts]);

function deletePost(id){
    axios.delete('http://localhost:3001/posts/delete/' + id).then((res) =>{
        
            alert("Successfully Deleted..");
    
    })
}

function viewPost(id){
    alert("Successfully view.." +  id);
     axios.get('http://localhost:3001/posts/view/' + id).then((res) =>{
        
            alert("Successfully view..");
    
    }) 
}


    return (
        <div className="container">
         <Dashboard_heading/>
            <div className="heading">
                <h2>Consultant Dashboard</h2>
            </div>
             <div className="content">
                <div className="sidebar">
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
                </div>                </div>
                <div className ="list">
                <table className="table table-striped">
                <thead className="thead-dark">
                                        <tr className="tablerow">
                                            <th scope="col">Title</th>
                                            <th scope="col">Image Path</th>
                                            <th scope="col">Description</th>
                                            <th colSpan="2">Action</th>
                                        </tr></thead>
                    {posts && posts.map(post => {
                        return(
                            <div key={post._id}>
                              
                                  
                                        <tbody className="tableBody">
                                <tr scope="row">
                                    <td>
                                    {post.title}
                                    </td>
                                    <td>
                                    {post.image}
                                    </td>
                                    <td>{post.description}</td>
                                    <td>
                                    <Link to={`/view/${post._id}`} className="btn btn-danger" onClick={() =>  viewPost(post._id)}><i className="fa fa-view red-color" aria-hidden="true"></i><FaEye/></Link>
                                    <Link to={`/edit/${post._id}`} className="btn btn-danger"><i className="fa fa-edit"  aria-hidden="true" ></i><FaEdit/></Link>
                                    <Link to="/view" className="btn btn-danger" onClick={() => deletePost(post._id)}><i className="fa fa-trash" aria-hidden="true"></i><FaTrash/></Link>  
                                    </td>
                                </tr>                               
                                </tbody>
                                </div>
                              
                            
                        );
                    })}
                      </table>
                </div>
            </div>
            </div>
    );
}

export default ViewByIdPost;