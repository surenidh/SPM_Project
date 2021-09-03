import axios from 'axios';
import React, { Component } from 'react'
import { FaEdit , FaBan} from "react-icons/fa";
import {Link, useParams} from 'react-router-dom';
import Dashboard_heading from './Dashboard_heading.js';
import { useEffect, useState } from 'react';
import '../styles/consultantEdit.css';
import 'bootstrap/dist/css/bootstrap.css';
import img from '../images//reset.jpg';
import SideNavigation from './SideNavigation';


const PostViewOneRecord = () => {

    const [posts , setPosts] = useState([
        {
            title:"",
            image:"",
            description:"",
            url:"",
           
        },
    ]);

  const {id} = useParams();
  let imageUrl ="";
  let second ="";
  useEffect(()=>{
    loadPost();
    
},[]);
   const loadPost = async () =>{
 
       const res = await axios.get(`http://localhost:3001/posts/view/${id}`);
       setPosts(res.data);
   };

 const  display = () => {
       alert(id);
       loadImage();
   }

   const loadImage = () =>{
       let path = posts.image;
       let splits = path.split('fakepath\\');
       let first = splits[0];
       
        second = splits[1];
        alert(first + second);
       let newPath = first + "\Users\\\Dell\\\Desktop\\\SPM_Project\\\frontend\\\src\\\images\\" + second;
       //alert(newPath); 
       imageUrl = newPath;
       alert(imageUrl);
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
            <div className="containerViewByID">
                
                <h1>{posts.title}</h1>
                <img src={img}/>
                <p>{imageUrl}</p>
                <p>{posts.description}</p>
                <div className="btnClass">
                <Link to="/edit/:id" onClick="" className="btn btn-danger"><i className="fa fa-edit" aria-hidden="true"></i><FaEdit/>EDIT</Link>
                <Link to="/view" onClick="" className="btn btn-danger"><i className="fa fa-edit" aria-hidden="true"></i><FaBan/>CANCEL</Link>
                </div>
            </div>
            
            </div>
            </div>
        )
    }

export default  PostViewOneRecord;