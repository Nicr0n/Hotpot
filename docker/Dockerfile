# 第一阶段：构建
FROM denoland/deno:alpine AS builder
WORKDIR /app
COPY . .

# 必须先执行 build，生成 _fresh 目录
RUN deno task build

# 关键：编译 Fresh 自动生成的入口文件
# 这个文件会引入你的 main.ts 并启动服务器
RUN deno compile --output hotpot --include _fresh -A _fresh/compiled-entry.js

# 第二阶段：运行（使用 Debian Slim 保证稳定性）
FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# 拷贝二进制文件
COPY --from=builder /app/hotpot .

CMD ["./hotpot"]
