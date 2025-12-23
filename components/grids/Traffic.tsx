import { ArrowDownUp } from "lucide-preact";
import { calculate_traffic_unit } from "../../utils/common.ts";

interface TrafficGridProps {
  network_out: number;
  network_in: number;
  limit?: number;
}

const TrafficGrid = ({ limit, network_out, network_in }: TrafficGridProps) => {
  // calculate bidirectional traffic
  const bidirectional_traffic = network_in > network_out
    ? network_in
    : network_out;

  const bidirectional_traffic_text = calculate_traffic_unit(
    bidirectional_traffic,
  );

  const bidirectional_traffic_limit_text = (limit === undefined || limit === 0)
    ? "∞"
    : calculate_traffic_unit(limit);

  let traffic_limit_percent_text = "";
  if (limit === undefined || limit === 0) {
    traffic_limit_percent_text = "∞";
  } else {
    traffic_limit_percent_text = `${
      ((bidirectional_traffic / limit) * 100).toFixed(2)
    }%`;
  }

  const traffic_ratio = limit === 0
    ? 0
    : bidirectional_traffic / ((limit === undefined) ? 0 : limit);
  const traffic_status_class = traffic_ratio < 0.5
    ? "progress-success"
    : traffic_ratio < 0.8
    ? "progress-warning"
    : "progress-error";

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-1 items-center font-bold">
        <div class="flex flex-row gap-1 items-center text-sm flex-1">
          <ArrowDownUp class="w-4 h-4" />
          Traffic
        </div>
        <div class="text-xs">
          {bidirectional_traffic_text} / {bidirectional_traffic_limit_text}
        </div>
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
                value={bidirectional_traffic}
                max={limit}
              >
              </progress>
            )}

          <span class="col-start-1 row-start-1 text-xs font-medium z-10 group-[data-theme='light']:text-white">
            {traffic_limit_percent_text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrafficGrid;
