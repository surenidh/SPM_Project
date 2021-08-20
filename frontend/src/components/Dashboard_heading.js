import React from 'react'
import '../styles/dashboard_heading.css';
import logo from '../images/logo.png';


function Dashboard_heading() {
    return (
        <div className="heading_dashboard">
            <div className="header_top">
                <div className="header_logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard_heading
