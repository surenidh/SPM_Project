import React, { Component } from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';


import '../styles/dashboard_consultant.css';

const PostsEdit= () =>{

    const {id} = useParams();
    const [posts , setPosts] = useState([
        {
            title:"",
            image:"",
            description:"",
            url:""
        },
    ]);

const {title, image, description,url} = posts;
       
useEffect(()=>{
    loadPost();
    alert(id)
},[]);
        const loadPost = async() =>{
            const result = await axios.get(`http://localhost:3001/posts/edit/${id}`);
            setPosts(result.data);
        }
    return (
        <div className="container">
            <Dashboard_heading/>
            <div className="heading">
                    <h2>Consultant Dashboard</h2>
                </div>
            <div className="content">
                <div className="sidebar">
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
                </div> 
                </div>
                </div>
               
                <form >
                    <h3>EDIT POSTS</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control"   name="title" placeholder="Type Title" value={posts.title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <div className="input-group mb-3">
                            <input type="file"  className="form-control"  placeholder="Browse Image" name="image" src={posts.image} />
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control" id="description" placeholder="Type Description" name="description"  value={posts.description}></textarea>
                    </div>
                    <div className="form-group">
                    <label htmlFor="url">Url</label>
                        <div className="input-group mb-3">
                            <input type="file"  className="form-control"  placeholder="Browse Url" name="url" /* value={posts.url}  *//>
                           
                        </div>
                    </div>
                    <Link to="/dashboard_view" className="btn btn-primary" ><i className="fa fa-save" aria-hidden="true"></i><FaSave/>UPDATE</Link>
                </form>
            </div>
        </div>
       
    )
}


export default PostsEdit;
