import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';



const AppBar = lazy(() => import('./AppBar/AppBar.js'));
const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('../views/Movies/Movies'));
const MovieDetails = lazy(() => import('../views/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../views/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews/Reviews'));
const Page404 = lazy(() => import('./Page404/Page404'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index exact="true" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};