import React, { useContext, useEffect } from 'react'
import './Editprofile.css'
import Navbar from '../Navbar/Navbar'
import { AuthContext, FirebaseContext } from '../../Context/firebaseContext'
import { Redirect, useHistory } from 'react-router-dom';

function Editprofile() {
    const { user, setUser } = useContext(AuthContext);
    const { fireBase } = useContext(FirebaseContext)
    const history = useHistory()

    const deleteUser = (e) => {
        e.preventDefault()
        const confirm = window.confirm("Do you realy want to delete your Account?")
        if (confirm === true) {
            user.delete().then(() => {
                setUser('')
                alert('Your acoount has been deleted. Please Signup again to Use Netflix');
            }).catch((error) => {
                console.log(error.message);
            })
            
        }else{
            history.push('/profile')
        }
    }


    const signout = (e) => {
        e.preventDefault();
        fireBase.auth().signOut().then(() => {
            history.push('/login');
        }).catch((error) => {
            alert(error.message)
        });
    }
    // useEffect(() => {
    //     fireBase.firestore().collection(`${user.email}`).get().then((snapshort)=>{
    //         snapshort.forEach((doc)=>{
    //             console.log(doc.id,"=>",doc.data());
    //         })
    //     })
    // }, [])
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
                                onClick={deleteUser}>Delete Your Account</button>
                            <button className="signout"
                                onClick={signout}>Sign Out</button>
                        </div>

                    </div>
                </div>
                <h1></h1>
            </div>
        </div>
    )
}

export default Editprofile
