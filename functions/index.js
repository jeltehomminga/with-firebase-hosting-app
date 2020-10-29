const functions = require('firebase-functions');
const { nextjsFunc, user } = require('./firebaseFunctions');

exports.nextjsFunc = nextjsFunc;
exports.user = user;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
