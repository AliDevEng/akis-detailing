"use client";

import { useEffect, useRef, useState } from "react";

type FadeInWhenVisibleProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeInWhenVisible({ children, delay = 0 }: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`translate-y-6 transform opacity-0 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : ""
      }`}
    >
      {children}
    </div>
  );
}

