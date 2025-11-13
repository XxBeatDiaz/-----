import { getMovies, getOneMovieById, getMoviesByFiltersCtrl } from "../controlers/movies.ctrl.js";
import express from 'express';


const moviesRouter = express.Router();

moviesRouter.get('/', getMovies);
moviesRouter.get('/search', getMoviesByFiltersCtrl);
moviesRouter.get('/:id', getOneMovieById);

export default moviesRouter;
