import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCo1KJBaANFIknc8-PsKNLHV5K6tqpD7p4",
  authDomain: "champlink-17d37.firebaseapp.com",
  databaseURL: "https://champlink-17d37.firebaseio.com",
  projectId: "champlink-17d37",
  storageBucket: "champlink-17d37.appspot.com",
  messagingSenderId: "186070040647",
  appId: "1:186070040647:web:4dbfe401d6776d74943162",
  measurementId: "G-V4BW97MX38"
};

let app = firebase.initializeApp(config);

export const db = app.database();

