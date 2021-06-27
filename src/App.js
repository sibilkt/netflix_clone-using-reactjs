import React, { useEffect, useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { original, actions, trending } from './urls'

import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Rowpost from './Components/Rowpost/Rowpost'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import { AuthContext, FirebaseContext } from './Context/firebaseContext';
import Editprofile from './Components/Editprofile/Editprofile'
import MovieDetails from './Components/Moviedetails/MovieDetails'
import Movie from './Context/MovieCardContext'

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { fireBase } = useContext(FirebaseContext);

  useEffect(() => {

    var us = fireBase.auth().onAuthStateChanged((authuser) => {
      setUser(authuser)

    })
    return us

  }, [user])
  console.log(user);

  return (

    <div className="App">
      <Router>
        {user ? (
          <Switch>
            <Movie>
              <Route exact path="/">
                <Navbar />
                <Banner />
                <Rowpost title='Netflix Originals' url={original} />
                <Rowpost title='Action Movies' issmall url={actions} />
                <Rowpost title='Trending Movies' issmall url={trending} />
              </Route>
              <Route path="/profile">
                <Editprofile />
              </Route>
              <Route path="/movie_details">
                <MovieDetails />
              </Route>
            </Movie>
          </Switch>

        ) : (<Login path="/login" />)}
      </Router>
    </div>
  );
}

export default App;