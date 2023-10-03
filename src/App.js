import './App.css';
import { useState } from 'react';
import Login from './components/Login'
import Api from './components/Api';
import Navbar from './components/Navbar';

function App() {

  //THIS IS WHERE VANILLA JAVASCRIPT GOES

  

  //STATE VARIABLES GO HERE
  const [user, setUser] = useState("");
  const [password, setPassword] = useState();
  // const [loggedIn, setLoggedIn] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(true);
  const[showLogin,setShowLogin] = useState(true);


  Api(setPhotos)

  //OTHER VARIABLES

  const hideLogin = () => {
    { showLogin && setShowLogin(false)}
  }

  return (
    <div className="App">
      <Navbar
      // show={show}
      // setShow={setShow}
      />
      <Login 
      setUser={setUser} 
      setPassword={setPassword} 
      user= {user}
      password={password}
      />
      {user && password ?
      <div>
        {show}
        <button onClick={hideLogin}>Hi</button>
       {photos.map((photo, index) => {
        return (
          <div key={index}>
            <h4>{user}</h4>
            <img src={photo.urls.regular} height="643px" width="1080px"/>
            <h4>{photo.alt_description}</h4>
          </div>
        )
      })}
      </div>
      :<h3>Incorrect username or password</h3>}
      
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