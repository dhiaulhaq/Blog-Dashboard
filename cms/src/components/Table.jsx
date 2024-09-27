import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import { useState } from "react";

export default function Table({ baseUrl, post, index, fetchPosts }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/${post.id}`);
  }

  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `${baseUrl}/apis/blog/posts/${post.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      console.log(data);

      fetchPosts();
      Toastify({
        text: `Success delete post`,
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
    } catch (error) {
      console.log(error);

      Toastify({
        text: error.response.data.error,
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
    }
  }

  return (
    <>
      <tr>
        <td scope="row">{index + 1}</td>
        <td className="fw-bold">{post.title}</td>
        <td>
          <img src={post.imgUrl} className="img-fluid" />
        </td>
        <td>{post.content}</td>
        <td>{post.User.username}</td>
        <td>
          <span className="d-flex">
            <Link onClick={handleDelete} className="ms-3">
              <span className="icon material-symbols-outlined text-danger">
                delete
              </span>
            </Link>
            <Link to={`/edit-post/${post.id}`} className="ms-3">
              <span className="icon material-symbols-outlined text-danger">
                edit
              </span>
            </Link>
            <Link to={"/update-image"} className="ms-3">
              <span className="icon material-symbols-outlined text-danger">
                image
              </span>
            </Link>
          </span>
        </td>
      </tr>
    </>
  );
}
