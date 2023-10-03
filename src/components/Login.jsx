import { useState } from "react";

function Login(props) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? 
            <div>
                <label>Username</label>
                {/* MAKIN THE LOGIN DISAPPEAR WHEN USERNAME AND PASSWORD IS TYPED */}
                <input onChange={(event) => (props.setUser(event.target.value), props.user, props.password ? setShowLogin(false) : null)} ></input>
                <br></br>
                <label>Password</label>
                <input type="password" onChange={(event) => (props.setPassword(event.target.value), props.user, props.password ? setShowLogin(false) : null)} ></input>
                </div>
                :
                ""
            }
            {/* {props.user && props.password ? {}:<h3>Incorrect username or password</h3>} */}
            {/* <button onClick={hideLogin}>Press</button> */}
        </div>
    )
}

export default Login;