import express from 'express';
import moviesRouter from './moviesRoutes.js';
import usersRouter from './usersRoutes.js';

const router = express.Router();

router.use('/movies', moviesRouter);
router.use('/users', usersRouter)

export default router;