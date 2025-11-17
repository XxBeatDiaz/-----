import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies } from "./redux/thunks/moviesThunks.js";
import ConfigRoutes from "./routes/configRoutes";
import Layout from "./sections/Layout";

function App() {
  const dispatch = useDispatch();
  const moviesStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, moviesStatus]);

  return (
    <>
      <Layout>
        <ConfigRoutes />
      </Layout>
    </>
  )
}
  
export default App
