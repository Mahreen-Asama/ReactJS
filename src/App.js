import logo from './logo.svg';
import './App.css';
import User from './User'       // to use any component, we need to import it
import {User2} from './User'
import {User3} from './User'
import {useState} from 'react' //useState is a hook, that allows us to maintain state/update state etc.

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

      <h1>Counter with class component: {data}</h1>        
      <button onClick={updateData}>Counter +</button>
    </div>
  );
}

export default App;
