import logo from './images/instagram-new.webp';

function Login(props) {

    const handleBtn = () => {
        if (props.user && props.password !== '') {
            props.setShowLogin(false);
            props.setShow(true);
        } 
    }

    return (
        <div>
            {props.showLogin ? 
            <div>
                <img className="loginLogo" src={logo}/>
                {/* MAKIN THE LOGIN DISAPPEAR WHEN USERNAME AND PASSWORD IS TYPED */}
                <input className="usernameBar" placeholder="Username" onChange={(event) => (props.setUser(event.target.value))} ></input>
                <br></br>
                <input className="passwordBar" placeholder="Password" type="password" onChange={(event) => (props.setPassword(event.target.value))}></input>
                <br></br>
                <button className="loginBtn" onClick={handleBtn}>Log In</button>
                <p className='forgotDetails'>Forgot your login details?</p>
                <p className='helpSignIn'>Get help signing in</p>
                </div>
                :
                ""
            }
        </div>
    )
}

// onChange={(event) => (props.setUser(event.target.value), props.user, props.password ? setShowLogin(false) : null)}

// onChange={(event) => (props.setPassword(event.target.value), props.password, props.user? setShowLogin(false) : null)} 

export default Login;