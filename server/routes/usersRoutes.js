import { getUser } from "../controlers/users.ctrl.js";
import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/login', getUser);

export default usersRouter;
