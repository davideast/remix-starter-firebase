import * as functions from 'firebase-functions';
const { createRequestHandler: remix } = require("@remix-run/express");

export const remixServer = functions.https.onRequest(remix());
