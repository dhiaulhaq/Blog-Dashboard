import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components/Table";
import axios from "axios";

export default function Posts({ baseUrl }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPosts() {
    try {
      setLoading(true);

      const { data } = await axios.get(`${baseUrl}/apis/blog/posts`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);

      setPosts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {/* Posts Section */}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <b className="text-4xl">Loading....</b>
        </div>
      ) : (
        <section
          className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          id="product-section"
        >
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="display-2">Posts</h1>
            <Link to={"/add-post"}>
              <button className="btn btn-warning rounded-pill" id="new-product">
                <span className="icon material-symbols-outlined">add</span> New
                Post
              </button>
            </Link>
          </div>
          <div className="row">
            <div className="col-12 table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col" width="180px">
                      Image
                    </th>
                    <th scope="col" width="250px">
                      Content
                    </th>
                    <th scope="col">Author</th>
                    <th scope="col">Action</th>
                    <th scope="col" width="50px" />
                  </tr>
                </thead>
                <tbody id="table-product">
                  {posts.map((post, index) => {
                    return <Table post={post} index={index} key={post.id} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
      {/* End Product Section */}
    </>
  );
}
