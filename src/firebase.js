import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9dgrFgNb6Ctsq5UKgWuJoT8iLGASJJM4",
    authDomain: "goal-coach-45003.firebaseapp.com",
    databaseURL: "https://goal-coach-45003.firebaseio.com",
    projectId: "goal-coach-45003",
    storageBucket: "goal-coach-45003.appspot.com",
    messagingSenderId: "388557070740"
}

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
