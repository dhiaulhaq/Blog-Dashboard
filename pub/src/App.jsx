import { useState } from "react";
import Home from "./components/Home";
import Post from "./components/Post";

function App() {
  const [page, setPage] = useState("home");
  const baseUrl = "https://h8-phase2-gc.vercel.app";
  // const baseUrl = "https://server.dhiaulhaq.my.id";
  return (
    <>
      <div>
        {page === "home" && <Home setPage={setPage} baseUrl={baseUrl} />}
        {page === "post" && <Post setPage={setPage} baseUrl={baseUrl} />}
      </div>
    </>
  );
}

export default App;
