import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignIn from "./SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { auth } from "./firebase-config";

const RouteSwitch = () => {
    const [home, setHome] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("logged in")
                setUser(user)
                setHome(true);
            } else {
                console.log("user is logged out");
                setHome(false);
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {home ? <Route path="/" element={<App />} /> : <Route path="/" element={<SignIn />} />}
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;

//<Route path="/" element={home}/>