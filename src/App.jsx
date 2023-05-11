import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="grad ">
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-36">
        <Home />

        <About />

        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
