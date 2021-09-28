import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from '../firebase';
import SideNavigation from './PatientSideNavBar';



export default function FileUpload() {  // Admin upload a file 
  const [doctor, setDoctor] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeDoctor = (e) => {
    setDoctor(e.target.value);
    console.log(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const onSubmit = () => {
  //   let formdata = new FormData();
  //   formdata.append('itemtype', itemtype);
  //   formdata.append('size', size);
  //   formdata.append('image', selectedFile, selectedFile.name);
  //   console.log(itemtype);

  //   axios
  //     .post('http://localhost:3001/template/add', formdata) // upload the file and add to the template collection in mongo db
  //     .then((res) => {
  //       alert(res.data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const onSubmit = () => {
    if (selectedFile === null) {
      alert('Please upload the File');
    } else {
      let bucketName = 'question';
      let file = selectedFile;
      let storageRef = firebase
        .storage()
        .ref(`${bucketName}/${selectedFile.name}`);
      let uploadTask = storageRef.put(file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
        let downloadURL = uploadTask.snapshot.downloadURL;
      });

      let storageRefrence = firebase.storage().ref();
      let spaceRef = storageRefrence.child(
        'question/' + selectedFile.name
      );
      storageRefrence
        .child('question/' + selectedFile.name)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          //setUrl(url);

          console.log(url);

          const fileTemplate = {
            doctor: doctor,
            email: email,
            url: url,
          };
          console.log(fileTemplate);

          axios
            .post('http://localhost:3001/template/add', fileTemplate)
            .then((res) => {
              alert(res.data.message);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  };

  return (  // get the structure of uploding a file
    <div id="main">
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
<SideNavigation/>

        <div
         class='form-group w-25'
         className='shadow p-5'
         style={{ width: '55rem', height:'33rem',
         backgroundColor: "#c2c2d6",
         marginLeft:500,
         marginTop:-450,
        paddingTop: 50 }}
        >
          <h3 className = 'header2'>
            <center>UPLOAD REPORT</center>
          </h3>
          <br></br>
          <div>
            <br />
            <br />
            <label>Choose Image: </label>{' '}
            <input type='file' onChange={(e) => fileSelectedHandler(e)} />
            <br />
            <br />
          </div>

          <label class='float-left'>
            <span>Doctor Name</span>
          </label>

          <input
            name='item'
            type='text'
            required
            placeholder="Enter File Type"
            className='form-control'
            placeholder='Enter Your Doctor name'
            value={doctor}
            onChange={(e) => onChangeDoctor(e)}
          />

          <label class='float-left'>
            <span>Patient Email</span>
          </label>

          <input
            name='price'
            type='text'
            required
            placeholder="Enter Patient Email Address"
            className='form-control'
            value={email}
            onChange={(e) => onChangeEmail(e)}
          />
          <br/>
          <div className='form-group'>
            <span> </span>{' '}
            <button className='btn btn-danger' onClick={() => onSubmit()}>
              SAVE FILE{' '}
            </button>
          </div>
        </div>
        </div>
        </div>
      </center>
      <br>
      </br>
    </div>
  );
}
