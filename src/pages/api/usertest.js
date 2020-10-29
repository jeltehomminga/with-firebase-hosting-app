//werkt niet

const { https, logger } = require('firebase-functions');

// export default (req, res) => {
//   res.statusCode = 200;
//   console.log(JSON.stringify(req, null, 2));
//   //mdn JSON.stringify;
//   res.json({ req: req.body });
// };

const usertest = https.onRequest((request, response) => {
  // const user = req.body;
  logger.info(request, { structuredData: true });
  // console.log(JSON.stringify(request, null, 2));
  // await admin.firestore().collection('users').add(user);
  response.status(201).send();
});

export default usertest;
