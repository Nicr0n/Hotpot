export function calculate_traffic_unit(traffic: number): string {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let i = 0;
  while (traffic >= 1024 && i < units.length - 1) {
    traffic /= 1024;
    i++;
  }
  return `${traffic.toFixed(1)}${units[i]}`;
}

export function calculate_traffic_speed(traffic: number): string {
  const units = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s", "PB/s"];
  let i = 0;
  while (traffic >= 1024 && i < units.length - 1) {
    traffic /= 1024;
    i++;
  }
  return `${traffic.toFixed(1)}${units[i]}`;
}

export function calculate_hdd_unit(traffic: number): string {
  const units = ["MB", "GB", "TB", "PB"];
  let i = 0;
  while (traffic >= 1000 && i < units.length - 1) {
    traffic /= 1000;
    i++;
  }
  return `${traffic.toFixed(0)}${units[i]}`;
}

export function calculate_memory_unit(traffic: number): string {
  const units = ["KB", "MB", "GB", "TB", "PB"];
  let i = 0;
  while (traffic >= 1024 && i < units.length - 1) {
    traffic /= 1024;
    i++;
  }
  return `${traffic.toFixed(1)}${units[i]}`;
}

export function getFlagEmoji(countryCode: string) {
  // 确保是大写的两位国家代码，如 "CN", "US"
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
