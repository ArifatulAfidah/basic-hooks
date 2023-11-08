// src/App.js
import React from 'react';
import User from './User';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div className="App"> 
      <h1>Contoh React Context</h1>
      <UserProvider>
        <User />
      </UserProvider>
    </div>
  );
}

export default App;
