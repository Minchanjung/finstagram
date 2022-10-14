import './ProfilePage.css';
import React from 'react';
import Header from './Header';
import { useState } from 'react';

const ProfilePage = (props) => {
    const [uid, setUid] = useState(props.user.uid);
    const [profilePicture, setProfilePicture] = useState(props.user.photoURL);

    return (
        <div>
            <Header userPic={profilePicture} uid={uid}/>
        </div>
    )
}

export default ProfilePage;