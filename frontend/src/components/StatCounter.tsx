"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  label: string;
  value: number;
  suffix?: string;
};

export default function StatCounter({ label, value, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.4 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrameId = 0;
    const duration = 2500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentValue = Math.floor(progress * value);
      setCount(currentValue);

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
      className="flex flex-col items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-800/70 px-5 py-4 text-center shadow-md"
    >
      <div className="mb-1 text-3xl font-semibold text-sky-300 md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">{label}</div>
    </div>
  );
}

