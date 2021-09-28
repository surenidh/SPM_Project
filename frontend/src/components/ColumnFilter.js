import React, { Component } from 'react';
const ColumnFilter = (props) => {
        return (
            <input type= "search" className="search" placeholder={props.placeholder} onChange ={props.handleChange}/>
        ) 
}

export default ColumnFilter;