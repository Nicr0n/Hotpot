import { MemoryStick } from "lucide-preact";

interface MemoryGridProps {
  memory_total: number;
  memory_used: number;
}

const MemoryGrid = ({ memory_total, memory_used }: MemoryGridProps) => {
  const memory_ratio = memory_used / memory_total;
  const memory_status_class = memory_ratio < 0.5
    ? "progress-success"
    : memory_ratio < 0.75
    ? "progress-warning"
    : "progress-error";
  const memory_percent_text = `${(memory_ratio * 100).toFixed(2)}%`;

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-1 items-center text-base font-bold">
        <MemoryStick class="w-4 h-4" />
        Memory
      </div>
      <div class="flex flex-row gap-2 items-end">
        <div class="grid place-items-center flex-1 relative">
          <progress
            class={`progress w-full h-3 grid-in-content col-start-1 row-start-1 ${memory_status_class} transition-all duration-1000 ease-in-out`}
            value={memory_used}
            max={memory_total}
          >
          </progress>

          <span class="col-start-1 row-start-1 text-xs font-medium z-10">
            {memory_percent_text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemoryGrid;
