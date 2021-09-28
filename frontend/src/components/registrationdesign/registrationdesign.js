
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';
import { FaUser, FaEye } from "react-icons/fa";



import '../../styles/consultant.css';


function useWindowsize(){

    const [size,setsize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const handleResize = () => {
        setsize([window.innerHeight,window.innerWidth]);
      };
      window.addEventListener("resize", handleResize);
      return() => {
        window.removeEventListener("resize",handleResize);
      };
    }, [])
    return size;
  }



  export default function Home1() {

 
    const [height, width] = useWindowsize();
   
    return (

    
        
    <div className="content">
        <div class="container">
            <div class="logo">
                    <img src={logo} alt="logo"/>
            </div>
            <div class="navbar">
                <nav class="navbar navbar-expand-sm bg-white navbar-red">
                    
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">POSTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">QUESTIONS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SERVICES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <div class="login">
                <Link to="/login"> <button class="btn" ><i class="fa fa-user" aria-hidden="true"></i><FaUser/>LOGIN
                    </button></Link>
                </div>
            </div>
        </div>
        
            <img />
            
        

    </div>
    
    
    );
    }
  
