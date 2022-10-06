import React from "react";
import './Post.css';
import Header from "./Header";

const Post = (props) => {
    return (
        <div>
            <Header userPic={props.userPic} />
        </div>
    )
}

export default Post;