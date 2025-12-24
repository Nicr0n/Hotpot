import { CircleArrowUp } from "lucide-preact";
import { calculate_traffic_speed } from "../../utils/common.ts";

interface OutboundGridProps {
  network_tx: number;
}

const OutboundGrid = ({ network_tx }: OutboundGridProps) => {
  const network_tx_speed = calculate_traffic_speed(network_tx);
  return (
    <div class="flex flex-row gap-1 items-end font-bold">
      <div class="flex flex-row gap-1 items-center flex-1 text-sm">
        <CircleArrowUp class="w-4 h-4" />
        Outbound
      </div>
      <div class="text-xs">
        {network_tx_speed}
      </div>
    </div>
  );
};

export default OutboundGrid;
