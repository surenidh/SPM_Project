import React, { Component } from 'react';
import axios from 'axios';
import heartImage from '../images/heart image.jpg';
import { FaEdit, FaFilePdf, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/viewData_consultant.css';

export default class ViewData extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get("http://localhost:3001/posts/get/${id}").then(()=>{
            alert("Data Saved Successfully")

        })
            
        
        
        /*(res)=>{
            if(res.data.success){
                this.setState({
                    posts:res.data.posts
                });
                alert(this.posts);
            }
        });*/
    }

    render() {
        
        const {title, image, description,url} = this.state.posts;
        return (
            <div className="container_view">
                <form className="form-group">
                <h1>Heart Attack</h1>
                <img src={heartImage}/>
                <p>A heart attack happens when the flow of oxygen-rich blood in one or more of the coronary arteries, which supply 
                the heart muscle, suddenly becomes blocked, and a section of heart muscle can’t get enough oxygen. The blockage is 
                usually caused when a plaque ruptures. If blood flow isn’t restored quickly, either by a medicine that dissolves the 
                blockage or a catheter placed within the artery that physically opens the blockage, the section of heart muscle begins
                to die.If you or someone you know might be having a heart attack, call 9-1-1 right away. Also call 9-1-1 if you are 
                taking prescription drugs for angina (chest pain) and the pain doesn’t go away as usual after you take the medication. 
                You need to take an ambulance to the hospital as soon as possible. Do not try to drive yourself, and do not have someone else drive you unless there is no ambulance service where you live. While waiting for the ambulance, the patient can be given
                 one regular strength or baby aspirin and told to chew and swallow it if possible.
                The sooner you get to a hospital, the more emergency medical professionals can do to stop any heart damage and prevent
                 deadly heart rhythm problems, heart failure, and death. If blood flow in the blocked artery can be restored quickly, 
                 permanent heart damage may be prevented. Yet, many people do not seek medical care for 2 hours or more after symptoms 
                 start.The good news is that excellent treatments are available for heart attacks. These treatments—which work best
                  when given right after symptoms occur—can save lives and prevent disabilities.
                </p>
                <Link to="/edit" className="btn btn-danger"><i className="fa fa-edit" aria-hidden="true"></i><FaEdit/>EDIT
                </Link>
                <Link to="/postReport" className="btn btn-danger"><i className="fa fa-FaFilePdf" aria-hidden="true"></i><FaFilePdf/>GENERATE REPORT
                </Link>
                <Link to="/view" className="btn btn-danger"><i className="fa fa-home" aria-hidden="true"></i><FaHome/>HOME
                </Link>
                </form>
            </div>
        )
    }
}
