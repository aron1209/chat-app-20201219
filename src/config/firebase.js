import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyCPybDS6lXoLQdQVzhF-kTUN9H3TjI49Rs",
	authDomain: "chat-app-20201220.firebaseapp.com",
	projectId: "chat-app-20201220",
	storageBucket: "chat-app-20201220.appspot.com",
	messagingSenderId: "1071026536748",
	appId: "1:1071026536748:web:b86432c69cc58d216f2c89",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
