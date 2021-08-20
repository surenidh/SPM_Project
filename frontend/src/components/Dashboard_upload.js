import React, { Component, useState } from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import {Link} from 'react-router-dom'

import '../styles/dashboard_consultant.css';

export default function Dashboard_upload() {

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

        axios.post("http://localhost:3001/posts/add",newPost).then(()=>{
            alert("Data Saved Successfully")
        }).catch((err)=>{
            alert(err)
        })
    }

/*
    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);

        this.state = {
            title:'',
            image:'',
            description:'',
            url:''
        }
    }

    onChangeTitle(e){
        this.setState({
            title:e.target.value
        });
    }

    onChangeImage(e){
        this.setState( {
            image: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState( {
            description: e.target.value
        });
    }
 
    onChangeUrl(e){
        this.setState({
            url: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
      
        const obj = {
          title: this.state.title,
          image: this.state.image,
          description:  this.state.description,
          url:  this.state.url
        };

      axios.post('http://localhost:3001/uploadposts/add', obj).then(res => console.log(res.data));
      
      this.setState ({
        title:" ",
        image:" ",
        description:" ",
        url:" "
    })
    }
*/

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
                            <input type="file"  className="form-control" placeholder="Browse Image" id="image" onChange={(e)=>{
                                setImage(e.target.value);}}/>
                            
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
                    <Link to="" onClick={sendData} className="btn btn-danger"><i className="fa fa-save" aria-hidden="true"></i><FaSave/>SAVE</Link>
                </form>
            </div>
        </div>
       
    )
}


