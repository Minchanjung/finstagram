import "./SignIn.css";
import React from "react";
import { signInWithGoogle } from "./firebase-config";

const SignIn = () => {

    return (
        <div id="signInContainer">
            <div id="signInBox">
                <h1 id="signInLogo">Finstagram</h1>
                <button id="googleSignInBtn" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default SignIn;