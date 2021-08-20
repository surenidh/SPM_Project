import React from 'react'
import '../styles/SideNavigation.css';

function SideNavigation() {
    return (
        <div className="sideNavigation">
            <nav className="nav_sideNavigation">
                <ul className="ul_SideNavigation">
                    <li ><a className="current" href="/add" >POSTS</a></li>
                    <li className=""><a href="/view">VIEW UPLOADS</a></li>
                    <li className=""><a href="/viewQuestions">VIEW QUESTIONS</a></li>
                    <li className=""><a href="#">VIEW APPOINTMENTS</a></li>
                    <li className=""><a href="#">SERVICES</a></li>
                    <li className=""><a href="#">LOGOUT</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default SideNavigation;
