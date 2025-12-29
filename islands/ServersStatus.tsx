import { useEffect, useState } from "preact/hooks";
import {
  ServerStatusCollection,
  ServerStatusResponse,
} from "../types/serverstatus.ts";
import LiveClock from "./LiveClock.tsx";
import ServerCard from "../components/cards/ServerCard.tsx";
import { CircleArrowDown, CircleArrowUp } from "lucide-preact";
import { calculate_traffic_speed } from "@/utils/common.ts";

interface ServerListProps {
  server_list_init: ServerStatusResponse;
}

export default function ServersList({ server_list_init }: ServerListProps) {
  const [server_list, set_server_list] = useState<ServerStatusCollection>(
    new ServerStatusCollection(server_list_init.servers),
  );

  useEffect(() => {
    // 2. 定义定时刷新逻辑
    const fetch_data = async () => {
      try {
        const response = await fetch("/json/stats.json");
        const json = await response.json();
        // 3. 更新状态：必须手动实例化 Class
        set_server_list(new ServerStatusCollection(json.servers));
      } catch (err) {
        console.error("get server stats error:", err);
      }
    };

    const timer = setInterval(fetch_data, 2000); // 每 5 秒刷一次
    return () => {
      clearInterval(timer); // 记得清理！
    };
  }, []);

  return (
    <div class="flex flex-col justify-center gap-4">
      <div class="grid md:grid-cols-3 gap-4 sm:grid-cols-1">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Total Servers</h2>
            <p>{server_list.servers.length}</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              Traffic
            </h2>
            <div class="flex-wrap flex gap-4">
              <div class="flex flex-row gap-1 items-center">
                <div class="flex flex-row gap-1 items-center">
                  <CircleArrowUp class="h-4 w-4" />
                  <span>Outbound</span>
                </div>
                <div>
                  {`${calculate_traffic_speed(server_list.get_total_tx())}`}
                </div>
              </div>
              <div class="flex flex-row gap-1 items-center">
                <div class="flex flex-row gap-1 items-center">
                  <CircleArrowDown class="h-4 w-4" />
                  <span>Inbound</span>
                </div>
                <div>
                  {`${calculate_traffic_speed(server_list.get_total_rx())}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Local Time</h2>
            <LiveClock />
          </div>
        </div>
      </div>
      <div class="divider divider-start">Servers Status</div>
      <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:grid-cols-1">
        {server_list.servers.map((server) => (
          <ServerCard key={server.alias} serverStatus={server} />
        ))}
      </div>
    </div>
  );
}
