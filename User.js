// src/User.js
import React from 'react';
import { useUser } from './UserContext';

function User() {
  const { user, setUser } = useUser();

  const handleChangeUser = () => {
    const newUsername = prompt('Masukkan nama pengguna baru:');
    setUser(newUsername);
  };

  return (
    <div>
      <p>Nama Pengguna: {user}</p>
      <button onClick={handleChangeUser}>Ubah Nama Pengguna</button>
    </div>
  );
}

export default User;
