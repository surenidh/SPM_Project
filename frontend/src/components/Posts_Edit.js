import React, { Component } from 'react'
import Dashboard_heading from './Dashboard_heading'
import SideNavigation from './SideNavigation'
import 'bootstrap/dist/css/bootstrap.css';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import {Link} from 'react-router-dom'

import '../styles/dashboard_consultant.css';

class Posts_Edit extends Component {

    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);

        this.state = {
            title:'',
            image:'',
            description:'',
            url:''
        }
    }

    onChangeTitle(e){
        this.setState({
            title:e.target.value
        });
    }

    onChangeImage(e){
        this.setState( {
            image: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState( {
            description: e.target.value
        });
    }
 
    onChangeUrl(e){
        this.setState({
            url: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
      
        const obj = {
          title: this.state.title,
          image: this.state.image,
          description:  this.state.description,
          url:  this.state.url
        };

      axios.post('http://localhost:3001/uploadposts/add', obj).then(res => console.log(res.data));
      
      this.setState ({
        title:" ",
        image:" ",
        description:" ",
        url:" "
    })
    }

    loadPost = async () =>{
        const result = await axios.get('http://localhost:3001/uploadposts/add')
    }

    render(){
    return (
        <div className="container">
            <Dashboard_heading/>
            <div className="heading">
                    <h2>Consultant Dashboard</h2>
                </div>
            <div className="content">
                <div className="sidebar">
                    <SideNavigation/>
                </div>
               
                <form onSubmit={this.onSubmit.bind(this)}>
                    <h3>ADD POSTS</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} name="title" placeholder="Type Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <div className="input-group mb-3">
                            <input type="file"  className="form-control" value={this.state.image} onChange={this.onChangeImage} placeholder="Browse Image" name="image"/>
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control" value={this.state.description} onChange={this.onChangeDescription} id="description" placeholder="Type Description" name="description"></textarea>
                    </div>
                    <div className="form-group">
                    <label htmlFor="url">Url</label>
                        <div className="input-group mb-3">
                            <input type="file"  className="form-control" value={this.state.url} onChange={this.onChangeUrl} placeholder="Browse Url" name="url" />
                           
                        </div>
                    </div>
                    <Link to="/dashboard_view" className="btn btn-primary"><i className="fa fa-save" aria-hidden="true"></i><FaSave/>SAVE</Link>
                </form>
            </div>
        </div>
       
    )
}
}

export default Posts_Edit;
