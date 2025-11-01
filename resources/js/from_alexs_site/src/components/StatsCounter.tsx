import { useEffect, useState } from "react";

interface StatProps {
  end: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const StatCounter = ({ end, suffix, label, prefix = "" }: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-20 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCounter end={500} suffix="M+" label="Capital Matched" prefix="£" />
          <StatCounter end={150} suffix="+" label="Active Partners" />
          <StatCounter end={3} suffix="" label="Key Regions" />
          <StatCounter end={95} suffix="%" label="Success Rate" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
