import React, {Component} from 'react';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios'
import logo from '../images/logo.png';
import validator from 'validator'


function Login (){
    const history =useHistory();
    const loginHandler = () =>{
        const consultant_email = "sureni@gmail.com";
        const consultant_password = "sureni123";
        const patient_email = "nethmi@gmail.com";
        const patient_password = "nethmi123";
        const appointment_email = "sanduni@gmail.com";
        const appointment_password = "sanduni123";

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value; 

        if((email == consultant_email) && (password == consultant_password)){
        if (validator.isEmail(email)) {
            history.push("/view");

          } else {
            alert('Enter valid Email!')
          }
        }else if((email == patient_email) && (password == patient_password)){
            if (validator.isEmail(email)) {
                alert('Valid Email :)')
                history.push("/ViewPatients");
              } else {
                alert('Enter valid Email!')
              }
           
        }else{
            if (validator.isEmail(email)) {
                alert('Valid Email :)')
                history.push("/ViewPatients");
              } else {
                alert('Enter valid Email!')
              }
            
        }
    
    }

    return (
        <div className="content">
           <div className="container">
                <div className="logo">
                        <img src={logo} alt="logo"/>
                </div>
                <div className="navbar">
                    <div className="home">
                        <Link to="/"><button className="btn"><i className="fa fa-home" aria-hidden="true"></i><FaHome/>HOME
                        </button></Link>
                    </div>
                </div>
            </div>
            <div className="login-content">
                <img/>
                <h3>LOGIN</h3>
                <input type="text" placeholder="Email" id="email"  required></input>
                <input type="password" placeholder="Password" id="password" required></input>
                <button className="btn" onClick={loginHandler}><i className="fa fa-sign" aria-hidden="true"></i><FaSignInAlt/>LOGIN
                </button>
                <div className="login_links">
                    <ul className="ul_links">
                        <Link to="/register"><li className="li_links"><a className="link_items" href="#">Need To Register Now?</a></li></Link>
                        <Link to="/reset"><li className="li_links"><a className="link_items"href="#">Forgot Password?</a></li></Link>
                    </ul>
                </div>
            </div>
          
      </div>
  );
    }

export default Login;