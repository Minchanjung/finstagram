import './ProfilePage.css';
import React from 'react';
import Header from './Header';
import { useState, useEffect, useRef } from 'react';
import { db, imgStorage } from './firebase-config';
import { getDownloadURL, ref } from 'firebase/storage';
import { collection, getDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

const ProfilePage = (props) => {

    const postCollectionRef = collection(db, "posts");
    const [imgURL, setImgURL] = useState(new Set());
    const homeUid = window.localStorage.getItem('uid');
    const url = window.location.href.split('profile/')[1]
    const pageUid = useRef("")
    const profilePic = window.localStorage.getItem('profilePic');
    const displayName = window.localStorage.getItem('displayName');
    const userCollectionRef = doc(db, "users", window.location.href.split('profile/')[1]);
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0);
    const [isHomeUser, setIsHomeUser] = useState(null)

    useEffect(() => {

        if (url === homeUid) {
            pageUid.current = window.localStorage.getItem('uid');
            setIsHomeUser(true)
        } else {
            pageUid.current = window.location.href.split('profile/')[1];
            setIsHomeUser(false);
        }

        console.log(pageUid.current);

        getDocs(postCollectionRef).then((data) => {
            data.docs.map((doc) => {
                if (doc.data().uid === pageUid.current) {
                    getDownloadURL(ref(imgStorage, `images/${doc.data().imgID}`)).then((url) => {
                        setImgURL((prev) => new Set(prev).add(url));
                    })
                }
            });
        })

        getDoc(userCollectionRef).then((data) => {
            setFollowers(data.data().followers)
            setFollowing(data.data().following)
        })
    }, []) 

    const follow = (e) => {
        if (e.target.textContent === "Follow") {
            e.target.textContent = "Following"
            const followersRef = doc(db, "users", window.location.href.split('profile/')[1], "followers");

            updateDoc(followersRef, {followers: [followers, homeUid]});
        }
        
    }

    return (
        <div>
            <Header userPic={profilePic} uid={homeUid}/>
            <div id="profileBodyContainer">
                <div id="profileTopContainer">
                    <img src={profilePic} alt="" referrerPolicy="no-referrer"></img>
                    <div id="profileTextContainer">
                        <div id="profileHeaderLine">
                            <h1 id="profileUsername">{displayName.split(/[ ,]+/).join('_').toLowerCase()}</h1>
                            {isHomeUser ? <button id="followBtn" onClick={follow}>Follow</button> : <svg aria-label="Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>}
                            
                        </div>
                        <div id="followersLine">
                            <div id="numPosts">{imgURL.size} posts</div>
                            <div id="numFollowers">{followers.length} followers</div>
                            <div id="numFollowing">{following.length} following</div>
                        </div>
                    </div>
                </div>
                <div id="profileContentContainer">
                    {[...imgURL].map((img) => {
                        return <div><img src={img} alt=""/></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;