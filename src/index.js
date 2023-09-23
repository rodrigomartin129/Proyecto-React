import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpjctBvbPB6GJ3jHlftF5RyUCtiIW9XgA",
  authDomain: "e-commerce-b2de4.firebaseapp.com",
  projectId: "e-commerce-b2de4",
  storageBucket: "e-commerce-b2de4.appspot.com",
  messagingSenderId: "680671268020",
  appId: "1:680671268020:web:571fc45ec3f2fc63eddbe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
