/* 
import OIP from '../images/OIP.jpg';
import logo from '../images/logo.png';
import React, {Component} from 'react';
import axios from 'axios';
function ResetPassword() {
    return (
        <div>
            <h1>reset password</h1>


    export default class Reset_Password extends Component{ 
    constructor(props){
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPasswrd = this.onChangeConfirmPasswrd.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            Email: '',
            password:'',
            confirmPassword:''
        }
    }
    onChangeEmail(e){
        this.setState({
            Email:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
    onChangeConfirmPasswrd(e){
        this.setState({
            confirmPassword:e.target.value
        });
    }
    onsubmit(e){
        e.preventDefault();
        const obj= {
            Email : this.state.Email,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword
        };
        axios.post('https://icaf2021we36.herokuapp.com/conference/add',obj).then(res=>{alert("Successfull")}); // add the conference details to mongo db
        
        
    }
    render(){
return (
    <div id="main"> 
    <div className="container">

<div>
<div
class='form-group w-25'
className='shadow p-5'
style={{ width: '96rem', height:'7rem',
backgroundColor: "#c2c2d6",
marginTop:1,
marginLeft:-120,
paddingTop: 50 }}
>     

        <div class="logo">
                <img src={logo} alt="logo"/>
        </div>
        <div class="OIP">
                <img src={OIP} alt="OIP"/>
        </div>
        <div
     class='form-group w-25'
     className='shadow p-5'
     style={{ width: '40rem', height:'36rem',
     backgroundColor: "#c2c2d6",
     marginLeft:700,
     marginTop:-650,
    paddingTop: 50 }}
   >     
        <div style={{marginTop:10}}>
          <h3 className = 'header2'> <center>FORGOT PASSWORD </center></h3>
          <br></br>
             <form onSubmit={this.onsubmit}>
                 <div className="form-group">
                 <label> Enter Email Address</label>
                     <input type="text"
                            required
                            placeholder="Enter Email Address"
                            className="form-control"
                            value={this.state.patient_name}
                            onChange={this.onChangePatientName} />
                 </div>
<br></br>
                 <div className="form-group">
                     <label> Enter New Passowrd </label>
                     <input type="password" 
                            required
                            placeholder="Enter New Password"
                            className="form-control"
                            value={this.state.contactNo}
                            onChange={this.onChangeContactNo}/>
                 </div>
<br></br>
                 <div className="form-group">
                     <label> Confirm Passowrd </label>
                     <input type="password" 
                            required
                            placeholder="Confirm Password"
                           className="form-control"
                           value={this.state.Email}
                            onChange={this.onChangeEmail}/>
                 </div>
                  <br></br>
                  <br></br>
                  <center>
                 <div className="form-group">
                     <input type="submit" value="SAVE" className="btn btn-danger"/>
                 </div>
                 </center>
             </form>
         </div>

        </div>
        </div>
        </div>
        </div>
        </div>
        );
}


 */