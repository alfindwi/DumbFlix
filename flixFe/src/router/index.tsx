import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { Home } from "../features/userPage/Home/home";
import { Movies } from "../features/userPage/Home/movie";
import { TvShow } from "../features/userPage/Home/tvShow";
import { DetailSeries } from "../features/userPage/detailSeries/detialSeries";
import { DetailMovie } from "../features/detailMovies/detailMovies";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tvshow",
    element: <TvShow />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tvseries",
    element: <DetailSeries />,
  },
  {
    path: "/movie",
    element: <DetailMovie />,
  }
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
