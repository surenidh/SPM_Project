import React, {Component} from 'react';
import {useHistory} from "react-router-dom";
import logo from '../images/logo.png';
import { FaLessThan, FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


import Login from './login.js';

import '../styles/consultant.css';

import { browserHistory } from "react-router";



class Home extends Component {
    

   render() {
    
    const moveLoginPage = () => {
       // browserHistory.push('/login/');
      // axios.post("http://localhost:3000/login");
        console.log("login page");
    }

    const Appointments = () =>{
        
    }
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
                <button class="btn" onClick={this.moveLoginPage}><i class="fa fa-user" aria-hidden="true"></i><FaUser/>LOGIN
                </button>
            </div>
        </div>
    </div>
    <div class="home-content">
        <div class="make_appointmnets">
                <button class="btn" onClick={this.Appointments}><i class="fa fa-user" aria-hidden="true"></i><FaUser/>MAKE APPOINTMENTS
                </button>
        </div>
        <img />
        <div class="bottom-content">
        <div class="left-content">
                <h1>HEART ATTACK</h1>
                <p>A myocardial infarction (MI), commonly known as a heart attack, occurs when blood flow decreases or stops to a part of the heart, causing damage to the heart muscle. The most common symptom is chest pain or discomfort which may travel into the shoulder, arm, back, neck or jaw. </p>
                <button class="btn"><i class="fa fa-eye" aria-hidden="true"></i><FaEye/>VIEW
                </button>
        </div>
        <div class="right-content">
            <h1>HEART ATTACK</h1>

        </div>
    </div>
    <div class="footer">
        <ul class="footer_ul">
            <li class="li_items"><a class="link_items" href="#">HOME</a></li>
            <li class="li_items"><a class="link_items"href="#">POSTS</a></li>
            <li class="li_items"><a class="link_items"href="#">QUESTIONS</a></li>
            <li class="li_items"><a class="link_items"href="#">SERVICES</a></li>
            <li class="li_items"><a class="link_items"href="#">CONTACT</a></li>
        </ul>
    </div>
    </div>
    
</div>

);
}
}
export default Home;