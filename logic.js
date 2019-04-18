  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVlR9-u5OWVxxoPm4BTJEX8mxE2mmMU5Y",
    authDomain: "train-scheduler-8109a.firebaseapp.com",
    databaseURL: "https://train-scheduler-8109a.firebaseio.com",
    projectId: "train-scheduler-8109a",
    storageBucket: "train-scheduler-8109a.appspot.com",
    messagingSenderId: "238314913128"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var destination = "";
  var frequency = "";
  var arrival = "";
  var minutesAway = "";

  // use momentjs to calculate the next arrival and minutes away based on the train frequency
  // create a click function for the submit button
  // use jquery to grab user input and append the corresponding the columns with new information
  // store train information in the firebase database
