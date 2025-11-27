import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar currentPage={currentPage} onChangePage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
