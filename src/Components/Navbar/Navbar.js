import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Navbar.css";

function NavBar() {

    const history = useHistory()
    const avatarClick = (e)=>{
        e.preventDefault();
        history.push('/profile')
    }
    return (
        <div className="navbar" >
            <img className="logo" 
            onClick={()=>history.push('/')}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            <img className="avatar" 
            onClick={avatarClick}
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
        </div>
    )
}

export default NavBar