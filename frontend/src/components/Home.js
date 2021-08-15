import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import { FaUser, FaEye } from "react-icons/fa";
import ReactPlayer from 'react-player';
import Login from './login.js';

import '../styles/consultant.css';

import { browserHistory, Redirect } from "react-router";



class Home extends Component {
    render() {
   
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
        <div class="home-content">
            <div class="make_appointmnets">
            <Link to="/makeAppointments"><button class="btn"><i class="fa fa-user" aria-hidden="true"></i><FaUser/>MAKE APPOINTMENTS
                    </button></Link>
            </div>
            <img />
            <div class="bottom-content">
            <div class="left-content">
                    <h1>HEART ATTACK</h1>
                    <p>A myocardial infarction (MI), commonly known as a heart attack, occurs when blood flow decreases or stops to a part of the heart, causing damage to the heart muscle. The most common symptom is chest pain or discomfort which may travel into the shoulder, arm, back, neck or jaw. </p>
                    <Link to=""><button class="btn"><i class="fa fa-eye" aria-hidden="true"></i><FaEye/>VIEW
                    </button></Link>
            </div>
            <div class="right-content">
                <h1>HEART ATTACK</h1>
                <div className="video">
                <ReactPlayer width="300" height="250" url="https://www.youtube.com/watch?v=QllguanpKic"/></div>
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