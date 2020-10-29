const { join } = require('path');
const { https, logger } = require('firebase-functions');
const { default: next } = require('next');
const express = require('express');
const app = express();
const admin = require('firebase-admin');
admin.initializeApp();

const isDev = process.env.NODE_ENV !== 'production';
const nextjsDistDir = join('src', require('../src/next.config.js').distDir);

const nextjsServer = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
  },
});
const nextjsHandle = nextjsServer.getRequestHandler();

const nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});

app.get('/', (req, res) => {});

app.post('/', async (req, res) => {
  const user = req.body;
  console.log(JSON.stringify(req, null, 2));
  // await admin.firestore().collection('users').add(user);
  res.status(201).send();
});

const user = https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = https.onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase friebaseFunctions.js!');
});

const userLog = {
  '@type': 'type.googleapis.com/google.cloud.audit.AuditLog',
  authenticationInfo: { principalEmail: 'jeltehomminga@gmail.com' },
  requestMetadata: {
    callerIp: '212.187.88.128',
    callerSuppliedUserAgent: 'FirebaseCLI/8.12.0,gzip(gfe),gzip(gfe)',
    requestAttributes: { time: '2020-10-09T12:50:20.514024Z', auth: {} },
    destinationAttributes: {},
  },
  serviceName: 'cloudfunctions.googleapis.com',
  methodName: 'google.cloud.functions.v1.CloudFunctionsService.UpdateFunction',
  authorizationInfo: [
    {
      resource: 'projects/next-fb-host/locations/us-central1/functions/user',
      permission: 'cloudfunctions.functions.update',
      granted: true,
      resourceAttributes: {},
    },
  ],
  resourceName: 'projects/next-fb-host/locations/us-central1/functions/user',
  request: {
    updateMask:
      'sourceUploadUrl,name,labels,runtime,environmentVariables,httpsTrigger',
    function: {
      sourceUploadUrl:
        'https://storage.googleapis.com/gcf-upload-us-central1-c1cf0ea8-eb45-4ff2-9b0e-a2f0ffd5b0c5/f9fff992-18b8-4801-911f-ff7387680264.zip?GoogleAccessId=service-474718441639@gcf-admin-robot.iam.gserviceaccount.com&Expires=1602249618&Signature=YiFkW19%2BCMEnSfX%2BHADTJbVymSNZ3wQZ%2FbuGHlpqNpTlgBRCMdg8TmVC%2FyhndJXE8S1gcHLO26yeaBYY4xPs%2FqDf4EojNTwL1qvYefF2yyYiNuK3semjHXpbLei787rgrbVw1FumebI6SvYeIQbZjPiljvvhxPkyGmK0LDPyJoIIM%2BIPjm2d86UfpC4rwSVod23qPOFH%2F5U31EGkvDlzoFMt0Wb%2F8wWnFOB4e1cvpHibw7qSwJ4J2ShkDpWMAyg1LyNj3AhDHunshh4uzQ7AC5DGhiovGe8ju%2FQPFeYekVR01%2F2SD434ndhcYWTG5Pp362qR2zNhxiggyy8LedEInw%3D%3D',
      labels: { 'deployment-tool': 'cli-firebase' },
      name: 'projects/next-fb-host/locations/us-central1/functions/user',
      runtime: 'nodejs10',
      httpsTrigger: {},
    },
    '@type':
      'type.googleapis.com/google.cloud.functions.v1.UpdateFunctionRequest',
  },
  resourceLocation: { currentLocations: ['us-central1'] },
};

module.exports = { nextjsFunc, user };
