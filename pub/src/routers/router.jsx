import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
import Post from "../views/Post";
const baseUrl = "https://h8-phase2-gc.vercel.app";
// const baseUrl = "https://server.dhiaulhaq.my.id";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home baseUrl={baseUrl} />,
      },
      {
        path: "/:id",
        element: <Post baseUrl={baseUrl} />,
      },
    ],
  },
]);

export default router;
