import { ServerStatus } from "../../types/serverstatus.ts";
import { Cpu, MemoryStick } from "lucide-preact";
import OsIcon from "../OsIcon.tsx";

interface ServerCardProps {
  serverStatus: ServerStatus;
}

export default function ServerCard({ serverStatus }: ServerCardProps) {
  const cpu_status_class = serverStatus.cpu < 50
    ? "progress-success"
    : serverStatus.cpu < 75
    ? "progress-warning"
    : "progress-error";
  const memory_ratio = serverStatus.memory_used / serverStatus.memory_total;
  const memory_status_class = memory_ratio < 0.5
    ? "progress-success"
    : memory_ratio < 0.75
    ? "progress-warning"
    : "progress-error";
  const memory_percent_text = `${(memory_ratio * 100).toFixed(2)}%`;

  return (
    <div key={serverStatus.alias} class="card p-1 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex flex-row">
          <div class="flex-1 flex-row flex gap-1">
            <h2 class="font-bold text-base">{serverStatus.alias}</h2>
            <OsIcon os={serverStatus.labels} />
          </div>
          <div class="badge badge-success">Online</div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <div class="flex flex-row gap-1 items-center text-base font-bold">
              <Cpu class="w-4 h-4" />
              CPU
            </div>
            <div class="flex flex-row gap-2 items-end">
              <div class="grid place-items-center flex-1">
                <progress
                  class={`progress w-full h-3 grid-in-content col-start-1 row-start-1 ${cpu_status_class} transition-all duration-500 ease-in-out`}
                  value={serverStatus.cpu}
                  max="100"
                >
                </progress>
                <span class="col-start-1 row-start-1 text-xs font-medium z-10">
                  {serverStatus.cpu}%
                </span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex flex-row gap-1 items-center text-base font-bold">
              <MemoryStick class="w-4 h-4" />
              Memory
            </div>
            <div class="flex flex-row gap-2 items-end">
              <div class="grid place-items-center flex-1 relative">
                <progress
                  class={`progress w-full h-3 grid-in-content col-start-1 row-start-1 ${memory_status_class} transition-all duration-500 ease-in-out`}
                  value={serverStatus.memory_used}
                  max={serverStatus.memory_total}
                >
                </progress>

                <span class="col-start-1 row-start-1 text-xs font-medium z-10">
                  {memory_percent_text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
