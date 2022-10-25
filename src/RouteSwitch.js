import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignIn from "./SignIn";
import Post from "./Post";
import ProfilePage from "./ProfilePage";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { auth } from "./firebase-config";

const RouteSwitch = () => {
    const [home, setHome] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setHome(true);
                window.localStorage.setItem('uid', user.uid);
                window.localStorage.setItem('displayName', user.displayName);
                window.localStorage.setItem('profilePic', user.photoURL);
            } else {
                setHome(false);
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {home ? <Route path="/" element={<App user={user} />} /> : <Route path="/" element={<SignIn />} />}

                <Route path="/post" element={<Post user={user} />} />

                <Route path="/profile/:uid" element={<ProfilePage user={user}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;

//<Route path="/" element={home}/>     <Route path="/post" element={<Post user={user} />} />