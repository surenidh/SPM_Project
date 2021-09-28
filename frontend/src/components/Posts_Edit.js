import React, { Component } from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import {Link, useParams,useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';


import '../styles/dashboard_consultant.css';

const PostsEdit= () =>{
    const history =useHistory();
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

const onInputChange = e =>{
    setPosts({...posts,[e.target.name]: e.target.value});
};

useEffect(()=>{
    loadPost();
    alert(id)
    alert(image);
},[]);
        const loadPost = async() =>{
            const result = await axios.get(`http://localhost:3001/posts/edit/${id}`);
            setPosts(result.data);
        }

        const onSubmit = async e => {
            e.preventDefault();
            await axios.put(`http://localhost:3001/posts/update/${id}`, posts);
            history.push("/view");
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
                            <li className=""><a href="viewAppointmentsConsultant">VIEW APPOINTMENTS</a></li>
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
                        <input type="text" className="form-control"   name="title" placeholder="Type Title" value={title} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image Url</label>
                        <input type="text" className="form-control"   name="image"  value={image} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Change Image</label>
                        <div className="input-group mb-3">
                            <input type="file"  className="form-control"   name="image" onChange={e => onInputChange(e)}/>
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control" id="description" placeholder="Type Description" name="description"  value={description} onChange={e => onInputChange(e)}></textarea>
                    </div>
                    <div className="form-group">
                    <label htmlFor="urSelectedl">Selected Video Url </label>
                        <div className="input-group mb-3">
                            <input type="text"  className="form-control"  placeholder="Video Not Selected"  name="urSelectedl" value={url} disabled />
                           
                        </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="url">Url</label>
                        <div className="input-group mb-3">
                            <input type="file"  className="form-control"  name="url"  value={url} onChange={e => onInputChange(e)} />
                           
                        </div>
                    </div>
                    <Link to="/view" className="btn btn-primary" onClick={e => onSubmit(e)} ><i className="fa fa-save" aria-hidden="true"></i><FaSave/>UPDATE</Link>
                </form>
            </div>
        </div>
       
    )
}


export default PostsEdit;
