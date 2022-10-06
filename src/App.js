import './App.css';
import React from 'react';
import Header from './Header';
import Card from './Card';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase-config";
import { useState, useEffect } from 'react';

function App() {
  const [uid, setUid] = useState(null);
  const [username, setUsername] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  /*onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        setUid(user.uid)
        console.log(uid);
    } else {
        console.log("user is logged out");
    }
})*/

  return (
    <div className="App">
      <Header/>
      <div id="postsContainer">
        <Card/>
      </div>
    </div>
  );
}

export default App;
