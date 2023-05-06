import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
  return (
    <div className="grad ">
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-36">
        <Home />

        <About />

        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
