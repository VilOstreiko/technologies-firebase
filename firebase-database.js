'use strict';

const admin = require('firebase-admin');

const serviceAccount = require('./vendors/credentials/technologies-9e47f-firebase-adminsdk-6sno4-6661619fb8');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://technologies-9e47f.firebaseio.com"
});

console.log("Start firebase database connection");
console.log("databaseURL: https://technologies-9e47f.firebaseio.com");
module.exports = firebase;
