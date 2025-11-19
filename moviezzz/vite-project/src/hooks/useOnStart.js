import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMoviesIdsFromUser } from "../redux/slices/user";
import { fetchManyMovies, fetchMovies } from "../redux/thunks/moviesThunks";

export default function useOnStart() {
    const dispatch = useDispatch();

    const moviesStatus = useSelector((state) => state.movies.status);
    const userStatus = useSelector((state) => state.user.status);
    const moviesIds = useSelector(getMoviesIdsFromUser);

    useEffect(() => {
        if (moviesStatus === "idle") {
            dispatch(fetchMovies());
        }
    }, [dispatch, moviesStatus]);

    useEffect(() => {
        if (userStatus === "succeeded" && moviesIds.length > 0) {
            dispatch(fetchManyMovies(moviesIds));
        }
    }, [dispatch, userStatus, moviesIds]);
}