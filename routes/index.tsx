import { define } from "../utils.ts";
import { BACKEND_URL } from "../constants/server.tsx";
import { PageProps } from "fresh";
import { ServerStatusResponse } from "../types/serverstatus.ts";
import ServersList from "../islands/ServersStatus.tsx";

interface HomeData {
  serverstatus_reponse: ServerStatusResponse;
}

export const handler = define.handlers({
  async GET(_ctx) {
    const response = await fetch(new URL(BACKEND_URL + "/json/stats.json"));
    // 1. 先获取纯 JSON 数据
    const serverstatus_reponse: ServerStatusResponse = await response.json();
    // console.log(serverstatus_reponse);

    return {
      data: {
        serverstatus_reponse: serverstatus_reponse,
      },
    };
  },
});

export default function Page(
  { data }: PageProps<HomeData, unknown>,
) {
  return (
    <div class="md:px-12 md:py-8 px-6 py-4 min-h-screen bg-base-200">
      <ServersList server_list_init={data.serverstatus_reponse}>
      </ServersList>
    </div>
  );
}
