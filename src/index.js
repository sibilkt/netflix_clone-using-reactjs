import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Context/firebaseContext'
import Context from './Context/firebaseContext'
import fireBase from './Firebase/firebaseConfig'
ReactDOM.render(
  <FirebaseContext.Provider value={{ fireBase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
  , document.getElementById('root')
);


