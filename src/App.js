import logo from './logo.svg';
import './App.css';
import User from './User'       // to use any component, we need to import it
import {User2} from './User'
import {User3} from './User'

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <User/>
      <User2/>
      <User3/>
    </div>
  );
}

export default App;
