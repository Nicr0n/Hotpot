import { HardDrive } from "lucide-preact";

interface CpuGridProps {
  hdd_total: number;
  hdd_used: number;
}

const DiskGrid = ({ hdd_total, hdd_used }: CpuGridProps) => {
  const disk_ratio = hdd_used / hdd_total;
  const disk_status_class = disk_ratio < 0.5
    ? "progress-success"
    : disk_ratio < 0.75
    ? "progress-warning"
    : "progress-error";
  const disk_percent_text = `${(disk_ratio * 100).toFixed(2)}%`;

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-1 items-center text-base font-bold">
        <HardDrive class="w-4 h-4" />
        Hard Disk
      </div>
      <div class="flex flex-row gap-2 items-end">
        <div class="grid place-items-center flex-1">
          {(hdd_total === 0 && hdd_used == 0)
            ? (
              <progress
                class={`progress w-full h-3 grid-in-content col-start-1 row-start-1 progress-error transition-all duration-1000 ease-in-out`}
                value="1"
                max="1"
              >
              </progress>
            )
            : (
              <progress
                class={`progress w-full h-3 grid-in-content col-start-1 row-start-1 ${disk_status_class} transition-all duration-1000 ease-in-out`}
                value={hdd_used}
                max={hdd_total}
              >
              </progress>
            )}
          {(hdd_total === 0 && hdd_used === 0)
            ? (
              <span class="col-start-1 row-start-1 text-xs font-medium z-10">
                NaN
              </span>
            )
            : (
              <span class="col-start-1 row-start-1 text-xs font-medium z-10">
                {disk_percent_text}
              </span>
            )}
        </div>
      </div>
    </div>
  );
};

export default DiskGrid;
