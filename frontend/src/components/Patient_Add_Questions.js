import React, {Component} from 'react';
import axios from 'axios';
import { FaQuoteLeft } from 'react-icons/fa';
//import { Height } from '@material-ui/icons';
import '../styles/AddPatient.css';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';

export default class AddPatientDetails extends Component{ 

    constructor(props){
        super(props);
        this.onChangePatientName=this.onChangePatientName.bind(this);
        this.onChangeContactNo=this.onChangeContactNo.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTitle = this.onChangeEmail.bind(this);
        this.onChangeQuestion = this.onChangeEmail.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            patient_name: '', 
            contactNo: '',
            Email: '',
            title:'',
            question:''
        }
    }
    onChangePatientName(e){
        this.setState( {
            patient_name: e.target.value
        });
    }
    onChangeContactNo(e){
        this.setState({
            contactNo:e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            Email:e.target.value
        });
    }
    onChangeTitle(e){
        this.setState({
            title:e.target.value
        });
    }
    onChangeQuestion(e){
        this.setState({
            question:e.target.value
        });
    }
    onsubmit(e){
        e.preventDefault();
        const obj= {
            patient_name : this.state.patient_name,
            contactNo : this.state.contactNo,
            Email : this.state.Email,
            title : this.state.title,
            question : this.state.question
        };
        axios.post('https://icaf2021we36.herokuapp.com/conference/add',obj).then(res=>{alert("Successfull")}); // add the conference details to mongo db
        
        
    }
// get the table structure for add conference details
render(){
    return(
        
        <div>
            <br></br> <br></br> <br></br>
        <center>
        <div
     class='form-group w-25'
     className='shadow p-5'
     style={{ width: '96rem', height:'7rem',
     backgroundColor: "#c2c2d6",
     marginTop:-73,
    paddingTop: 50 }}
   >     

                <div class="logo">
                        <img src={logo} alt="logo"/>
                </div>
                <br></br><br></br><br></br><br></br><br></br>
        <div className="dashboard">
<h2 className = 'header2'> <screenLeft>PATIENT DASHBOARD</screenLeft></h2>
</div>
        <div
     class='form-group w-25'
     className='shadow p-5'
     style={{ width: '40rem', height:'36rem',
     backgroundColor: "#c2c2d6",
     marginLeft:600,
     marginTop:50,
    paddingTop: 50 }}
   >     

        <div style={{marginTop:10}}>
          <h3 className = 'header2'> <center>ADD QUESTIONS </center></h3>
          <br></br>
             <form onSubmit={this.onsubmit}>
                 <div className="form-group">
                 <label> </label>
                     <input type="text"
                            required
                            placeholder="Enter Patient Name"
                            className="form-control"
                            value={this.state.patient_name}
                            onChange={this.onChangePatientName} />
                 </div>

                 <div className="form-group">
                     <label>  </label>
                     <input type="text" 
                            required
                            placeholder="Enter Contact No"
                            className="form-control"
                            value={this.state.contactNo}
                            onChange={this.onChangeContactNo}/>
                 </div>

                 <div className="form-group">
                     <label>  </label>
                     <input type="text" 
                            required
                            placeholder="Enter Email Address"
                           className="form-control"
                           value={this.state.Email}
                            onChange={this.onChangeEmail}/>
                 </div>

                 <div className="form-group">
                     <label>  </label>
                     <input type="text" 
                            required
                            placeholder="Enter Title"
                           className="form-control"
                           value={this.state.title}
                            onChange={this.onChangeTitle}/>
                 </div>

                 <div className="form-group">
                     <label>  </label>
                     <input type="text" 
                            required
                            placeholder="Enter Your Questions"
                           className="form-control"
                           value={this.state.question}
                            onChange={this.onChangeQuestion}/>
                 </div>
                 <br></br>
                 <div className="form-group">
                     <input type="submit" value="Upload Report" className="btn btn-primary"/>
                 </div>
                  <br></br>
                 <div className="form-group">
                     <input type="submit" value="SAVE" className="btn btn-danger"/>
                 </div>
                
             </form>
         </div>
         </div>
         </div>
        </center>
</div>
    )
}
}