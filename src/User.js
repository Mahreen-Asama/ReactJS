import logo from './logo.svg';
import './App.css';
import { useCallback } from 'react';
import React,{useState,Component} from 'react';
import {GrandChild} from './Student';

//class component

var var1=20*2

export class User3 extends Component
{
  render(){
    return(
      <div>
        class {var1} component
        <hr></hr>
      </div>
    )
  }
}

function User() {
  return (
    <div className="App">
      <h1>users</h1>
      <hr></hr>
    </div>
  );
}

// to use, we need to export
export default User;

export function User2() {
  return (
    <div className="App">
      <h1>users 2</h1>
      <hr></hr>
    </div>
  );
}

//Profile component to check if-else conditions
export function Profile(){
  const[loggedIn,setLoggedIn]=useState(true);
  const[number,setNumber]=useState(3);

  return(
    <div className="profile">
      {
        loggedIn?                               //if-else
        <h1>Logged in true</h1>
        :<h1>Logged in false</h1>
      }
      {
        number==1? <h1>Number is 1</h1>         //if-elseif-else
        :number==2? <h1>number is 2</h1>
        :<h1>Number is 3</h1>
      }
      <hr></hr>
    </div>
  );
}

//child component which receives 'function' as props
export function Child(pro){
  function f2(){
    alert('hello from child')
  }
  return(
    <div>
      <GrandChild data={f2}/>
      <button onClick={pro.data}>Call function from parent</button>
      <hr></hr>
    </div>
  );
}