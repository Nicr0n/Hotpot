// islands/LiveClock.tsx
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function LiveClock() {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 使用 24 小时制
  });

  const time = useSignal(formatter.format(new Date()));
  const isClient = typeof window !== "undefined";

  useEffect(() => {
    const timer = setInterval(() => {
      time.value = formatter.format(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    isClient ? <span>{time.value}</span> : null
  );
}
