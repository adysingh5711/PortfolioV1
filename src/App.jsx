import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {showBanner && (
            <div className="bg-blue-500 text-white text-center p-2 fixed top-0 left-0 w-full z-50">
              Check out the new Portfolio live at{" "}
              <a href="https://0xaditya.vercel.app" className="underline">
                0xaditya.xyz
              </a>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowBanner(false)}
              >
                <AiOutlineClose className="text-white" />
              </button>
            </div>
          )}
          <div className={showBanner ? "mt-12" : ""}>
            <Navbar />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
