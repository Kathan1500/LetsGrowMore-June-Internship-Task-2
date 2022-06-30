import React, {useState} from 'react';
import './App.css';
import LGM from './LGM.jpg';

function App() {
  const [users, setUser] = useState([]);
  const loadUser = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUser(jsonresponse.data);
  };

  return (
    <>
    <div className="App">
      <header className='main'>
        <h1>LetsGrowMore</h1>
      <navi className="app_navbar">

      <ul className='app_navbar-links'> 
      <div className='app_navbar-logo'>
        <img id="img" src={LGM} alt="LGM logo"/>
      </div>
        {['home','about','work','contact'].map((item) => (
          <li id="li"
            key={'link-$(item)'}
            className='app_flex p-text'>
            <a id="at" href={'#$(item)'}>
              {item}
            </a>  
          </li>
        ))}
      </ul>
      </navi>
      <center>
      <br></br><br></br>
      <button onClick={loadUser}>Get Users</button><br></br><br></br><br></br><br></br>
      <h2>Users : </h2>
      </center> 
      <br></br>
      <br></br>
      </header>

      <ul>
        <div className='row'>
        {users.map(({id,first_name,last_name,avatar,email}) => (
          <li key={id} className="card column"> <br></br><br></br><br></br>
          <img src={avatar} className="card-img-top" alt="..."/>
          <div className='card-body'>
            <h3 className='card-title'>
              {first_name} {last_name}
            </h3>
            <h5 className='card-text'>{email}</h5>
          </div>
          </li>
        ))}
        </div>
      </ul>
    </div>
    </>
  );
}

export default App;