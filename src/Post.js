import React from "react";
import './Post.css';
import Header from "./Header";
import { useState } from "react";
import { db, imgStorage } from './firebase-config';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
    const uid = props.user.uid;
    const profilePic = props.user.photoURL;
    const [caption, setCaption] = useState("");
    const [imgToPost, setImgToPost] = useState(null);
    const [imgName, setImgName] = useState("");
    const navigate = useNavigate();

    const postsCollection = collection(db, "posts");

    const displayFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0]
        setImgToPost(e.target.files[0]);
        setImgName(e.target.files[0].name + v4());
        let img = null
        reader.addEventListener('load', () => {
            img = reader.result
            e.target.style.display = 'none';
            e.target.parentElement.style.backgroundImage = `url(${img})`;
        })
        reader.readAsDataURL(file);
    }

    const saveCaption = (e) => {
        setCaption(e.target.value);
    }
        
    const submitPost = (e) => {
        e.preventDefault();
        const path = '/'
        imgUpload();
        createPost();
        navigate(path);
    }

    const createPost = async () => {
        if (imgToPost != null) {
            await addDoc(postsCollection, { displayName: props.user.displayName, uid: props.user.uid, caption: caption, imgID: imgName })
        }
   
    }

    const imgUpload = () => {
        if (imgToPost == null) {
            return;
        } else {
            console.log(imgName)
            const postRef = ref(imgStorage, `images/${imgName}`);
            uploadBytes(postRef, imgToPost).then(() => {
                console.log("image uploaded");
            })
        }
    }

    return (
        <div>
            <Header userPic={profilePic} uid={uid}/>

            <div id="postPageContentContainer">
                <div id="postPageContent">
                    <h1 id="postTitle">Create a New Post</h1>
                    <div id="postLeftSide">
                        <input onChange={displayFile} type="file" accept="image/png, image/jpeg" required></input>
                    </div>
                    <div id="postRightSide">
                        <form>
                            <textarea id="postComment" rows="15" placeholder="Write a Caption..." onChange={saveCaption}></textarea>
                           <button onClick={submitPost} type="submit" id="postSubmitBtn">Share</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;