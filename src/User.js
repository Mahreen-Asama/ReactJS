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
      <div>class {var1} component</div>
    )
  }
}

function User() {
  return (
    <div className="App">
      <h1>users</h1>
    </div>
  );
}

// to use, we need to export
export default User;

export function User2() {
  return (
    <div className="App">
      <h1>users 2</h1>
    </div>
  );
}