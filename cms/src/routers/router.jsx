import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Posts from "../views/Posts";
import Categories from "../views/Categories";
import Register from "../views/Register";
import AddPost from "../views/AddPost";
import UpdateImage from "../views/UpdateImage";

const baseUrl = "https://h8-phase2-gc.vercel.app";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard baseUrl={baseUrl} />,
      },
      {
        path: "/posts",
        element: <Posts baseUrl={baseUrl} />,
      },
      {
        path: "/add-post",
        element: <AddPost baseUrl={baseUrl} />,
      },
      {
        path: "/edit-post",
        element: <AddPost baseUrl={baseUrl} />,
      },
      {
        path: "/update-image",
        element: <UpdateImage baseUrl={baseUrl} />,
      },
      {
        path: "/categories",
        element: <Categories baseUrl={baseUrl} />,
      },
      {
        path: "/add-user",
        element: <Register baseUrl={baseUrl} />,
      },
      {
        path: "/logout",
        element: <Login baseUrl={baseUrl} />,
      },
    ],
  },
  {
    path: "/",
    element: <Login baseUrl={baseUrl} />,
  },
]);

export default router;
