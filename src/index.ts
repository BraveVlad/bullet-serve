import { json } from 'body-parser';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import mongoose from 'mongoose';
import { router as orderRouter } from './Order.router';
import { router as menuRouter } from './Menu.router';
import { router as authRouter } from './Auth.router';
import { RequestHandler } from 'express-serve-static-core';

const app = express();

app.use(cookieParser());
app.use(json());

const logRequests: RequestHandler = (req, res, next) => {
  console.log(req.method, req.url, req.body);
  next();
};

app.use(logRequests);

app.use('/api/auth', authRouter);

app.use('/api/employees', (req, res, next) => {
  if (!req.signedCookies.employeeId) {
    res.status(403);
    res.end();
    return;
  }
});
app.use('/api/employees/orders', orderRouter);

app.use('/api/menu', (req, res, next) => {
  if (!req.signedCookies.customerId) {
    res.status(403);
    res.end();
    return;
  }
});
app.use('/api/menu', menuRouter);

app.use(express.static('public'));

const server = createServer(app);
const port = process.env.PORT ?? 3000;

async function init() {
  checkMongoConnectionString();
  listen();
}

async function checkMongoConnectionString() {
  if (!process.env.MONGO_CONNECTION_STRING) {
    throw new Error('No MongoDB connection string');
  }

  await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    dbName: 'bullet-serve-app',
  });
}

async function listen() {
  server.listen(port, () =>
    console.log(`Listening on http://localhost:${port}`)
  );
}

init();
