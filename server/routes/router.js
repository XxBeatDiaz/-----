import express from 'express';
import moviesRouter from './moviesRoutes.js';

const router = express.Router();

router.use('/movies', moviesRouter);

export default router;