import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {

    // När path ändras → scrolla upp
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // kan bytas till "auto" om du vill ha instant scroll
    });
  }, [pathname]);

  return null; // komponenten renderar inget visuellt
}

export default ScrollToTop;
