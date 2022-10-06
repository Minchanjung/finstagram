import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div className="headerContainer">
            <div id="innerHeader">
                <h1 id="logo">Finstagram</h1>
                <div className="searchBarContainer">
                    <input id="searchInput" placeholder="Search"></input>
                </div>
                <div id="headerBtnContainer" className='headerBtn'>
                    <div id="homeBtn">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="nav_icon__1b4zK nav_home__3uWMI" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg> 
                    </div>
                    <div id="myLikesBtn" className='headerBtn'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="nav_icon__1b4zK nav_heart__3F2Wn" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                    </div>
                    <div id="myProfileBtn" className='headerBtn'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="nav_icon__1b4zK nav_person__11phe" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;