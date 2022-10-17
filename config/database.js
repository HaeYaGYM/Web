const firebase = require("firebase")

const firebaseConfig = {
  apiKey: "AIzaSyDBARBoIY9KtC_i9o9_P_JG_7UfdMLJ_Ws",
  authDomain: "haeyagym-d3561.firebaseapp.com",
  projectId: "haeyagym-d3561",
  storageBucket: "haeyagym-d3561.appspot.com",
  messagingSenderId: "471916039332",
  appId: "1:471916039332:web:66f2a70eca939ad20b6a31"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
let database = firebase.database()

module.exports = database