import React from 'react'
import '../styles/SideNavigation.css';

function PatientSideNavigation() {
    return (
        <div className="sideNavigation" style={{marginTop:60 }}>
            <nav className="nav_sideNavigation">
                <ul className="ul_SideNavigation">
                    <li></li>
                    <li ><a class="current" href="/AddQuestion" >ADD QUESTIONS</a></li>
                    <li className=""><a href="/ViewPatients">VIEW QUESTIONS</a></li>
                    <li className=""><a href="#">VIEW APPOINTMENTS</a></li>
                    <li className=""><a href="#">LOGOUT</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default PatientSideNavigation;
