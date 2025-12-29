import { ServerStatus } from "../../types/serverstatus.ts";
import { getFlagEmoji } from "../../utils/common.ts";
import OsIcon from "../OsIcon.tsx";
import CpuGrid from "../grids/Cpu.tsx";
import DiskGrid from "../grids/Disk.tsx";
import MemoryGrid from "../grids/Memory.tsx";
import TrafficGrid from "../grids/Traffic.tsx";
import OutboundGrid from "../grids/Outbound.tsx";
import InboundGrid from "../grids/Inbound.tsx";
import IPProtocol from "../IP_protocol.tsx";

interface ServerCardProps {
  serverStatus: ServerStatus;
}

export default function ServerCard({ serverStatus }: ServerCardProps) {
  return (
    <div key={serverStatus.alias} class="card p-1 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex flex-row">
          <div class="flex-1 flex-row flex gap-1">
            <span class="inline-block" style="font-family: 'Noto Color Emoji';">
              {getFlagEmoji(serverStatus.location)}
            </span>
            <h2 class="font-bold text-base">
              {serverStatus.alias}
            </h2>
            <OsIcon os={serverStatus.labels} />
          </div>
          <div class="badge badge-success">Online</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CpuGrid cpu_usage={serverStatus.cpu}></CpuGrid>
          <MemoryGrid
            memory_total={serverStatus.memory_total}
            memory_used={serverStatus.memory_used}
          >
          </MemoryGrid>
          <DiskGrid
            hdd_used={serverStatus.hdd_used}
            hdd_total={serverStatus.hdd_total}
          >
          </DiskGrid>
          <TrafficGrid
            network_out={serverStatus.network_out}
            network_in={serverStatus.network_in}
            limit={0}
          />
          <OutboundGrid network_tx={serverStatus.network_tx} />
          <InboundGrid network_rx={serverStatus.network_rx} />
        </div>
        <div class="divider m-0.5"></div>
        <IPProtocol
          online6={serverStatus.online6}
          online4={serverStatus.online4}
        >
        </IPProtocol>
      </div>
    </div>
  );
}
