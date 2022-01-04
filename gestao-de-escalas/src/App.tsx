import React, {useState} from 'react';
import userList from './data.js';
import UserEscala from './components/UserEscala';

const App = () => {

  const [users, setUsers] = useState(userList);

  return (
    <div className="container">
        <h1>Gestão de escalas</h1>
        <div className="card">
          <div className='card-body'>
            <UserEscala users={users}/>
          </div> 
        </div>
    </div>           
)}

export default App;
