// import React, { useState } from 'react';
// import axios from 'axios';
// import firebase from '../firebase';
// export default function PModal(props) {
//   const { title, openPopup, setOpenPopup } = props;

//   const [ppatient_name, setName] = useState(' ');
//   const [Email, setEmail] = useState(' ');
//   const [contactNo, setPhone] = useState(' ');
//   const [ptitle, setTitle] = useState(' ');
//   const [question, setQuestion] = useState('');
//   const [url, setUrl] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const onChangePhone = (e) => {
//     setPhone(e.target.value);
//   };

//   const onChangeTitle = (e) => {
//     setTitle(e.target.value);
//   };

//   const onChangeQuestion = (e) => {
//     setQuestion(e.target.value);
//   };

//   const fileSelectedHandler = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const onSubmit = () => {
//     if (selectedFile === null) {
//       alert('Please upload the workshop proposal');
//     } else {
//       let bucketName = 'question';
//       let file = selectedFile;
//       let storageRef = firebase
//         .storage()
//         .ref(`${bucketName}/${selectedFile.name}`);
//       let uploadTask = storageRef.put(file);
//       uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
//         let downloadURL = uploadTask.snapshot.downloadURL;
//       });

//       let storageRefrence = firebase.storage().ref();
//       let spaceRef = storageRefrence.child(
//         'question/' + selectedFile.name
//       );
//       storageRefrence
//         .child('question/' + selectedFile.name)
//         .getDownloadURL()
//         .then((url) => {
//           console.log(url);
//           //setUrl(url);

//           console.log(url);

//           const patient = {
//             patient_name : ppatient_name,
//             contactNo : contactNo,
//             Email : Email,
//             title : ptitle,
//             question : question,
//             url: url,
//           };
//           console.log(patient);

//           axios
//             .post('http://localhost:3001/patient/add', patient)
//             .then((res) => {
//               alert(res.data.message);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         });
//     }
//   };

//   return (

//       <div class='form-group w-25' className='shadow p-5'>
//         <center>
//         </center>
//         <br />
//         <br />
//         <label class='float-left'>
//           <span>Name:</span>
//         </label>

//         <input
//           name='name'
//           type='text'
//           className='form-control'
//           placeholder='123-45-678'
//           value={ppatient_name}
//           onChange={(e) => onChangeName(e)}
//         />

//         <label class='float-left'>
//           <span>Email:</span>
//         </label>

//         <input
//           name='email'
//           type='text'
//           className='form-control'
//           value={Email}
//           onChange={(e) => onChangeEmail(e)}
//         />

//         <div className='form-group'>
//           <label class='float-left'>Phone:</label>
//           <input
//             name='phone'
//             type='text'
//             className='form-control'
//             value={contactNo}
//             onChange={(e) => onChangePhone(e)}
//           />
//         </div>

//         <div className='form-group'>
//           <label class='float-left'>Paper Title:</label>
//           <input
//             name='title'
//             type='text'
//             className='form-control'
//             value={ptitle}
//             onChange={(e) => onChangeTitle(e)}
//           />
//         </div>

//         <div className='form-group'>
//           <label class='float-left'>Date:</label>
//           <input
//             name='date'
//             type='text'
//             placeholder='DD/MM/YY'
//             className='form-control'
//             value={question}
//             onChange={(e) => onChangeQuestion(e)}
//           />
//         </div>

//         <div>
//           <label>Upload Proposal: </label>{' '}
//           <input type='file' onChange={(e) => fileSelectedHandler(e)} />
//           <br />
//           <br />
//         </div>

//         <center>
//           <div className='form-group'>
//             <span> </span>{' '}
//             <button className='btn btn-dark' onClick={() => onSubmit()}>
//               Sign Up{' '}
//             </button>
//           </div>
//         </center>
//       </div>
//   );
// }
