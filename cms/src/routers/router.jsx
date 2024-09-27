import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Posts from "../views/Posts";
import Categories from "../views/Categories";
import Register from "../views/Register";
import AddPost from "../views/AddPost";
import UpdateImage from "../views/UpdateImage";
import Toastify from "toastify-js";

const baseUrl = "https://h8-phase2-gc.vercel.app";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please login first",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#FF0000",
          },
        }).showToast();
        return redirect("/login");
      }

      return null;
    },
    children: [
      {
        path: "/dashboard",
        element: <Dashboard baseUrl={baseUrl} />,
      },
      {
        path: "/",
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
    ],
  },
  {
    path: "/login",
    element: <Login baseUrl={baseUrl} />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#008000",
          },
        }).showToast();
        return redirect("/posts");
      }

      return null;
    },
  },
  {
    path: "/logout",
    element: <Login baseUrl={baseUrl} />,
  },
]);

export default router;
