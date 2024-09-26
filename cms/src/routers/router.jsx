import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Posts from "../views/Posts";
import Categories from "../views/Categories";
import Register from "../views/Register";
import AddPost from "../views/AddPost";
import UpdateImage from "../views/UpdateImage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/add-post",
        element: <AddPost />,
      },
      {
        path: "/edit-post",
        element: <AddPost />,
      },
      {
        path: "/update-image",
        element: <UpdateImage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/add-user",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

export default router;
