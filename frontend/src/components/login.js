import React, {Component} from 'react';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

class Login extends Component {
    
    render() {
    return (
        <div className="content">
           <div class="container">
                <div class="logo">
                        <img src={logo} alt="logo"/>
                </div>
                <div class="navbar">
                    <div class="home">
                        <Link to="/"><button class="btn"><i class="fa fa-home" aria-hidden="true"></i><FaHome/>HOME
                        </button></Link>
                    </div>
                </div>
            </div>
            <div class="login-content">
                <img/>
                <h3>LOGIN</h3>
                <input type="text" placeholder="Email" required></input>
                <input type="password" placeholder="Password" required></input>
                <Link to="/sideNavigation"><button class="btn" onSubmit><i class="fa fa-sign" aria-hidden="true"></i><FaSignInAlt/>LOGIN
                </button></Link>
                <div class="login_links">
                    <ul class="ul_links">
                        <Link to="/register"><li class="li_links"><a class="link_items" href="#">Need To Register Now?</a></li></Link>
                        <Link to="/reset"><li class="li_links"><a class="link_items"href="#">Forgot Password?</a></li></Link>
                    </ul>
                </div>
            </div>
          
      </div>
  );
    }
}
export default Login;