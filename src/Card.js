import './Card.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { ref, getDownloadURL } from 'firebase/storage';
import { imgStorage } from './firebase-config';

const Card = (props) => {
    const dataDisplayName = props.data.displayName;
    const dataCaption = props.data.caption;
    const dataImgID = props.data.imgID;
    const postRef = ref(imgStorage, `images/${dataImgID}`);
    const [imgURL, setImgURL] = useState(null);
    const profilePic = props.profilePicture;

    useEffect(() => {  
        getDownloadURL(postRef).then((url) => {
            console.log(url);
            setImgURL(url);
        })
    }, [postRef, imgURL])

    return (
        <div className='cardContainer'>
            <div id="cardHeader">
                <div id="cardProfilePic">
                    <img src={profilePic} alt=""></img>
                </div>
                <div id="cardUsername">{dataDisplayName}</div>
            </div>
            <img src={imgURL} id="cardImg"alt=""></img>
            <div id="cardBodyContainer">
                <div id="cardBtnLine">
                    <div className="cardBtnLineLeft">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="home__card_likeIcon__KyPef" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="home__card_icon__3nf38" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="home__card_icon__3nf38" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40m160-64l-80-80-80 80m80 193V48"></path></svg>
                    </div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="home__card_icon__3nf38" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="256" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><circle cx="384" cy="112" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><circle cx="384" cy="400" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94"></path></svg>
                </div>
                <p id="cardLikes">33 Likes</p>
                <div id="cardCommentsBox">
                    <div><span>{dataDisplayName}</span>{dataCaption}</div>
                </div>
                <div id="cardCommentInputContainer">
                    <input id="cardCommentInput" placeholder='Add a comment...'></input>
                    <button id="cardCommentBtn">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Card