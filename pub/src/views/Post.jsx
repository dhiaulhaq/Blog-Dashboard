import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post({ baseUrl }) {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  async function fetchProduct() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}/apis/pub/blog/posts/${id}`);
      setPost(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {/* Main */}
      <main className="mx-7 lg:mx-6 mt-32 flex-grow">
        <article className="max-w-5xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <b className="text-4xl">Loading....</b>
            </div>
          ) : (
            <>
              <header className="mb-14">
                <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">
                  {post.title}
                </h1>
                {/* <div className="text-center">Published by</div>
                <div className="text-center">{post.createdAt}</div>
                <div className="mt-3 text-center">
                  <a
                    href="/tags/motive"
                    className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5"
                  >
                    #{post.Category.name}
                  </a>
                </div> */}
                <div className="mt-10 -mx-7 md:mx-0">
                  <img
                    className="w-full max-w-2xl mx-auto"
                    src={post.imgUrl}
                    width={960}
                    height={500}
                    alt="This post thumbnail"
                  />
                </div>
              </header>
              <div id="content" className="prose text-slate-800 max-w-none">
                <p>{post.content}</p>
              </div>
            </>
          )}
        </article>
      </main>
    </>
  );
}
