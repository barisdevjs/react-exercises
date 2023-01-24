import * as React from 'react';


const User = ({ user, onUpdateName }) => {
    // derive initial state from props
    const [name, setName] = React.useState(user.name);
  
    function handleNameChange(event) {
      setName(event.target.value);
    }
  
    return (
      <li style={{ color: 'red' }}>
      
        {user.name} 
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="button" onClick={() => onUpdateName(user, name)}>
          Update
        </button>
      </li>
    );
  }

    const UserList = ({ users, onUpdateName }) => {
    return (
      <ul style={{ backgroundColor: 'cyan' }}>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onUpdateName={onUpdateName}
          />
        ))}
      </ul>
    );
  }

    const App = () => {
    const [users, setUsers] = React.useState([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Joe' },
    ]);
  
    function handleUpdateName(user, name) {
      const newUsers = users.map((u) => (u.id === user.id ? { ...u, name } : u));
      setUsers(newUsers);
    }
  
    return (
      <div>
        <h1>User List</h1>
        <UserList users={users} onUpdateName={handleUpdateName} />
      </div>
    );
  };

    export default App;