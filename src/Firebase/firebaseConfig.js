import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBEJnoUlmRWseP9r7xw1rCW2yx-1Rmed30",
  authDomain: "netflix-clone-1a105.firebaseapp.com",
  projectId: "netflix-clone-1a105",
  storageBucket: "netflix-clone-1a105.appspot.com",
  messagingSenderId: "321288363482",
  appId: "1:321288363482:web:0b9f66efa1d6b8cebb74e3"
};

var fireBase=firebase.initializeApp(firebaseConfig);



export default fireBase;