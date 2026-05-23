import { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  value: number;
  suffix?: string;
}

function StatCounter({ label, value, suffix = "" }: Props) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrameId: number;
    const duration = 2500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-slate-800/70 border border-slate-700/80 px-5 py-4 shadow-md flex flex-col items-center justify-center text-center"
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
