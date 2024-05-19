import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Admin from "./admin";
import App from "./App";
import Login from "./components/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
