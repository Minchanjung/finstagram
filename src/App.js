import './App.css';
import React from 'react';
import Header from './Header';
import Card from './Card';
import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase-config';

function App(props) {
  const [uid, setUid] = useState(props.user.uid);
  const profilePic = window.localStorage.getItem('profilePic');
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      console.log(data.docs)
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getPosts()
  }, [])

  const addLike = async (id, likes) => {
    const likesDoc = doc(db, "posts", id);
    const addLike = {likes: likes + 1}
    await updateDoc(likesDoc, addLike);
  }

  return (
    <div className="App">
      <Header userPic={profilePic} uid={uid}/>
      <div id="postsContainer">
        {posts.map((post) => {return <Card data={post} profilePicture={profilePic} likedFunc={() => {addLike(post.id, post.likes)}}/>})}
        
      </div>
    </div>
  );
}

export default App;