import logo from './logo.svg';
import './App.css';
import User from './User'       // to use any component, we need to import it
import {User2} from './User'
import {User3} from './User'

function App() {
  // let name='Mahreen'

  function apple(){
    alert('function call');
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
    </div>
  );
}

export default App;
