import { Router } from 'express';
import { Customer, Employee } from './Users.model';

export const router = Router();

router.post('/employee/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (
      !username ||
      !password ||
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) {
      res.status(400);
      res.send('must provide username and password');
    }

    const validationError = validateCredentials(username, password);
    if (validationError) {
      res.status(400);
      res.send(validationError);
      return;
    }

    await Employee.create({ username, password });

    res.status(201).end();
  } catch (err) {
    if (typeof err === 'object' && err && 'code' in err && err.code === 11000) {
      res.status(409).send('username already taken');
      return;
    }
    next(err);
  }
});

router.post('/customer/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (
      !username ||
      !password ||
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) {
      res.status(400);
      res.send('must provide username and password');
    }

    const validationError = validateCredentials(username, password);
    if (validationError) {
      res.status(400);
      res.send(validationError);
      return;
    }

    await Customer.create({ username, password });

    res.status(201).end();
  } catch (err) {
    if (typeof err === 'object' && err && 'code' in err && err.code === 11000) {
      res.status(409).send('username already taken');
      return;
    }
    next(err);
  }
});

router.post('/employee/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const employee = await Employee.findOne({
      username,
      password,
    });

    if (!employee) {
      res.status(401).send("username or password doesn't match.");
      return;
    }

    res.cookie('employeeId', employee._id, {
      signed: true,
      secure: true,
      httpOnly: true,
    });

    res.status(200).send();
  } catch (err) {
    next(err);
  }
});

router.post('/customer/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const customer = await Customer.findOne({
      username,
      password,
    });

    if (!customer) {
      res.status(401).send("username or password doesn't match.");
      return;
    }

    res.cookie('customerId', customer._id, {
      signed: true,
      secure: true,
      httpOnly: true,
    });

    res.status(200).send();
  } catch (err) {
    next(err);
  }
});

export function validateCredentials(username: string, password: string) {
  return undefined;
}
