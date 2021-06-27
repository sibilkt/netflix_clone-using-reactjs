import React, { useContext } from 'react'
import './Editprofile.css'
import Navbar from '../Navbar/Navbar'
import { AuthContext, FirebaseContext } from '../../Context/firebaseContext'
import { useHistory } from 'react-router-dom';

function Editprofile() {
    const {user} = useContext(AuthContext);
    const {fireBase} = useContext(FirebaseContext)
    const history=useHistory()
    const signout=(e)=>{
        e.preventDefault();
        fireBase.auth().signOut().then(() => {
            history.push('/login');
          }).catch((error) => {
            alert(error.message)
          });
    }
    return (
        <div className="editprofile">
            <Navbar />
            <div className="body">
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img className="avatars"
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
                    <div className="details">
                        <h2>{user.email}</h2>
                        <div className="more_data">
                            <button className="signout"
                            onClick={signout}>Sign Out</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editprofile
