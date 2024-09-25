export default function Card({ post }) {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg flex flex-col">
        <a href="#" />
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src={post.imgUrl}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {post.Category.name}
            </div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto">
          <a
            href="#"
            className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            {post.title}
          </a>
          <p className="text-gray-500 text-sm">{post.content}</p>
        </div>
      </div>
    </>
  );
}
