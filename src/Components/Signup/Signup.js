import React, { useContext, useRef } from 'react';
import { FirebaseContext } from '../../Context/firebaseContext';
import './Signup.css';
import {useHistory} from 'react-router-dom'

function Signup() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const usernameRef = useRef(null)
    const {fireBase} = useContext(FirebaseContext)
    const history = useHistory()

    const signin = (e)=>{
        e.preventDefault();
        fireBase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{console.log(authUser);})
        .then((history.push('/')))
        .catch((err)=>{alert(err.message)})
    }

    const register = (e)=>{
        e.preventDefault();
        
        fireBase.auth().createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then((result)=>{
            console.log(result);
            result.user.updateProfile({displayName:usernameRef.current.value}).then(()=>{
                // fireBase.firestore().collection('users').add({
                //     id:result.user.uid,
                //     username:usernameRef.current.value,
                // })
            })
        }).catch((err)=>{alert(err.message);})
    }
    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                {/* <input type="text" placeholder="User Name"
                ref={usernameRef}/> */}
                <input type="email" placeholder="Email Address"
                ref={emailRef}/>
                <input type="password" placeholder="Password"
                ref={passwordRef}/>
                <button type="submit" 
                onClick={signin}>Sign In</button>
                <h4><span className="signup_gray">New to Netflix? </span>
                    <span className="signup_link"
                    onClick={register}>Sign Up Now.</span>
                </h4>
            </form>
        </div>
    )
}

export default Signup
