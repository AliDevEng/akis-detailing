import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About onChangePage={setCurrentPage} />;
      case "contact":
        return <Contact onChangePage={setCurrentPage} />;
      case "home":
      default:
        return <Home onChangePage={setCurrentPage} />;
    }
  };


  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar currentPage={currentPage} onChangePage={setCurrentPage} />
      {renderPage()}
      <Footer />
      <FloatingWhatsApp />

    </div>
  );
}

export default App;
