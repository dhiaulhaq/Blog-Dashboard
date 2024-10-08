import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Login from "../views/Login";
import Posts from "../views/Posts";
import Categories from "../views/Categories";
import Register from "../views/Register";
import AddPost from "../views/AddPost";
import UpdateImage from "../views/UpdateImage";
import Toastify from "toastify-js";
import EditPost from "../views/EditPost";

const baseUrl = "https://h8-phase2-gc.vercel.app";
// const baseUrl = "https://phase2-aio.vercel.app";

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
        path: "/",
        element: <Posts baseUrl={baseUrl} />,
      },
      {
        path: "/add-post",
        element: <AddPost baseUrl={baseUrl} />,
      },
      {
        path: "/edit-post/:id",
        element: <EditPost baseUrl={baseUrl} />,
      },
      {
        path: "/update-image/:id",
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
]);

export default router;
