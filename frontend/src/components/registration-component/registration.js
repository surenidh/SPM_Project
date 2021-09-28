
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from '../../images/reset.jpg';
import Home1 from '../registrationdesign/registrationdesign';
import 'font-awesome/css/font-awesome.min.css';


function useWindowsize(){

    const [size,setsize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const handleResize = () => {
        setsize([window.innerHeight,window.innerWidth]);
      };
      window.addEventListener("resize", handleResize);
      return() => {
        window.removeEventListener("resize",handleResize);
      };
    }, [])
    return size;
  }


export default function Registration() {

    const [height, width] = useWindowsize();
    const [name, setname] = useState(' ');
    const [contactdetails, setcontactdetails] = useState(' ');
    const [email, setemail] = useState(' ');
    const [password, setpassword] = useState(' ');
    const [confirmPassword, setconfirmPassword] = useState(' ');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealPwd1, setIsRevealPwd1] = useState(false);
    
    const onSubmit = () => {
      const details = {
        name: name,
        contactdetails: contactdetails,
        email: email,
        password: password,
        confirmPassword:confirmPassword
        
      };
      if(password === confirmPassword) {

        axios.post('http://localhost:3001/api/account/add', details).then((response) => {
          if (response.data.success) {
            alert('Successfully Added');
          } else {
            alert('Not Successfully Added');
          }
        });
              
        } else {
            alert('Not Added');
        }
  
    };
    const onChangename = (e) => {
      setname(e.target.value);
      console.log(e.target.value);
    };
  
    const onChangecontactdetails = (e) => {
      setcontactdetails(e.target.value);
    };
  
    const onChangeemail = (e) => {
      setemail(e.target.value);
    };
  
    const onChangepassword = (e) => {
      setpassword(e.target.value);
    };
    const onChangeconfirmPassword = (e) => {
      setconfirmPassword(e.target.value);
    };

    
    

 

  return (
    
  
     <div>
         <Home1/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
    
  <div class="row" style={{ width: width * (5/5), background:'#FFFFFF'}}>
  <div class="col-sm-6">
  

   
      <img src={image} alt="Write something here" width="100%" height = "80%" border-color="transparent" />
      
    
  </div>
  <div class="col-sm-6">
    
      <u> <h4 class="card-title">User Registration</h4></u> 
        <br></br>
        <form>
        <b><label for="name">Name</label></b>
        <input type="name" 
        class="form-control" 
        type='text'
        value={name}
        onChange={(e) => onChangename(e)}
        placeholder="Enter Name" />
        <br></br>


        <b><label for="contactdetails">Contact Details</label></b>
        <input type="contactdetails" 
        class="form-control" 
        type='text'
        value={contactdetails}
        onChange={(e) => onChangecontactdetails(e)}
        placeholder="0771791658" />
        <br></br>


        <b><label for="email">Email</label></b>
        <input type="email" 
        class="form-control" 
        type='text'
        value={email}
        onChange={(e) => onChangeemail(e)}
        placeholder="acv@gmail.com" />
        <br></br>


        
        <b><label for="password">Password</label></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i 
        class="fa fa-eye" aria-hidden="true"
        onClick={() => setIsRevealPwd(prevState => !prevState)}
        ></i>
        <input type="password" 
        class="form-control" 
        type={isRevealPwd ? "text" : "password"}
        value={password}
        onChange={(e) => onChangepassword(e)}
        placeholder="568811"/>
        
        
       
        <br></br>
        <b><label for="confirmPassword">Confirm Password</label></b>&nbsp;&nbsp;&nbsp;&nbsp;<i 
        class="fa fa-eye" aria-hidden="true"
        onClick={() => setIsRevealPwd(prevState => !prevState)}
        ></i>
        <input type="confirmPassword" 
        class="form-control" 
        type={isRevealPwd ? "text" : "password"}
        value={confirmPassword}
        onChange={(e) => onChangeconfirmPassword(e)}
        placeholder="568811" />

<br></br>
<div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label class="form-check-label" for="invalidCheck2">
      <b> Agree to terms and conditions</b> 
      </label>
      </div>
      </div>


  <br></br>
  <br></br>
            <span> </span>{' '}
            <button className='btn btn-danger btn-lg' onClick={() => onSubmit()}>
             <b> Register</b>{' '}
            </button>
           
        

        </form>
        
      </div>
    </div>
  </div>

        
       
           
  );

}
