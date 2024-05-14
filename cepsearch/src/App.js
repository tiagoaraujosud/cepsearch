import { FiSearch } from 'react-icons/fi'
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Zip Code</h1>

      <div className='containerInput'>
        <input
          type="text"
          placeholder="Type your Zip code(Brazil only)"
        />

        <button className='buttonSearch'>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      <main className='main'>
        <h2>Zip Code: 89651321</h2>

        <span>Street Test</span>
        <span>Complement: Some Complement</span>
        <span>Utah</span>
        <span>Oren</span>
      </main>

    </div>
  );
}

export default App;
