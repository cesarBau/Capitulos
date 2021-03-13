import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import {Axios} from './componets/axios'

const URL='https://rickandmortyapi.com/api/character?page=1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Axios url={URL}/>
      </header>
    </div>
  );
}

export default App;
