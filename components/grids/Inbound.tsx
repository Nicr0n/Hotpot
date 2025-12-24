import { CircleArrowDown } from "lucide-preact";
import { calculate_traffic_speed } from "../../utils/common.ts";

interface InboundGridProps {
  network_rx: number;
}

const InboundGrid = ({ network_rx }: InboundGridProps) => {
  const network_rx_speed = calculate_traffic_speed(network_rx);
  return (
    <div class="flex flex-row gap-1 items-end font-bold">
      <div class="flex flex-row gap-1 items-center flex-1 text-sm">
        <CircleArrowDown class="w-4 h-4" />
        Inbound
      </div>
      <div class="text-xs">
        {network_rx_speed}
      </div>
    </div>
  );
};

export default InboundGrid;
