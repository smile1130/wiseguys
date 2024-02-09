import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "./Dashboard";
import Home from "./home";
import Partners from "./Partners";
import Stake from "./Stake";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "stake",
        element: <Stake />,
      },
    ],
  },
]);
