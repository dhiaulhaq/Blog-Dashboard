import { Link, useNavigate } from "react-router-dom";

export default function Table({ post }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/${post.id}`);
  }

  return (
    <>
      <tr>
        <td scope="row">{post.id}</td>
        <td className="fw-bold">{post.title}</td>
        <td>
          <img src={post.imgUrl} className="img-fluid" />
        </td>
        <td>{post.content}</td>
        <td>{post.Category.name}</td>
        <td>
          <span className="d-flex">
            <a href="" className="ms-3">
              <span className="icon material-symbols-outlined text-danger">
                delete
              </span>
            </a>
            <Link to={"/edit-post"} className="ms-3">
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
