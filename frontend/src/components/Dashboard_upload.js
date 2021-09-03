import React, { Component, useState } from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom'
import FileBase64 from 'react-file-base64'

import '../styles/dashboard_consultant.css';
/*import upload_posts from '../../../backend/models/upload_posts';
 import { post } from '../../../backend/router/uploadPost.route.js';
 */
export default function Dashboard_upload() {
    const history =useHistory();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newPost = {
            title,
            image,
            description,
            url
        }

     
        if(title == "" && description ==""){
            alert("Title and Description cannot be Empty")
        }else if(title == ""){
            alert("Title cannot be Empty")
        }else if(description == ""){
            alert("Description cannot be Empty")
        }else{
            axios.post("http://localhost:3001/posts/add",newPost).then(()=>{
                alert("Data Saved Successfully")
                history.push("/view");

            }).catch((err)=>{
                alert(err)
            })
        }
       
    }

    function uploadImageDB(fakepath){
        let splits = fakepath.split('fakepath\\');
        let first = splits[0];
        let second = splits[1];
    }

    return (
        <div className="container">
            <Dashboard_heading/>
            <div className="heading">
                    <h2>Consultant Dashboard</h2>
                </div>
            <div className="content">
                <div className="sidebar">
                    <SideNavigation/>
                </div>
               
                <form onSubmit={sendData}>
                    <h3>ADD POSTS</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Type Title" onChange={(e)=>{
                                setTitle(e.target.value);}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                       <div className="input-group mb-3">
                            <input type="file"  className="form-control" placeholder="Browse Image" id="image" name="image" onChange={(e)=>{uploadImageDB(e.target.value)}}/>
                            
                        </div> 
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control" id="description" placeholder="Type Description" onChange={(e)=>{
                                setDescription(e.target.value);}}></textarea>
                    </div>
                    <div className="form-group">
                    <label htmlFor="url">Url</label>
                        <div className="input-group mb-3">
                            <input type="file"  className="form-control" placeholder="Browse Url" id="url" onChange={(e)=>{
                                setUrl(e.target.value);}}/>
                           
                        </div>
                    </div>
                    <Link to="/add" onClick={sendData} className="btn btn-danger"><i className="fa fa-save" aria-hidden="true"></i><FaSave/>SAVE</Link>
                </form>
            </div>
        </div>
       
    )
}


