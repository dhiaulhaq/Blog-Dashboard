import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

function App() {
  return (
    <>
      {/* Preloader */}
      <div id="preloader" style={{ display: "none" }}>
        <div className="loading">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_remmdtqv.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
        </div>
      </div>
      {/* End Preloader */}
      {/* Navbar Section */}
      <section className="container-fluid" id="home-section">
        <div className="row">
          <RouterProvider router={router} />
        </div>
      </section>
      {/* End Navbar Section */}
      {/* Login Section */}

      {/* End Login Section */}
      {/* Home Section */}

      {/* End Home Section */}
    </>
  );
}

export default App;
