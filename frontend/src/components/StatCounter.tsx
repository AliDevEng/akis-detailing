import { useCounter } from "../hooks/useCounter";

interface Props {
  label: string;
  value: number;
  suffix?: string;
}

function StatCounter({ label, value, suffix = "+" }: Props) {
  const { ref, count } = useCounter(value);

  return (
    <div
      ref={ref}
      className="ak-glass relative flex flex-col items-center justify-center rounded-2xl px-5 py-5 text-center"
    >
      <div className="font-display text-3xl font-bold ak-gradient-text ak-counter-digit md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
        {label}
      </div>
    </div>
  );
}

export default StatCounter;
