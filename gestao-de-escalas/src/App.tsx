import React, {useState} from 'react';
import userList from './data.js';
import UserEscala from './components/UserEscala';
import AddUserForm from './forms/AddUserForm';

const App = () => {

  const [users, setUsers] = useState(userList);

  const addUser = (user: any) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className="container">
        <h1>Gestão de escalas</h1>
        <div className="card">
          <div className='card-body'>
            <UserEscala users={users}/>
          </div>
          <div>
            <h2>Adicionar Usuário</h2>
            <AddUserForm addUser={addUser} />
          </div> 
        </div>
    </div>           
)}

export default App;
