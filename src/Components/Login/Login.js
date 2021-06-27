import React, { useState } from 'react'
import './Login.css'
import Signup from '../Signup/Signup'



function Login() {
    const [signin, setSignin] = useState(false)
    
    return (
        
        <div className="login">
            <div className="login_bg">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                <button className="signupbtn" 
                onClick={()=>setSignin(true)}>Sign In</button>
                <div className="login_grdient" />
            </div>
            <div className="login_body">
            {signin ? (<Signup/>):(
            <>
            <h1>Unlimited files, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="login_input">
                <form>
                    <input type="email" placeholder="Email Address"/>
                    <button className="login_getstartedbtn" 
                    onClick={()=>setSignin(true)}>Get Started</button>
                </form>
            </div>
        </>
            )}
                
            </div>
        </div>

    )
}

export default Login
