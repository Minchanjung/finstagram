import './App.css';
import React from 'react';
import Header from './Header';
import Card from './Card';
import { useState, useEffect } from 'react';

function App(props) {
  const [uid, setUid] = useState(props.user.uid);
  const [username, setUsername] = useState(props.user.displayName);
  const [profilePic, setProfilePic] = useState(props.user.photoURL);


  console.log(uid, username, profilePic);

  return (
    <div className="App">
      <Header userPic={profilePic} />
      <div id="postsContainer">
        <Card/>
      </div>
    </div>
  );
}

export default App;
