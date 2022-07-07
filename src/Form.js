import logo from './logo.svg';
import './App.css';
import { useCallback } from 'react';
import App from './App';
import React, { Component,useState} from 'react';

export function Form(){
    const[name,setName]=useState(null);     //one state for one variable
    const[movie,setMovie]=useState(null);
    const[terms,setTnc]=useState(false);

    function getFormData(e){
        console.log(name,movie,terms);
        e.preventDefault();             //to prevent page from reloading when form is submitted
    }
    return(
        <div className="App">
            <h1>This is form</h1>
            <form onSubmit={getFormData}>
                <input type="text" onChange={(e)=>setName(e.target.value)}/> <br></br>
                <select onChange={(e)=>setMovie(e.target.value)}>
                    <option>Select Movie</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select> <br></br>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and conditions</span><br></br>
                <input type="submit" value="Submit"/>
            </form>
            <hr></hr>
        </div>
    );
}