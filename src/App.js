import logo from './logo.svg';
import './App.css';
import User from './User'       // to use any component, we need to import it
import {User2} from './User'
import {User3} from './User'
import React,{useState, Component} from 'react' //useState is a hook, that allows us to maintain state/update state etc.
import {Student} from './Student';
import {Student2} from './Student';
import {Form} from './Form';
import {Profile} from './User';
import {Child} from './User';

//props in functional component
function App3(){
  return(
    <div className="App">
      <Student name="ali" email="ali@gmail.com" others={{age:12, address:"lahore"}} />
      <Student name={"ahmad"} email="ahmad@gmail.com" others={{age:12, address:"lahore"}} />
      <Student name={"saad"} email="saad@gmail.com" others={{age:33, address:"lahore"}} />
      <hr></hr>
    </div>
  );
}
//props in class component
function App4(){
  return(
    <div className="App">
      <Student2 name="ali" age="34" others={{age:12, address:"lahore"}}/>
      <Student2 name="ali" age="55" others={{age:12, address:"lahore"}}/>
      <Student2 name="ali" age="34" others={{age:12, address:"lahore"}}/>
      <hr></hr>
    </div>
  );
}

//States in class component
class App2 extends Component{
  constructor(){
    super();
    this.state={
      data:0           //data initialized to zerpo
    }
  }
  updateData(){
    this.setState({data:this.state.data+1});
  }
  render()
  {
    return(
      <div className="App">
        <h1>Counter with class component: {this.state.data}</h1>        
        <button onClick={()=>this.updateData()}>Counter +</button>
        <hr></hr>
      </div>
    )
  }
}
// States in Funcctional Component
function App1() {
  const [data,setData]=useState(0);   //de-structure(extracting out parameters of this hook) this hook

  function updateData(){
    setData(data+1);          //get previous state value + 1
  }
  return (
    <div className="App">
      <h1>Counter with functional component: {data}</h1>    
      <button onClick={updateData}>Counter +</button>
      <hr></hr>
    </div>
  );
}

//main component, running all components
function App() {
  const [inputValue,setData]=useState(null);    //for input field, onChange
  const [input,printData]=useState(false);    //for input field, onCLick, (a boolean variable/state)
  const [status,setStatus]=useState(true); 

  function apple(){
    alert('function call');
  }
  function getData(val){
    console.log(val);
    setData(val.target.value);
  }
  function func(){
    alert('hello from parent');
  }
  return (
    <div className="App">
      <Child data={func}/> 
      <Profile/>
      <Form/>
      <h1>{inputValue}</h1>
      {
        input?              //if this variable is true, print value, else null (Ternary statement)
        <h1>{inputValue}</h1>
        :null
      }
      <input type="text" onChange={getData}/>
      <button onClick={()=>printData(true)}>Print Value</button>
      {
        status? <h1>Hello world</h1>:null
      }
      <br></br>
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      <User/>
      <User2/>
      <User3/>
      <button onClick={()=>alert('direct alert')}>button 1</button>
      <button onClick={()=>apple()}>button 2</button>
      <button onClick={apple}>button 3</button>
      <App1/>
      <App2/>
      <App3/>
      <App4/>
    </div>
  );
}

export default App;
