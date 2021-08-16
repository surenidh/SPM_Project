import React from 'react'
import '../styles/SideNavigation.css';

function SideNavigation() {
    return (
        <div className="sideNavigation">
            <nav className="nav_sideNavigation">
                <ul className="ul_SideNavigation">
                    <li ><a class="current" href="#" >POSTS</a></li>
                    <li className=""><a href="#">VIEW UPLOADS</a></li>
                    <li className=""><a href="#">VIEW QUESTIONS</a></li>
                    <li className=""><a href="#">VIEW APPOINTMENTS</a></li>
                    <li className=""><a href="#">SERVICES</a></li>
                    <li className=""><a href="#">LOGOUT</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default SideNavigation;
