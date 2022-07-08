import logo from './logo.svg';
import './App.css';
import { useCallback } from 'react';
import App from './App';
import React, { Component } from 'react';

//life cycle methods in class components
export class LifeCycleMethods extends Component{
    constructor(){
        super();
        console.log('construotr');
        this.state={
            data:"data",
            data2:"data2"
        }
    }
    render() {
        console.log('render');
        return (
            <div className="App">
                <h1>Hello states: {this.state.data},{this.state.data2}</h1>
                <button onClick={()=>this.setState({data:"up",data2:"up2"})}>update state</button>
                <h1>Hello props: {this.props.name}</h1>
            </div>
        )
    }
}

//props in class components
export class Student2 extends Component {
    render() {
        return (
            <div className="App">
                <h5>{this.props.name}</h5>
                <h5>{this.props.age}</h5>
                <h5>{this.props.others.age}</h5>
                <h5>{this.props.others.address}</h5>
            </div>
        )
    }
}

export function Student(props) {
    console.log(props);           //got object of props
    return (
        <div className="App">
            <h5>{props.name}</h5>
            <h5>{props.email}</h5>
            <h5>{props.others.age}</h5>
            <h5>{props.others.address}</h5>
        </div>
    );
}

//for super-child, pass function as props
export function GrandChild(props){
    return(
        <div>
            <button onClick={props.data}>Call from child</button>
        </div>
    )
}