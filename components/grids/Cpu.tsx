import { Cpu } from "lucide-preact";

interface CpuGridProps {
  cpu_usage: number;
}

const CpuGrid = ({ cpu_usage }: CpuGridProps) => {
  const cpu_status_class = cpu_usage < 50
    ? "progress-success"
    : cpu_usage < 75
    ? "progress-warning"
    : "progress-error";

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-1 items-center text-base font-bold">
        <Cpu class="w-4 h-4" />
        CPU
      </div>
      <div class="flex flex-row gap-2 items-end">
        <div class="grid place-items-center flex-1">
          <progress
            class={`progress w-full h-3 grid-in-content col-start-1 row-start-1 ${cpu_status_class} transition-all duration-1000 ease-in-out`}
            value={cpu_usage}
            max="100"
          >
          </progress>
          <span class="col-start-1 row-start-1 text-xs font-medium z-10">
            {cpu_usage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CpuGrid;
