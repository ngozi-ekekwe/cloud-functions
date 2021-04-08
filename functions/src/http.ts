import * as functions from "firebase-functions"; // used for creating functions
import * as admin from "firebase-admin"; // use it for making changes to firestore
import * as express from "express";
import * as cors from "cors";

admin.initializeApp();
const app = express();

// Custom Middleware
const auth = (request:any, response:any, next:any) => {
  if (!request.header.authorization) {
    response.status(400).send('unauthorized');
  }
  next();
};

// Most basic HTTP Funtion
export const basicHTTP = functions.https.onRequest((request, response) => {
  const name = request.query.name;
  if (!name) {
    response.status(400).send('ERROR you must supply a name :(');
  }
  response.send(`hello ${name}`);
});

// Multi Route ExpressJS HTTP Function to be able to use middlewares and enable DRY
app.use(cors({ origin: true }));
app.use(auth) // a middleware that intercepts the request and the response, it contains an additional next()
app.get('/cat', (_request, response) => {
  response.send('CAT');
});
app.get('/dog', (_request, response) => {
  response.send('DOG');
});

export const api = functions.https.onRequest(app);
