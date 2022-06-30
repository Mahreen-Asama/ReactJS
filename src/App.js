import logo from './logo.svg';
import './App.css';
import User from './User'       // to use any component, we need to import it
import {User2} from './User'
import {User3} from './User'
import React,{useState, Component} from 'react' //useState is a hook, that allows us to maintain state/update state etc.
import Student from './Student';

//props in functional component
function App3(){
  return(
    <div className="App">
      <Student name="ali" email="ali@gmail.com" others={{age:12, address:"lahore"}} />
      <Student name={"ahmad"} email="ahmad@gmail.com" others={{age:12, address:"lahore"}} />
      <Student name={"saad"} email="saad@gmail.com" others={{age:12, address:"lahore"}} />
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
      </div>
    )
  }
}

// States in Funcctional Component
function App() {
  const [data,setData]=useState(0);   //de-structure(extracting out parameters of this hook) this hook

  function apple(){
    alert('function call');
  }
  function updateData(){
    setData(data+1);          //get previous state value + 1
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <User/>
      <User2/>
      <User3/>
      <button onClick={()=>alert('direct alert')}>button 1</button>
      <button onClick={()=>apple()}>button 2</button>
      <button onClick={apple}>button 3</button>

      <h1>Counter with functional component: {data}</h1>    
      <button onClick={updateData}>Counter +</button>
      <App2/>
      <App3/>
    </div>
  );
}

export default App;
