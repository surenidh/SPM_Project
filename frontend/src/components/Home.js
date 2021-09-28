import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import { FaUser, FaEye } from "react-icons/fa";
import ReactPlayer from 'react-player';

import '../styles/consultant.css';




class Home extends Component {
    render() {
   
    return (

        
    <div className="content">
        <div className="container">
            <div className="logo">
                    <img src={logo} alt="logo"/>
            </div>
            <div className="navbar">
                <nav className="navbar navbar-expand-sm bg-white navbar-red">
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">POSTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">QUESTIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <div className="login">
                <Link to="/login"> <button className="btn" ><i className="fa fa-user" aria-hidden="true"></i><FaUser/>LOGIN
                    </button></Link>
                </div>
            </div>
        </div>
        <div className="home-content">
            <div className="make_appointmnets">
            <Link to="/makeAppointments"><button className="btn"><i className="fa fa-user" aria-hidden="true"></i><FaUser/>MAKE APPOINTMENTS
                    </button></Link>
            </div>
            <img />
            <div className="bottom-content">
            <div className="left-content">
                    <h1>HEART ATTACK</h1>
                    <p>A myocardial infarction (MI), commonly known as a heart attack, occurs when blood flow decreases or stops to a part of the heart, causing damage to the heart muscle. The most common symptom is chest pain or discomfort which may travel into the shoulder, arm, back, neck or jaw. </p>
                    <Link to=""><button className="btn"><i className="fa fa-eye" aria-hidden="true"></i><FaEye/>VIEW
                    </button></Link>
            </div>
            <div className="right-content">
                <h1>HEART ATTACK</h1>
                <div className="video">
                <ReactPlayer width="300" height="250" url="https://www.youtube.com/watch?v=QllguanpKic"/></div>
            </div>
        </div>
        <div className="footer">
            <ul className="footer_ul">
                <li className="li_items"><a className="link_items" href="#">HOME</a></li>
                <li className="li_items"><a className="link_items"href="#">POSTS</a></li>
                <li className="li_items"><a className="link_items"href="#">QUESTIONS</a></li>
                <li className="li_items"><a className="link_items"href="#">SERVICES</a></li>
                <li className="li_items"><a className="link_items"href="#">CONTACT</a></li>
            </ul>
        </div>
        </div>
        
    </div>

    );
    }
    }
export default Home;