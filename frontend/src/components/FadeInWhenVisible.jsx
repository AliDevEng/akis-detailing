import { useEffect, useRef, useState } from "react";

function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // kör bara en gång
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out
                  transform opacity-0 translate-y-6
                  ${isVisible ? "opacity-100 translate-y-0" : ""}`}
    >
      {children}
    </div>
  );
}

export default FadeInWhenVisible;
