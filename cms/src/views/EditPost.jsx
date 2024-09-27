import Form from "../components/Form";
import Toastify from "toastify-js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EditPost({ baseUrl }) {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const { id } = useParams();

  async function handleSubmit(e, title, content, imgUrl, categoryId) {
    e.preventDefault();
    try {
      const body = {
        title,
        content,
        imgUrl,
        categoryId: +categoryId,
      };

      const { data } = await axios.put(
        `${baseUrl}/apis/blog/posts/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      navigate("/");
      Toastify({
        text: `Success update ${data.data.title}`,
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

  async function fetchPost() {
    try {
      const { data } = await axios.get(`${baseUrl}/apis/blog/posts/${id}`);
      console.log(id);

      setPost(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {/* Edit Product Section */}
      <Form
        baseUrl={baseUrl}
        post={post}
        handleSubmit={handleSubmit}
        nameProp="Edit Post"
        btnNameProp="Update"
      />
      {/* End Edit Product Section */}
    </>
  );
}
