import './Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { signOutOfGoogle } from './firebase-config';

const Header = (props) => {
    const dropdownRef = useRef(null);

    const showPopup = () => {
        if (dropdownRef.current.style.display == 'none') {
            dropdownRef.current.style.display = 'flex';
        } else {
            dropdownRef.current.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (!event.target.matches('#headerProfilePic')) {
            dropdownRef.current.style.display = 'none';
        }
    }

    return (
        <div className="headerContainer">
            <div id="innerHeader">
                <h1 id="logo">Finstagram</h1>
                <div className="searchBarContainer">
                    <input id="searchInput" placeholder="Search"></input>
                </div>
                <div id="headerBtnContainer" className='headerBtn'>
                    <div id="homeBtn">
                        <Link to="/">
                            <svg stroke="black" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="nav_icon__1b4zK nav_home__3uWMI" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg> 
                        </Link>
                    </div>
                    <div id="postBtnContainer" className="headerBtn">
                        <Link to="/post">
                            <svg aria-label="New post" className="headerPostBtn" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                        </Link>
                    </div>
                    <div id="myLikesBtn" className='headerBtn'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="nav_icon__1b4zK nav_heart__3F2Wn" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                    </div>
                    <div id="myProfileBtn" className='headerBtn' onClick={showPopup}>
                        <img src={props.userPic} id="headerProfilePic" alt=""></img>
                        <div ref={dropdownRef} id="dropDownMenuContainer">
                        <Link to={`/profile/${props.uid}`} style={{ textDecoration: 'none', color: 'black' }}><div id="myProfileBtn">My Profile</div></Link>
                            <div onClick={signOutOfGoogle}>Log Out</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;