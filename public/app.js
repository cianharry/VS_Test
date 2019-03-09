document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app);

});

var firebase = require("firebase");
import firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD5iKSY-85eQiHvymdAPHULQM6iX9HSFQ0",
    authDomain: "contracthub-caa72.firebaseapp.com",
    databaseURL: "https://contracthub-caa72.firebaseio.com",
    projectId: "contracthub-caa72",
    storageBucket: "contracthub-caa72.appspot.com",
    messagingSenderId: "408056838234"
  };
  firebase.initializeApp(config);
  
// Initialize the default app
var contractHub = firebase.initializeApp(contractHubConfig);

console.log(contractHub.name);  // "[DEFAULT]"

// You can retrieve services via the defaultApp variable...
// var defaultStorage = contractHub.storage();
// var defaultDatabase = contractHub.database();

// equivalent shorthand notation
cHubStorage = firebase.storage();
cHubDatabase = firebase.database();