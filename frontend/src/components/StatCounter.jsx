import { useEffect, useRef, useState } from "react";

function StatCounter({ label, value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Observer som kollar när komponenten syns i viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.4 } // ~40% av elementet ska synas
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrameId;
    const duration = 1500; // 1.5 sek
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1

      const currentValue = Math.floor(progress * value);
      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value); // säkerställ exakt slutvärde
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-slate-800/70 border border-slate-700/80 px-5 py-4 shadow-md
                 flex flex-col items-center justify-center text-center"
    >
      <div className="text-3xl md:text-4xl font-semibold text-sky-300 mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

export default StatCounter;
