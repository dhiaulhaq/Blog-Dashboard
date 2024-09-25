import { useState } from "react";
import Home from "./components/Home";
import Post from "./components/Post";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <div>
        {page === "home" && <Home setPage={setPage} />}
        {page === "post" && <Post setPage={setPage} />}
      </div>
    </>
  );
}

export default App;
