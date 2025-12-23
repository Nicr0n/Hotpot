import { ArrowDownUp } from "lucide-preact";

interface TrafficGridProps {
  network_out: number;
  limit?: number;
}

const TrafficGrid = ({ limit, network_out }: TrafficGridProps) => {
  let traffic_percent_text = "";
  if (limit === undefined || limit === 0) {
    traffic_percent_text = "∞";
  } else {
    traffic_percent_text = `${((network_out / limit) * 100).toFixed(2)}%`;
  }

  const traffic_ratio = limit === 0
    ? 0
    : network_out / ((limit === undefined) ? 0 : limit);
  const traffic_status_class = traffic_ratio < 0.5
    ? "progress-success"
    : traffic_ratio < 0.8
    ? "progress-warning"
    : "progress-error";

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-1 items-center text-base font-bold">
        <ArrowDownUp class="w-4 h-4" />
        Traffic
      </div>
      <div class="flex flex-row gap-2 items-end">
        <div class="grid place-items-center flex-1 relative">
          {limit === 0
            ? (
              <progress
                class={`progress w-full h-3 grid-in-content col-start-1 row-start-1  progress-primary transition-all duration-1000 ease-in-out `}
                value="1"
                max="1"
              >
              </progress>
            )
            : (
              <progress
                class={`progress w-full h-3 grid-in-content col-start-1 row-start-1 ${traffic_status_class} transition-all duration-1000 ease-in-out`}
                value={network_out}
                max={limit}
              >
              </progress>
            )}

          <span class="col-start-1 row-start-1 text-xs font-medium z-10 group-[data-theme='light']:text-white">
            {traffic_percent_text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrafficGrid;
