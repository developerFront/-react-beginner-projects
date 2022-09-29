import React, { useState, useEffect } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [serchValue, setSerchValue] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении пользователей');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSerchValue = (event) => {
    setSerchValue(event.target.value);
  };
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className='App'>
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onClickSendInvites={onClickSendInvites}
          onChangeSerchValue={onChangeSerchValue}
          serchValue={serchValue}
          isLoading={isLoading}
          items={users}
          onClickInvite={onClickInvite}
          invites={invites}
        />
      )}
    </div>
  );
}

export default App;
