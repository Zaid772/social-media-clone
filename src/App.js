import React from 'react';
import './App.css';
import { useState } from 'react';

import Login from './components/Login'
import Api from './components/Api';
import Navbar from './components/Navbar';
import Story from './components/Story';
import Account from './components/Account';

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { BiBookmark } from "react-icons/bi";

function App() {

  //THIS IS WHERE VANILLA JAVASCRIPT GOES

  //STATE VARIABLES GO HERE
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(false);
  const[showLogin,setShowLogin] = useState(true);
  const [showNav, setShowNav] = useState(true);

  Api(setPhotos)

  //OTHER VARIABLES

  let prevScrollPos = window.scrollY;
  window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos || currentScrollPos < 200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <div className="App">
      <div className='outer'>
        <div className='screen'>
          <Login 
          setUser={setUser} 
          setPassword={setPassword} 
          user= {user}
          password={password}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setShow={setShow}
        />
      { show ?
      <div>
        {showNav ? <Navbar /> :""}
        <Story user={user}/>
       {photos.map((photo, index) => {
        return (
          <div className='box' key={index}>
            <div className='wholeBox'>
              <Account/>
              <img className='images' src={photo.urls.regular}/>
              <div iconsContainer>
              <AiOutlineHeart className='heart'/>
              <FaRegComment className='comment'/>
              <LuSend className='send'/>
              <BiBookmark className='bookmark'/>
              </div>
              <p className='likes'>{Math.floor(Math.random()* 1000)} likes</p>
              <div className='descContainer'>
                <p className='userDescription'>the rock</p>
                <p className='description'>{photo.alt_description}</p>
              </div>
              <p className='viewComments'>View all {Math.floor(Math.random()* 1000)} comments</p>
              <p className='minutes'>{Math.floor(Math.random()* 10)} hours ago</p>
            </div>
          </div>
        )
      })}
      </div>
      : ""}
        </div>
      </div>
    </div>
  );
}

export default App;

  // async function fetchImages() {
  //   const response = await fetch("https://picsum.photos/v2/list");
  //   const data = await response.json();
  //   setPhotos(data);
  //   console.log(data);
  // }

  // useEffect(() => {
  //   fetchImages()
  // }, [])

  // const myArray = [{name: "harry", age: 15},{name: "Hermione", age: 16}, {name: "RadioNodeList", age:15}, {name: "Ginny", age: 24}]


// INPUT BARS
//   <h1>Hello</h1>
    //   <Box name="Hermione"></Box>
    //   <Box name="Harry"></Box>
    //   <Box name="Fred"></Box>
    //   <Box name={user}></Box>
    //   <Box name={password}></Box>
    //   <Login setUser={setUser} setPassword={setPassword}></Login>

    //   {user && <h3>user exists</h3>}

    //   {loggedIn ? <h3>logged in</h3>:<h3>not logged in</h3>}


        {/* HOW TO LOOP AN ARRAY
      { 
        myArray.map((item, index) => {
          return (
          <div>
            <Box name={item.name}></Box>
          </div>
          )
        })
      }
      <img src="https://picsum.photos/200" alt="a random photo from lorem picsum"/>
      <br></br>
      <button onClick={(event) => fetchImages()}>Fetch pics</button>
      <br></br>
      <button onClick={(event) => setPhotos([])}>Set photos off</button>
      {photos && photos.map((item, index) => {
        return (
          <div>
            <img src={item.download_url} width="300px"></img>
          </div>
        )
      })} */}