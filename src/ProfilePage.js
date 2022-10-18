import './ProfilePage.css';
import React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';
import { db, imgStorage } from './firebase-config';
import { getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { collection } from 'firebase/firestore';

const ProfilePage = (props) => {
    const uid = props.user.uid;
    const profilePicture = props.user.photoURL;
    const userName = props.user.displayName;
    const [posts, setPosts] = useState([]);
    const postCollectionRef = collection(db, "posts");
    const [imgURL, setImgURL] = useState([]);

    useEffect(() => {

        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPosts()

        listAll(ref(imgStorage, "images")).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImgURL((prev) => [...prev, url])
                })
            })
        })

        
    }, []) 

    console.log(imgURL)

    return (
        <div>
            <Header userPic={profilePicture} uid={uid}/>
            <div id="profileBodyContainer">
                <div id="profileTopContainer">
                    <img src={profilePicture} alt=""></img>
                    <div id="profileTextContainer">
                        <div id="profileHeaderLine">
                            <h1 id="profileUsername">{userName.split(/[ ,]+/).join('_').toLowerCase()}</h1>
                            <svg aria-label="Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </div>
                        <div id="followersLine">
                            <div id="numPosts">8 posts</div>
                            <div id="numFollowers">60 followers</div>
                            <div id="numFollowing">10 following</div>
                        </div>
                    </div>
                </div>
                <div id="profileContentContainer">
                    {imgURL.map((img) => {
                        return <img src={img} alt=""/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;