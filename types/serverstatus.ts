interface ServerStatus {
  alias: string;
  gid: string;
  cpu: number;
  memory_total: number;
  memory_used: number;
  labels: string;
  hdd_total: number;
  hdd_used: number;
  swap_total: number;
  swap_used: number;
  network_out: number;
  network_in: number;
}

export class ServerStatusCollection {
  servers: ServerStatus[];

  constructor(servers: ServerStatus[]) {
    this.servers = servers;
  }

  public count_gid_number(): number {
    const gid_counts = new Set<string>();
    this.servers.forEach((server) => gid_counts.add(server.gid));
    return gid_counts.size;
  }
}

interface ServerStatusResponse {
  servers: ServerStatus[];
}

export type { ServerStatus, ServerStatusResponse };
