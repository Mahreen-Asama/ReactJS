import logo from './logo.svg';
import './App.css';
import { useCallback } from 'react';
import App from './App';

function Student(props){
    console.log(props);           //got object of props
  return(
    <div className="App">
      <h5>{props.name}</h5>
      <h5>{props.email}</h5>
      <h5>{props.others.age}</h5>
      <h5>{props.others.address}</h5>
      </div>
  );
}

export default Student;