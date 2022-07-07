import logo from './logo.svg';
import './App.css';
import { useCallback } from 'react';

//class component
import React,{Component} from 'react'

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